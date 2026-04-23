import { createMetadata } from '@/lib/seo';
import { BookOpen, GraduationCap, ScrollText, Users } from 'lucide-react';
import React from 'react';

export const metadata = createMetadata({
  title: "Courses Offered",
})

const CoursesPage = () => {
  return (
    <div className="bg-background-light overflow-x-hidden dark:bg-background-dark text-gray-800 dark:text-gray-100 transition-colors duration-200 min-h-screen">
      <header className="bg-primary py-8 text-white text-center shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl quote-text md:text-5xl font-bold mb-2">Regular Courses</h1>
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
            <h2 className="text-2xl font-bold text-primary dark:text-orange-400">PG Programme</h2>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                  <th className="p-4 font-semibold text-gray-700 dark:text-gray-300">Course Name</th>
                  <th className="p-4 font-semibold text-gray-700 dark:text-gray-300">Minimum Qualification</th>
                  <th className="p-4 font-semibold text-gray-700 dark:text-gray-300">Seats</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 dark:border-gray-800 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="p-4 text-center text-gray-500 dark:text-gray-400 italic" colSpan={3}>No PG Courses Available</td>
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
            <h2 className="text-2xl font-bold text-primary dark:text-orange-400">UG Programme</h2>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                  <th className="p-4 font-semibold text-gray-700 dark:text-gray-300">Course Name</th>
                  <th className="p-4 font-semibold text-gray-700 dark:text-gray-300">Minimum Qualification</th>
                  <th className="p-4 font-semibold text-gray-700 dark:text-gray-300 text-center">Seats</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 dark:border-gray-800 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="p-4 font-medium">B.A. (Plain)</td>
                  <td className="p-4 text-gray-600 dark:text-gray-400">12th Pass</td>
                  <td className="p-4 text-center">-</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="p-4 font-medium">B.Sc. (Botany - Chemistry - Zoology)</td>
                  <td className="p-4 text-gray-600 dark:text-gray-400">12th Science (Biology)</td>
                  <td className="p-4 text-center">-</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="p-4 font-medium">B.Sc. (Chemistry - Mathematics - Physics)</td>
                  <td className="p-4 text-gray-600 dark:text-gray-400">12th Science (Maths)</td>
                  <td className="p-4 text-center">-</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="p-4 font-medium">B.Sc. (Computer Science - Mathematics - Physics)</td>
                  <td className="p-4 text-gray-600 dark:text-gray-400">12th Science (Maths)</td>
                  <td className="p-4 text-center">-</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="p-4 font-medium">B.Com (Commerce)</td>
                  <td className="p-4 text-gray-600 dark:text-gray-400">12th Pass (Commerce/Any Stream)</td>
                  <td className="p-4 text-center">-</td>
                </tr>
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
            <h2 className="text-2xl font-bold text-primary dark:text-orange-400">Diploma Programme</h2>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                  <th className="p-4 font-semibold text-gray-700 dark:text-gray-300">Course Name</th>
                  <th className="p-4 font-semibold text-gray-700 dark:text-gray-300">Minimum Qualification</th>
                  <th className="p-4 font-semibold text-gray-700 dark:text-gray-300">Seats</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 dark:border-gray-800 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="p-4 text-center text-gray-500 dark:text-gray-400 italic" colSpan={3}>No Diploma Courses Available</td>
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
            <h2 className="text-2xl font-bold text-primary dark:text-orange-400">Departments & Student Intake</h2>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                  <th className="p-4 font-semibold text-gray-700 dark:text-gray-300 text-center w-16">S.No.</th>
                  <th className="p-4 font-semibold text-gray-700 dark:text-gray-300">Faculty</th>
                  <th className="p-4 font-semibold text-gray-700 dark:text-gray-300">Department</th>
                  <th className="p-4 font-semibold text-gray-700 dark:text-gray-300 text-center">Number of Students</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-300">
                {/* Arts */}
                <tr className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="p-4 text-center">1</td>
                  <td className="p-4 font-medium text-primary dark:text-orange-300">Arts</td>
                  <td className="p-4">Hindi</td>
                  <td className="p-4 text-center">70</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="p-4 text-center">2</td>
                  <td className="p-4 font-medium text-primary dark:text-orange-300">Arts</td>
                  <td className="p-4">English</td>
                  <td className="p-4 text-center">18</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="p-4 text-center">3</td>
                  <td className="p-4 font-medium text-primary dark:text-orange-300">Arts</td>
                  <td className="p-4">Political Science</td>
                  <td className="p-4 text-center">85</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="p-4 text-center">4</td>
                  <td className="p-4 font-medium text-primary dark:text-orange-300">Arts</td>
                  <td className="p-4">Sociology</td>
                  <td className="p-4 text-center">85</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="p-4 text-center">5</td>
                  <td className="p-4 font-medium text-primary dark:text-orange-300">Arts</td>
                  <td className="p-4">Geography</td>
                  <td className="p-4 text-center">34</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="p-4 text-center">6</td>
                  <td className="p-4 font-medium text-primary dark:text-orange-300">Arts</td>
                  <td className="p-4">History</td>
                  <td className="p-4 text-center">128</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="p-4 text-center">7</td>
                  <td className="p-4 font-medium text-primary dark:text-orange-300">Arts</td>
                  <td className="p-4">Economics</td>
                  <td className="p-4 text-center">60</td>
                </tr>
                <tr className="border-b-4 border-double border-gray-300 dark:border-gray-600 bg-gray-50/50 dark:bg-gray-900/50">
                  <td colSpan={3} className="p-4 text-right font-bold text-gray-900 dark:text-white">Total (Arts)</td>
                  <td className="p-4 text-center font-bold text-primary dark:text-gold">480</td>
                </tr>

                {/* Commerce */}
                <tr className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="p-4 text-center">1</td>
                  <td className="p-4 font-medium text-primary dark:text-orange-300">Commerce</td>
                  <td className="p-4">Commerce</td>
                  <td className="p-4 text-center">140</td>
                </tr>
                <tr className="border-b-4 border-double border-gray-300 dark:border-gray-600 bg-gray-50/50 dark:bg-gray-900/50">
                  <td colSpan={3} className="p-4 text-right font-bold text-gray-900 dark:text-white">Total (Commerce)</td>
                  <td className="p-4 text-center font-bold text-primary dark:text-gold">140</td>
                </tr>

                {/* Science */}
                <tr className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="p-4 text-center">1</td>
                  <td className="p-4 font-medium text-primary dark:text-orange-300">Science (Biology)</td>
                  <td className="p-4">Botany</td>
                  <td className="p-4 text-center">90</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="p-4 text-center">2</td>
                  <td className="p-4 font-medium text-primary dark:text-orange-300">Science (Biology)</td>
                  <td className="p-4">Zoology</td>
                  <td className="p-4 text-center">90</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="p-4 text-center">3</td>
                  <td className="p-4 font-medium text-primary dark:text-orange-300">Science (Mathematics+Biology)</td>
                  <td className="p-4">Chemistry</td>
                  <td className="p-4 text-center">90</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="p-4 text-center">4</td>
                  <td className="p-4 font-medium text-primary dark:text-orange-300">Science (Mathematics)</td>
                  <td className="p-4">Physics</td>
                  <td className="p-4 text-center">30</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="p-4 text-center">5</td>
                  <td className="p-4 font-medium text-primary dark:text-orange-300">Science (Mathematics)</td>
                  <td className="p-4">Mathematics</td>
                  <td className="p-4 text-center">30</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="p-4 text-center">6</td>
                  <td className="p-4 font-medium text-primary dark:text-orange-300">Science (Computer Science)</td>
                  <td className="p-4">Computer Science</td>
                  <td className="p-4 text-center">30</td>
                </tr>
                <tr className="bg-gray-50/50 dark:bg-gray-900/50">
                  <td colSpan={3} className="p-4 text-right font-bold text-gray-900 dark:text-white">Total (Science)</td>
                  <td className="p-4 text-center font-bold text-primary dark:text-gold">360</td>
                </tr>

              </tbody>
            </table>
          </div>
        </section>

      </main>
    </div>
  );
};

export default CoursesPage;
