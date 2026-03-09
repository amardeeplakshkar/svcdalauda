// app/api/forms/[id]/submit/route.ts
import { NextResponse } from "next/server";
import { storage } from "@/lib/storage";
import { z } from "zod";

// ✅ Validate that submission data is a non-empty object
const submissionBodySchema = z.record(z.string(), z.unknown()).refine(
  (data) => Object.keys(data).length > 0,
  { message: "Submission data cannot be empty" }
);

export async function POST(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const formId = Number(id);

    if (Number.isNaN(formId)) {
      return NextResponse.json({ error: "Invalid form ID" }, { status: 400 });
    }

    // Verify form exists
    const form = await storage.getForm(formId);
    if (!form) {
      return NextResponse.json({ error: "Form not found" }, { status: 404 });
    }

    // ✅ Fix: check if form is published before accepting submissions
    if (!form.isPublished) {
      return NextResponse.json(
        { error: "This form is not accepting submissions" },
        { status: 403 }
      );
    }

    const body = await request.json();

    // ✅ Fix: validate the body is a proper non-empty object
    const parsedBody = submissionBodySchema.safeParse(body);
    if (!parsedBody.success) {
      return NextResponse.json(
        {
          error: "Validation error",
          details: parsedBody.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const submission = await storage.createSubmission({
      formId,
      data: parsedBody.data,
    });

    return NextResponse.json(submission, { status: 201 });
  } catch (error) {
    console.error("Error creating submission:", error);
    return NextResponse.json(
      { error: "Failed to create submission" },
      { status: 500 }
    );
  }
}