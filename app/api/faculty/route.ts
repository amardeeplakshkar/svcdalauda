// app/api/faculty/route.ts
import { NextResponse } from "next/server";
import { storage } from "@/lib/storage";
import { insertFacultySchema } from "@/shared/schema";
import { ZodError } from "zod";
import { checkAuth } from "@/lib/server";

export async function GET() {
  try {
    const facultyList = await storage.getFacultyList();
    return NextResponse.json(facultyList);
  } catch (error) {
    console.error("Error fetching faculty:", error);
    return NextResponse.json(
      { error: "Failed to fetch faculty list" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const authError = await checkAuth();
  if (authError) return authError;
  try {
    const body = await request.json();
    const validatedData = insertFacultySchema.parse(body);
    const faculty = await storage.createFaculty(validatedData);
    return NextResponse.json(faculty, { status: 201 });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { 
          error: "Validation error", 
          message: error|| "Invalid input data",
          details: error
        },
        { status: 400 }
      );
    }
    console.error("Error creating faculty:", error);
    return NextResponse.json(
      { error: "Failed to create faculty member" },
      { status: 500 }
    );
  }
}