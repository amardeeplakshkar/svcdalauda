// app/api/posts/[id]/route.ts
import { NextResponse } from "next/server";
import { storage } from "@/lib/storage";
import { insertPostSchema } from "@/shared/schema";
import { ZodError } from "zod";
import { checkAuth } from "@/lib/server";

type RouteContext = { params: Promise<{ id: string }> };

function parsePostId(id: string) {
  const parsed = parseInt(id, 10);
  return isNaN(parsed) ? null : parsed;
}

export async function GET(_req: Request, context: RouteContext) {
  try {
    const { id } = await context.params;
    const postId = parsePostId(id);

    if (postId === null) {
      return NextResponse.json({ error: "Invalid post ID" }, { status: 400 });
    }

    const post = await storage.getPost(postId);

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error("Error fetching post:", error);
    return NextResponse.json({ error: "Failed to fetch post" }, { status: 500 });
  }
}

export async function PUT(request: Request, context: RouteContext) {
  const authError = await checkAuth();
  if (authError) return authError;

  try {
    const { id } = await context.params;
    const postId = parsePostId(id);

    if (postId === null) {
      return NextResponse.json({ error: "Invalid post ID" }, { status: 400 });
    }

    // ✅ Fix: check existence before parsing body (avoids wasted parsing on missing resource)
    const existing = await storage.getPost(postId);
    if (!existing) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    const body = await request.json();

    // ✅ Fix: require at least one field
    const schema = insertPostSchema.partial().refine(
      (data) => Object.keys(data).length > 0,
      { message: "At least one field must be provided for update" }
    );
    const validatedData = schema.parse(body);

    const post = await storage.updatePost(postId, validatedData);
    return NextResponse.json(post);
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          error: "Validation error",
          details: error.flatten().fieldErrors, // ✅ Fix: properly serialized
        },
        { status: 400 }
      );
    }
    console.error("Error updating post:", error);
    return NextResponse.json({ error: "Failed to update post" }, { status: 500 });
  }
}

export async function DELETE(_request: Request, context: RouteContext) {
  const authError = await checkAuth();
  if (authError) return authError;

  try {
    const { id } = await context.params;
    const postId = parsePostId(id);

    if (postId === null) {
      return NextResponse.json({ error: "Invalid post ID" }, { status: 400 });
    }

    const existing = await storage.getPost(postId);
    if (!existing) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    await storage.deletePost(postId);
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("Error deleting post:", error);
    return NextResponse.json({ error: "Failed to delete post" }, { status: 500 });
  }
}