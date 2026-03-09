// app/api/forms/[id]/route.ts
import { NextResponse } from "next/server";
import { api } from "@/shared/routes";
import { storage } from "@/lib/storage";
import { z } from "zod";
import { checkAuth } from "@/lib/server";

type RouteContext = { params: Promise<{ id: string }> };

function parseFormId(id: string) {
  const parsed = Number(id);
  return Number.isNaN(parsed) ? null : parsed;
}

export async function GET(_req: Request, context: RouteContext) {
  try {
    const { id } = await context.params;
    const formId = parseFormId(id);

    if (formId === null) {
      return NextResponse.json({ error: "Invalid form ID" }, { status: 400 });
    }

    const form = await storage.getForm(formId);

    if (!form) {
      return NextResponse.json(
        api.forms.get.responses[404].parse({ message: "Form not found" }),
        { status: 404 }
      );
    }

    return NextResponse.json(
      api.forms.get.responses[200].parse(form),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching form:", error);
    return NextResponse.json({ error: "Failed to fetch form" }, { status: 500 });
  }
}

export async function PUT(req: Request, context: RouteContext) {
  const authError = await checkAuth();
  if (authError) return authError;

  try {
    const { id } = await context.params;
    const formId = parseFormId(id);

    if (formId === null) {
      return NextResponse.json({ error: "Invalid form ID" }, { status: 400 });
    }

    // ✅ Fix: check existence first
    const existing = await storage.getForm(formId);
    if (!existing) {
      return NextResponse.json({ error: "Form not found" }, { status: 404 });
    }

    const body = await req.json();
    const input = api.forms.update.input.parse(body);
    const form = await storage.updateForm(formId, input);

    return NextResponse.json(form);
  } catch (error) {
    // ✅ Fix: was `if (err)` which is always true and leaked raw error to client
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: "Validation error",
          details: error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }
    console.error("UPDATE FORM FAILED:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// ✅ New: DELETE was missing entirely
export async function DELETE(_req: Request, context: RouteContext) {
  const authError = await checkAuth();
  if (authError) return authError;

  try {
    const { id } = await context.params;
    const formId = parseFormId(id);

    if (formId === null) {
      return NextResponse.json({ error: "Invalid form ID" }, { status: 400 });
    }

    const existing = await storage.getForm(formId);
    if (!existing) {
      return NextResponse.json({ error: "Form not found" }, { status: 404 });
    }

    await storage.deleteForm(formId);
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("Error deleting form:", error);
    return NextResponse.json({ error: "Failed to delete form" }, { status: 500 });
  }
}