// app/api/gallery/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { storage } from "@/lib/storage";
import { checkAuth } from "@/lib/server";
import { insertGalleryImageSchema } from "@/shared/schema";
import { z } from "zod";

type RouteContext = { params: Promise<{ id: string }> };

function parseId(id: string) {
  const parsed = parseInt(id, 10);
  return isNaN(parsed) ? null : parsed;
}

// ─── PATCH /api/gallery/[id] ──────────────────────────────────────────────────
// Admin only — update image metadata in Supabase
export async function PATCH(req: NextRequest, context: RouteContext) {
  const authError = await checkAuth();
  if (authError) return authError;

  try {
    const { id } = await context.params;
    const imageId = parseId(id);

    if (imageId === null) {
      return NextResponse.json({ error: "Invalid image ID" }, { status: 400 });
    }

    const existing = await storage.getGalleryImage(imageId);
    if (!existing) {
      return NextResponse.json({ error: "Image not found" }, { status: 404 });
    }

    const body = await req.json();
    const schema = insertGalleryImageSchema.partial().refine(
      (data) => Object.keys(data).length > 0,
      { message: "At least one field must be provided" }
    );

    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation error", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const updated = await storage.updateGalleryImage(imageId, parsed.data);
    return NextResponse.json(updated);
  } catch (error) {
    console.error("Error updating gallery image:", error);
    return NextResponse.json({ error: "Failed to update image" }, { status: 500 });
  }
}

// ─── DELETE /api/gallery/[id] ─────────────────────────────────────────────────
// Admin only — delete image record from Supabase (ImageKit file is kept)
export async function DELETE(_req: NextRequest, context: RouteContext) {
  const authError = await checkAuth();
  if (authError) return authError;

  try {
    const { id } = await context.params;
    const imageId = parseId(id);

    if (imageId === null) {
      return NextResponse.json({ error: "Invalid image ID" }, { status: 400 });
    }

    const existing = await storage.getGalleryImage(imageId);
    if (!existing) {
      return NextResponse.json({ error: "Image not found" }, { status: 404 });
    }

    await storage.deleteGalleryImage(imageId);
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("Error deleting gallery image:", error);
    return NextResponse.json({ error: "Failed to delete image" }, { status: 500 });
  }
}