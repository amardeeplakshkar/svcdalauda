import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Campus News & Updates - Swami Vivekananda Govt College',
  description: 'Stay updated with the latest news, announcements, and notices from Swami Vivekananda Govt College. Read our blog posts and important campus updates.',
  keywords: 'news, updates, announcements, notices, blog, campus',
  alternates: {
    canonical: 'https://svcdalauda.amardeep.space/posts',
  },
  openGraph: {
    title: 'Campus News & Updates - Swami Vivekananda Govt College',
    description: 'Latest campus news, announcements, and important updates',
    type: 'website',
    url: 'https://svcdalauda.amardeep.space/posts',
  },
};

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
