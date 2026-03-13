// app/(routes)/(pages)/faculty/[id]/layout.tsx
import { createMetadata } from "@/lib/seo"
import type { Metadata } from "next"

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  return createMetadata({
    title: "Faculty Profile",
    description: "View detailed profile of a faculty member at Swami Vivekananda Govt College.",
    path: `/faculty/${params.id}`,
  })
}

export default function FacultyDetailLayout({ children }: { children: React.ReactNode }) {
  return children
}