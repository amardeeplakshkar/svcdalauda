// app/(routes)/(pages)/forms/[id]/layout.tsx
import { createMetadata } from "@/lib/seo"
import type { Metadata } from "next"

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  return createMetadata({
    title: "Application Form",
    description: "Fill out the form from Swami Vivekananda Govt College.",
    path: `/forms/${params.id}`,
    noIndex: true,
  })
}

export default function FormDetailLayout({ children }: { children: React.ReactNode }) {
  return children
}