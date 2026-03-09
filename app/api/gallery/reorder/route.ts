// app/api/gallery/reorder/route.ts
import { NextRequest, NextResponse } from "next/server";
import { storage } from "@/lib/storage";
import { checkAuth } from "@/lib/server";
import { z } from "zod";

const reorderSchema = z.object({
  order: z
    .array(
      z.object({
        id: z.number().int().positive(),
        displayOrder: z.number().int().min(0),
      })
    )
    .min(1, "At least one item required"),
});

// ─── PATCH /api/gallery/reorder ───────────────────────────────────────────────
// Admin only — bulk update displayOrder using Supabase row IDs
// Body: { order: [{ id: number, displayOrder: number }] }
export async function PATCH(req: NextRequest) {
  const authError = await checkAuth();
  if (authError) return authError;

  try {
    const body = await req.json();
    const parsed = reorderSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation error", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    await storage.reorderGalleryImages(parsed.data.order);

    return NextResponse.json({
      message: `Successfully reordered ${parsed.data.order.length} images`,
      count: parsed.data.order.length,
    });
  } catch (error) {
    console.error("Error reordering gallery:", error);
    return NextResponse.json({ error: "Failed to reorder gallery" }, { status: 500 });
  }
}