// hooks/use-gallery.ts
'use client'

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  upload,
  ImageKitAbortError,
  ImageKitInvalidRequestError,
  ImageKitUploadNetworkError,
  ImageKitServerError,
} from "@imagekit/next";
import type { GalleryImage, GalleryCategory } from "@/shared/schema";

export type { GalleryImage, GalleryCategory };

const QUERY_KEY = "gallery";

// ─── Fetch ────────────────────────────────────────────────────────────────────

export function useGallery(category?: GalleryCategory) {
  return useQuery<GalleryImage[]>({
    queryKey: [QUERY_KEY, category],
    queryFn: async () => {
      const url = new URL("/api/gallery", window.location.origin);
      if (category && category !== "all") url.searchParams.set("category", category);
      const res = await fetch(url.toString());
      if (!res.ok) throw new Error("Failed to fetch gallery");
      return res.json();
    },
  });
}

// ─── Upload ───────────────────────────────────────────────────────────────────
// Flow:
// 1. Get short-lived auth params from /api/gallery/auth (server, never exposes private key)
// 2. Upload file directly to ImageKit from browser via upload()
// 3. Save returned url + fileId + metadata to Supabase via POST /api/gallery

interface UploadPayload {
  file: File;
  title: string;
  description: string;
  altText: string;
  category: GalleryCategory;
  displayOrder: number;
  onProgress?: (percent: number) => void;
  abortSignal?: AbortSignal;
}

async function getAuthParams() {
  const res = await fetch("/api/gallery/auth");
  if (!res.ok) throw new Error("Failed to get upload credentials");
  return res.json() as Promise<{
    token: string;
    expire: number;
    signature: string;
    publicKey: string;
  }>;
}

export function useUploadGalleryImage() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: async ({
      file,
      title,
      description,
      altText,
      category,
      displayOrder,
      onProgress,
      abortSignal,
    }: UploadPayload) => {
      // Step 1 — get auth params from our server
      const { token, expire, signature, publicKey } = await getAuthParams();

      // Step 2 — upload directly to ImageKit from browser
      let uploaded;
      try {
        uploaded = await upload({
          file,
          fileName: file.name,
          token,
          expire,
          signature,
          publicKey,
          folder: "/gallery",
          tags: [category],
          useUniqueFileName: true,
          onProgress: (event) => onProgress?.((event.loaded / event.total) * 100),
          ...(abortSignal ? { abortSignal } : {}),
        });
      } catch (error) {
        if (error instanceof ImageKitAbortError) throw new Error("Upload cancelled");
        if (error instanceof ImageKitInvalidRequestError) throw new Error(`Invalid request: ${error.message}`);
        if (error instanceof ImageKitUploadNetworkError) throw new Error("Network error during upload");
        if (error instanceof ImageKitServerError) throw new Error(`ImageKit error: ${error.message}`);
        throw error;
      }

      // Step 3 — save metadata to Supabase
      const res = await fetch("/api/gallery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fileId: uploaded.fileId,
          url: uploaded.url,
          title,
          description,
          altText,
          category,
          displayOrder,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error ?? "Failed to save image metadata");
      }

      return res.json() as Promise<GalleryImage>;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: [QUERY_KEY] }),
  });
}

// ─── Update metadata ──────────────────────────────────────────────────────────

type UpdatePayload = {
  id: number;
  title?: string;
  description?: string;
  altText?: string;
  category?: GalleryCategory;
  displayOrder?: number;
};

export function useUpdateGalleryImage() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, ...updates }: UpdatePayload) => {
      const res = await fetch(`/api/gallery/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error ?? "Update failed");
      }
      return res.json() as Promise<GalleryImage>;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: [QUERY_KEY] }),
  });
}

// ─── Delete ───────────────────────────────────────────────────────────────────

export function useDeleteGalleryImage() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      const res = await fetch(`/api/gallery/${id}`, { method: "DELETE" });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error ?? "Delete failed");
      }
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: [QUERY_KEY] }),
  });
}

// ─── Reorder ──────────────────────────────────────────────────────────────────

export function useReorderGallery() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (order: { id: number; displayOrder: number }[]) => {
      const res = await fetch("/api/gallery/reorder", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order }),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error ?? "Reorder failed");
      }
      return res.json();
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: [QUERY_KEY] }),
  });
}