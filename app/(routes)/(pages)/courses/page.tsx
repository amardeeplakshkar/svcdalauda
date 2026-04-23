import { createMetadata } from '@/lib/seo';
import { BookOpen, GraduationCap, ScrollText, Users } from 'lucide-react';
import React from 'react';
import { getLocale, IntlayerServerProvider, useIntlayer } from 'next-intlayer/server';
import { NextPage } from 'next';

export const metadata = createMetadata({
  title: "Courses Offered",
})

const CoursesPage = () => {
  const content = useIntlayer("coursesPage");
  
  return (
    <div className="bg-background-light overflow-x-hidden dark:bg-background-dark text-gray-800 dark:text-gray-100 transition-colors duration-200 min-h-screen">
      <header className="bg-primary py-8 text-white text-center shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl quote-text md:text-5xl font-bold mb-2">{content.title}</h1>
          <div className="h-1 w-24 bg-secondary mx-auto rounded-full"></div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 md:py-20 max-w-5xl space-y-12">
        
        {/* PG Programme */}
        <section className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-secondary/20 p-3 rounded-lg text-secondary">
              <BookOpen size={28} />
            </div>
            <h2 className="text-2xl font-bold text-primary dark:text-orange-400">{content.pg.title}</h2>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                  <th className="p-4 font-semibold text-gray-700 dark:text-gray-300">{content.headers.courseName}</th>
                  <th className="p-4 font-semibold text-gray-700 dark:text-gray-300">{content.headers.minQual}</th>
                  <th className="p-4 font-semibold text-gray-700 dark:text-gray-300">{content.headers.seats}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 dark:border-gray-800 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="p-4 text-center text-gray-500 dark:text-gray-400 italic" colSpan={3}>{content.pg.empty}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* UG Programme */}
        <section className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-secondary/20 p-3 rounded-lg text-secondary">
              <GraduationCap size={28} />
            </div>
            <h2 className="text-2xl font-bold text-primary dark:text-orange-400">{content.ug.title}</h2>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                  <th className="p-4 font-semibold text-gray-700 dark:text-gray-300">{content.headers.courseName}</th>
                  <th className="p-4 font-semibold text-gray-700 dark:text-gray-300">{content.headers.minQual}</th>
                  <th className="p-4 font-semibold text-gray-700 dark:text-gray-300 text-center">{content.headers.seats}</th>
                </tr>
              </thead>
              <tbody>
                {content.ug.courses.map((course, i) => (
                  <tr key={i} className="border-b border-gray-100 dark:border-gray-800 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <td className="p-4 font-medium">{course.name}</td>
                    <td className="p-4 text-gray-600 dark:text-gray-400">{course.qual}</td>
                    <td className="p-4 text-center">{course.seats}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Diploma Programme */}
        <section className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-secondary/20 p-3 rounded-lg text-secondary">
              <ScrollText size={28} />
            </div>
            <h2 className="text-2xl font-bold text-primary dark:text-orange-400">{content.diploma.title}</h2>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                  <th className="p-4 font-semibold text-gray-700 dark:text-gray-300">{content.headers.courseName}</th>
                  <th className="p-4 font-semibold text-gray-700 dark:text-gray-300">{content.headers.minQual}</th>
                  <th className="p-4 font-semibold text-gray-700 dark:text-gray-300">{content.headers.seats}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 dark:border-gray-800 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="p-4 text-center text-gray-500 dark:text-gray-400 italic" colSpan={3}>{content.diploma.empty}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Departments */}
        <section className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-secondary/20 p-3 rounded-lg text-secondary">
              <Users size={28} />
            </div>
            <h2 className="text-2xl font-bold text-primary dark:text-orange-400">{content.departments.title}</h2>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                  <th className="p-4 font-semibold text-gray-700 dark:text-gray-300 text-center w-16">{content.headers.sno}</th>
                  <th className="p-4 font-semibold text-gray-700 dark:text-gray-300">{content.headers.faculty}</th>
                  <th className="p-4 font-semibold text-gray-700 dark:text-gray-300">{content.headers.department}</th>
                  <th className="p-4 font-semibold text-gray-700 dark:text-gray-300 text-center">{content.headers.students}</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-300">
                {/* Arts */}
                {content.departments.arts.items.map((item, index) => (
                  <tr key={`arts-${index}`} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <td className="p-4 text-center">{index + 1}</td>
                    <td className="p-4 font-medium text-primary dark:text-orange-300">{content.departments.arts.name}</td>
                    <td className="p-4">{item.name}</td>
                    <td className="p-4 text-center">{item.count}</td>
                  </tr>
                ))}
                <tr className="border-b-4 border-double border-gray-300 dark:border-gray-600 bg-gray-50/50 dark:bg-gray-900/50">
                  <td colSpan={3} className="p-4 text-right font-bold text-gray-900 dark:text-white">{content.headers.total} ({content.departments.arts.name})</td>
                  <td className="p-4 text-center font-bold text-primary dark:text-gold">{content.departments.arts.total}</td>
                </tr>

                {/* Commerce */}
                {content.departments.commerce.items.map((item, index) => (
                  <tr key={`com-${index}`} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <td className="p-4 text-center">{index + 1}</td>
                    <td className="p-4 font-medium text-primary dark:text-orange-300">{content.departments.commerce.name}</td>
                    <td className="p-4">{item.name}</td>
                    <td className="p-4 text-center">{item.count}</td>
                  </tr>
                ))}
                <tr className="border-b-4 border-double border-gray-300 dark:border-gray-600 bg-gray-50/50 dark:bg-gray-900/50">
                  <td colSpan={3} className="p-4 text-right font-bold text-gray-900 dark:text-white">{content.headers.total} ({content.departments.commerce.name})</td>
                  <td className="p-4 text-center font-bold text-primary dark:text-gold">{content.departments.commerce.total}</td>
                </tr>

                {/* Science */}
                {content.departments.science.items.map((item, index) => (
                  <tr key={`sci-${index}`} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <td className="p-4 text-center">{index + 1}</td>
                    <td className="p-4 font-medium text-primary dark:text-orange-300">{item.faculty}</td>
                    <td className="p-4">{item.name}</td>
                    <td className="p-4 text-center">{item.count}</td>
                  </tr>
                ))}
                <tr className="bg-gray-50/50 dark:bg-gray-900/50">
                  <td colSpan={3} className="p-4 text-right font-bold text-gray-900 dark:text-white">{content.headers.total} ({content.departments.science.name})</td>
                  <td className="p-4 text-center font-bold text-primary dark:text-gold">{content.departments.science.total}</td>
                </tr>

              </tbody>
            </table>
          </div>
        </section>

      </main>
    </div>
  );
};

const Page: NextPage = async () => {
  const locale = await getLocale();

  return (
    <IntlayerServerProvider locale={locale}>
      <CoursesPage />
    </IntlayerServerProvider>
  );
};

export default Page;
