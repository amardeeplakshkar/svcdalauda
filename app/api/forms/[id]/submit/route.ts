// app/api/forms/[id]/submit/route.ts
import { NextResponse } from "next/server";
import { storage } from "@/lib/storage";

export async function POST(
    request: Request,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await context.params; // ✅ IMPORTANT
        const formId = Number(id);
    
    if (isNaN(formId)) {
      return NextResponse.json(
        { error: "Invalid form ID" },
        { status: 400 }
      );
    }

    // Verify form exists
    const form = await storage.getForm(formId);
    if (!form) {
      return NextResponse.json(
        { error: "Form not found" },
        { status: 404 }
      );
    }

    const body = await request.json();
    
    // Create submission with the form ID from URL params
    const submission = await storage.createSubmission({
      formId,
      data: body,
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