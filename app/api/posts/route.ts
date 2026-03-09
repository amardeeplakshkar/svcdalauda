// app/api/posts/route.ts
import { NextResponse } from "next/server";
import { storage } from "@/lib/storage";
import { insertPostSchema } from "@/shared/schema";
import { ZodError } from "zod";
import { checkAuth } from "@/lib/server";

const VALID_CATEGORIES = ["blog", "announcement", "notice"] as const;
type PostCategory = (typeof VALID_CATEGORIES)[number];

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");

    if (category && !VALID_CATEGORIES.includes(category as PostCategory)) {
      return NextResponse.json(
        { error: `Invalid category. Must be one of: ${VALID_CATEGORIES.join(", ")}` },
        { status: 400 }
      );
    }

    const posts = await storage.getPosts(category as PostCategory | undefined);
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const authError = await checkAuth();
  if (authError) return authError;

  try {
    const body = await request.json();
    const validatedData = insertPostSchema.parse(body);
    const post = await storage.createPost(validatedData);
    return NextResponse.json(post, { status: 201 });
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
    console.error("Error creating post:", error);
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
  }
}