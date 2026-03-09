// app/api/faculty/[id]/route.ts
import { NextResponse } from "next/server";
import { storage } from "@/lib/storage";
import { insertFacultySchema } from "@/shared/schema";
import { ZodError } from "zod";
import { checkAuth } from "@/lib/server";

type RouteContext = { params: Promise<{ id: string }> };

function parseFacultyId(id: string) {
  const parsed = parseInt(id, 10);
  return isNaN(parsed) ? null : parsed;
}

export async function GET(_req: Request, context: RouteContext) {
  try {
    const { id } = await context.params;
    const facultyId = parseFacultyId(id);

    if (facultyId === null) {
      return NextResponse.json({ error: "Invalid faculty ID" }, { status: 400 });
    }

    const faculty = await storage.getFaculty(facultyId);

    if (!faculty) {
      return NextResponse.json({ error: "Faculty member not found" }, { status: 404 });
    }

    return NextResponse.json(faculty);
  } catch (error) {
    console.error("Error fetching faculty:", error);
    return NextResponse.json({ error: "Failed to fetch faculty member" }, { status: 500 });
  }
}

export async function PUT(request: Request, context: RouteContext) {
  const authError = await checkAuth();
  if (authError) return authError;

  try {
    const { id } = await context.params;
    const facultyId = parseFacultyId(id);

    if (facultyId === null) {
      return NextResponse.json({ error: "Invalid faculty ID" }, { status: 400 });
    }

    const existing = await storage.getFaculty(facultyId);
    if (!existing) {
      return NextResponse.json({ error: "Faculty member not found" }, { status: 404 });
    }

    const body = await request.json();

    // ✅ Fix: require at least one field — avoids no-op empty updates
    const schema = insertFacultySchema.partial().refine(
      (data) => Object.keys(data).length > 0,
      { message: "At least one field must be provided for update" }
    );
    const validatedData = schema.parse(body);

    const faculty = await storage.updateFaculty(facultyId, validatedData);
    return NextResponse.json(faculty);
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          error: "Validation error",
          details: error.flatten().fieldErrors, // ✅ Fix: serialize properly
        },
        { status: 400 }
      );
    }
    console.error("Error updating faculty:", error);
    return NextResponse.json({ error: "Failed to update faculty member" }, { status: 500 });
  }
}

export async function DELETE(_request: Request, context: RouteContext) {
  const authError = await checkAuth();
  if (authError) return authError;

  try {
    const { id } = await context.params;
    const facultyId = parseFacultyId(id);

    if (facultyId === null) {
      return NextResponse.json({ error: "Invalid faculty ID" }, { status: 400 });
    }

    const existing = await storage.getFaculty(facultyId);
    if (!existing) {
      return NextResponse.json({ error: "Faculty member not found" }, { status: 404 });
    }

    await storage.deleteFaculty(facultyId);
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("Error deleting faculty:", error);
    return NextResponse.json({ error: "Failed to delete faculty member" }, { status: 500 });
  }
}