// app/api/gallery/auth/route.ts
import { NextResponse } from "next/server";
import { getUploadAuthParams, type GenerateAuthOptions, type AuthResponse } from "@imagekit/next/server";
import { checkAuth } from "@/lib/server";

// ─── GET /api/gallery/auth ────────────────────────────────────────────────────
// Admin only — returns short-lived auth params for client-side upload via
// the `upload()` function from "@imagekit/next". Private key never leaves server.
export async function GET() {
  const authError = await checkAuth();
  if (authError) return authError;

  try {
    const options: GenerateAuthOptions = {
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY as string,
      publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY as string,
      // expire: 30 * 60, // optional — token lifetime in seconds (max 1hr)
    };

    const { token, expire, signature }: AuthResponse = getUploadAuthParams(options);

    return NextResponse.json({
      token,
      expire,
      signature,
      publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
    });
  } catch (error) {
    console.error("Error generating ImageKit auth:", error);
    return NextResponse.json(
      { error: "Failed to generate upload credentials" },
      { status: 500 }
    );
  }
}