// app/api/forms/route.ts
import { NextRequest, NextResponse } from "next/server";
import { api } from "@/shared/routes";
import { storage } from "@/lib/storage";
import { z } from "zod";
import { checkAuth } from "@/lib/server";

export async function GET() {
  try {
    const forms = await storage.getForms();
    return NextResponse.json(forms);
  } catch (error) {
    console.error("Error fetching forms:", error);
    return NextResponse.json(
      { error: "Failed to fetch forms" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  const authError = await checkAuth();
  if (authError) return authError;
  try {
    const body = await req.json();
    const input = api.forms.create.input.parse(body);

    const form = await storage.createForm(input);

    return NextResponse.json(
      api.forms.create.responses[201].parse(form),
      { status: 201 }
    );
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { message: err.message, field: "." },
        { status: 400 }
      );
    }

    console.error("CREATE FORM FAILED:", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
