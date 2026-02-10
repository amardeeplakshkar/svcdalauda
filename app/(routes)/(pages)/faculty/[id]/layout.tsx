import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  return {
    title: 'Faculty Member - Swami Vivekananda Govt College',
    description: 'View detailed profile of a faculty member at Swami Vivekananda Govt College. Find contact information, expertise, and academic qualifications.',
    alternates: {
      canonical: `https://www.svgcdalauda.in/faculty/${params.id}`,
    },
    openGraph: {
      title: 'Faculty Member - Swami Vivekananda Govt College',
      description: 'Faculty member profile and details',
      type: 'profile',
      url: `https://www.svgcdalauda.in/faculty/${params.id}`,
    },
  };
}

export default function FacultyDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
