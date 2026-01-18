// app/api/faculty/[id]/route.ts
import { NextResponse } from "next/server";
import { storage } from "@/lib/storage";
import { insertFacultySchema } from "@/shared/schema";
import { ZodError } from "zod";
import { checkAuth } from "@/lib/server";

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const facultyId = parseInt(id);
    
    if (isNaN(facultyId)) {
      return NextResponse.json(
        { error: "Invalid faculty ID" },
        { status: 400 }
      );
    }

    const faculty = await storage.getFaculty(facultyId);
    
    if (!faculty) {
      return NextResponse.json(
        { error: "Faculty member not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(faculty);
  } catch (error) {
    console.error("Error fetching faculty:", error);
    return NextResponse.json(
      { error: "Failed to fetch faculty member" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const authError = await checkAuth();
  if (authError) return authError;
  try {
    const { id } = await context.params;
    const facultyId = parseInt(id);
    
    if (isNaN(facultyId)) {
      return NextResponse.json(
        { error: "Invalid faculty ID" },
        { status: 400 }
      );
    }

    // Check if faculty exists
    const existing = await storage.getFaculty(facultyId);
    if (!existing) {
      return NextResponse.json(
        { error: "Faculty member not found" },
        { status: 404 }
      );
    }

    const body = await request.json();
    const validatedData = insertFacultySchema.partial().parse(body);
    const faculty = await storage.updateFaculty(facultyId, validatedData);
    
    return NextResponse.json(faculty);
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { 
          error: "Validation error", 
          message: error || "Invalid input data",
          details: error
        },
        { status: 400 }
      );
    }
    console.error("Error updating faculty:", error);
    return NextResponse.json(
      { error: "Failed to update faculty member" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const authError = await checkAuth();
  if (authError) return authError;
  try {
    const { id } = await context.params;
    const facultyId = parseInt(id);
    
    if (isNaN(facultyId)) {
      return NextResponse.json(
        { error: "Invalid faculty ID" },
        { status: 400 }
      );
    }

    // Check if faculty exists
    const existing = await storage.getFaculty(facultyId);
    if (!existing) {
      return NextResponse.json(
        { error: "Faculty member not found" },
        { status: 404 }
      );
    }

    await storage.deleteFaculty(facultyId);
    
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("Error deleting faculty:", error);
    return NextResponse.json(
      { error: "Failed to delete faculty member" },
      { status: 500 }
    );
  }
}