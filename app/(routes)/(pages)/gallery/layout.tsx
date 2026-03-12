import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Gallery",
})

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
