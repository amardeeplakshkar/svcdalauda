import { createMetadata } from '@/lib/seo';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  return createMetadata({
    title: "Campus News",
    description: "Read the latest post from Swami Vivekananda Govt College. Stay informed with campus news, announcements, and updates.",
    path: `/posts/${params.id}`,
  })
}

export default function PostDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
