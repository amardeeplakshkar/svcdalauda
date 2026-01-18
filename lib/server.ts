'use server'

import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export async function checkAuth() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json(
      { error: "Unauthorized", message: "You must be logged in to access this resource" },
      { status: 401 }
    );
  }

  return null
}