import { createMetadata } from '@/lib/seo';
import { Award, BookOpen, ChevronRight, GraduationCap, Link as LinkIcon, Star } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export const metadata = createMetadata({
  title: "Scholarships",
})

const ScholarshipPage = () => {
  return (
    <div className="bg-background-light overflow-x-hidden dark:bg-background-dark text-gray-800 dark:text-gray-100 transition-colors duration-200 min-h-screen">
      <header className="bg-primary py-8 text-white text-center shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl quote-text md:text-5xl font-bold mb-2">Scholarships</h1>
          <div className="h-1 w-24 bg-secondary mx-auto rounded-full"></div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 md:py-20 max-w-4xl space-y-12">
        
        {/* Intro */}
        <section className="text-center space-y-4">
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Regular students can take benefit of various types of scholarships according to their eligibility and criteria. The following scholarship schemes are available for students:
          </p>
        </section>

        {/* Schemes List */}
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border-l-4 border-secondary hover:shadow-xl transition-shadow flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full text-primary mt-1">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary dark:text-gold mb-2">Post Matric Scholarship for OBC / ST / SC Students</h3>
              <p className="text-gray-600 dark:text-gray-400">Financial assistance provided by the Government for students belonging to reserved categories.</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border-l-4 border-secondary hover:shadow-xl transition-shadow flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full text-primary mt-1">
              <Award size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary dark:text-gold mb-2">Post Matric Scholarship for Minority Students</h3>
              <p className="text-gray-600 dark:text-gray-400">Scholarship provided to minority category students for higher education.</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border-l-4 border-secondary hover:shadow-xl transition-shadow flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full text-primary mt-1">
              <Star size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary dark:text-gold mb-2">Gaon Ki Beti Incentive Scheme for Girls</h3>
              <p className="text-gray-600 dark:text-gray-400">Special incentive scheme for meritorious rural girl students.</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border-l-4 border-secondary hover:shadow-xl transition-shadow flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full text-primary mt-1">
              <Star size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary dark:text-gold mb-2">Pratibha Kiran Incentive Scheme for Girls</h3>
              <p className="text-gray-600 dark:text-gray-400">Scholarship for talented girl students from urban areas.</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border-l-4 border-secondary hover:shadow-xl transition-shadow flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full text-primary mt-1">
              <BookOpen size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary dark:text-gold mb-2">Aawas Sahayata Scheme for ST & SC Students</h3>
              <p className="text-gray-600 dark:text-gray-400">Housing financial assistance for SC and ST students.</p>
            </div>
          </div>
        </div>

        {/* Resources Reference */}
        <section className="bg-primary/5 dark:bg-primary/10 p-8 rounded-2xl border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-6 mt-12">
          <div className="flex items-center gap-4">
            <div className="bg-secondary text-white p-4 rounded-full shrink-0">
              <LinkIcon size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary dark:text-orange-400 mb-1">Looking for more?</h3>
              <p className="text-gray-700 dark:text-gray-300">Discover additional schemes, study materials, and syllabus details in our Student Resources section.</p>
            </div>
          </div>
          <Link href="/resources" className="shrink-0 whitespace-nowrap inline-flex items-center gap-2 bg-primary hover:bg-red-900 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md">
            Go to Resources <ChevronRight size={20} />
          </Link>
        </section>

      </main>
    </div>
  );
};

export default ScholarshipPage;
