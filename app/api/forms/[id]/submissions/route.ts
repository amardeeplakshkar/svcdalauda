// app/api/forms/[id]/submissions/route.ts
import { NextResponse } from "next/server";
import { storage } from "@/lib/storage";

export async function GET(
    _req: Request,
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

        const submissions = await storage.getSubmissions(formId);
        return NextResponse.json(submissions);
    } catch (error) {
        console.error("Error fetching submissions:", error);
        return NextResponse.json(
            { error: "Failed to fetch submissions" },
            { status: 500 }
        );
    }
}