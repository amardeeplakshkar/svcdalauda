import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: 'Faculty Directory - Swami Vivekananda Govt College',
  description: 'Meet our distinguished faculty members. Browse our faculty directory to find contact information and academic details of our teaching staff.',
  keywords: 'faculty, professors, teachers, directory, staff, dalauda',
  alternates: {
    canonical: 'https://www.svgcdalauda.in/faculty',
  },
  openGraph: {
    title: 'Faculty Directory - Swami Vivekananda Govt College',
    description: 'Explore our team of dedicated educators and researchers',
    type: 'website',
    url: 'https://www.svgcdalauda.in/faculty',
  },
};

export default function FacultyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
