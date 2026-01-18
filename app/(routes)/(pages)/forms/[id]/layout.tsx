import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  return {
    title: 'Form - Swami Vivekananda Govt College',
    description: 'Fill out the form from Swami Vivekananda Govt College. Submit your information securely for various college-related services and applications.',
    alternates: {
      canonical: `https://svcdalauda.amardeep.space/forms/${params.id}`,
    },
    openGraph: {
      title: 'Form - Swami Vivekananda Govt College',
      description: 'College application and submission form',
      type: 'website',
      url: `https://svcdalauda.amardeep.space/forms/${params.id}`,
    },
  };
}

export default function FormDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
