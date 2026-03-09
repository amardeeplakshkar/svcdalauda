// app/api/gallery/route.ts
import { NextRequest, NextResponse } from "next/server";
import { storage } from "@/lib/storage";
import { checkAuth } from "@/lib/server";
import { insertGalleryImageSchema, GALLERY_CATEGORIES, type GalleryCategory } from "@/shared/schema";
import { z } from "zod";

// ─── GET /api/gallery ─────────────────────────────────────────────────────────
// Public — list all gallery images, optionally filtered by ?category=
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category") as GalleryCategory | null;

    if (category && !GALLERY_CATEGORIES.includes(category)) {
      return NextResponse.json(
        { error: `Invalid category. Must be one of: ${GALLERY_CATEGORIES.join(", ")}` },
        { status: 400 }
      );
    }

    const images = await storage.getGalleryImages(category ?? undefined);
    return NextResponse.json(images);
  } catch (error) {
    console.error("Error fetching gallery:", error);
    return NextResponse.json({ error: "Failed to fetch gallery images" }, { status: 500 });
  }
}

// ─── POST /api/gallery ────────────────────────────────────────────────────────
// Admin only — save image metadata to Supabase after client-side upload to ImageKit
// Client uploads file directly to ImageKit via upload() from @imagekit/next,
// then calls this endpoint with the returned url + fileId + metadata
export async function POST(req: NextRequest) {
  const authError = await checkAuth();
  if (authError) return authError;

  try {
    const body = await req.json();
    const parsed = insertGalleryImageSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation error", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const image = await storage.createGalleryImage(parsed.data);
    return NextResponse.json(image, { status: 201 });
  } catch (error) {
    console.error("Error saving gallery image:", error);
    return NextResponse.json({ error: "Failed to save gallery image" }, { status: 500 });
  }
}