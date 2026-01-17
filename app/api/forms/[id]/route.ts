// app/api/forms/[id]/route.ts
import { NextResponse } from "next/server";
import { api } from "@/shared/routes";
import { storage } from "@/lib/storage";

export async function GET(
  _req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; // ✅ IMPORTANT
  const formId = Number(id);
  const form = await storage.getForm(Number(formId));

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
}

export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const formId = Number(id);

    if (Number.isNaN(formId)) {
      return NextResponse.json({ message: "Invalid form ID" }, { status: 400 });
    }

    const body = await req.json();
    const input = api.forms.update.input.parse(body);

    const form = await storage.updateForm(formId, input);

    if (!form) {
      return NextResponse.json({ message: "Form not found" }, { status: 404 });
    }

    return NextResponse.json(form);
  } catch (err) {
    if (err) {
      return NextResponse.json(
        {
          message: err,
          field: err,
        },
        { status: 400 }
      );
    }

    console.error("UPDATE FORM FAILED:", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
