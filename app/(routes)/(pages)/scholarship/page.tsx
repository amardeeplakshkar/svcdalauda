import { createMetadata } from '@/lib/seo';
import { Award, BookOpen, ChevronRight, GraduationCap, Link as LinkIcon, Star } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { getLocale, IntlayerServerProvider, useIntlayer } from 'next-intlayer/server';
import { NextPage } from 'next';

export const metadata = createMetadata({
  title: "Scholarships",
})

const ScholarshipPage = () => {
  const content = useIntlayer("scholarshipPage");
  
  const icons = [GraduationCap, Award, Star, Star, BookOpen]; // Maps roughly to the original static layout

  return (
    <div className="bg-background-light overflow-x-hidden dark:bg-background-dark text-gray-800 dark:text-gray-100 transition-colors duration-200 min-h-screen">
      <header className="bg-primary py-8 text-white text-center shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl quote-text md:text-5xl font-bold mb-2">{content.title}</h1>
          <div className="h-1 w-24 bg-secondary mx-auto rounded-full"></div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 md:py-20 max-w-4xl space-y-12">
        
        {/* Intro */}
        <section className="text-center space-y-4">
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {content.intro}
          </p>
        </section>

        {/* Schemes List */}
        <div className="grid grid-cols-1 gap-6">
          {content.schemes.map((scheme, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border-l-4 border-secondary hover:shadow-xl transition-shadow flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary mt-1">
                  <IconComponent size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary dark:text-gold mb-2">{scheme.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{scheme.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Resources Reference */}
        <section className="bg-primary/5 dark:bg-primary/10 p-8 rounded-2xl border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-6 mt-12">
          <div className="flex items-center gap-4">
            <div className="bg-secondary text-white p-4 rounded-full shrink-0">
              <LinkIcon size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary dark:text-orange-400 mb-1">{content.reference.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{content.reference.desc}</p>
            </div>
          </div>
          <Link href="/resources" className="shrink-0 whitespace-nowrap inline-flex items-center gap-2 bg-primary hover:bg-red-900 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md">
            {content.reference.button} <ChevronRight size={20} />
          </Link>
        </section>

      </main>
    </div>
  );
};

const Page: NextPage = async () => {
  const locale = await getLocale();

  return (
    <IntlayerServerProvider locale={locale}>
      <ScholarshipPage />
    </IntlayerServerProvider>
  );
};

export default Page;
