import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  return {
    title: 'Post - Swami Vivekananda Govt College',
    description: 'Read the latest post from Swami Vivekananda Govt College. Stay informed with campus news, announcements, and updates.',
    alternates: {
      canonical: `https://www.svgcdalauda.in/posts/${params.id}`,
    },
    openGraph: {
      title: 'Post - Swami Vivekananda Govt College',
      description: 'Campus news and updates',
      type: 'article',
      url: `https://www.svgcdalauda.in/posts/${params.id}`,
    },
  };
}

export default function PostDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
