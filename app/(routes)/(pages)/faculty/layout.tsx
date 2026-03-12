import { createMetadata } from '@/lib/seo';
import { Metadata } from 'next';
import React from 'react'

export const metadata = createMetadata({
  title: "Faculty Directory",
})

export default function FacultyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
