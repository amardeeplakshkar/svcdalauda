import { createMetadata } from '@/lib/seo';
import { BookMarked, Monitor, Newspaper, Library as LibraryIcon, Mail, Phone, User } from 'lucide-react';
import React from 'react';
import Image from 'next/image';

export const metadata = createMetadata({
  title: "College Library",
})

const LibraryPage = () => {
  return (
    <div className="bg-background-light overflow-x-hidden dark:bg-background-dark text-gray-800 dark:text-gray-100 transition-colors duration-200 min-h-screen">
      <header className="bg-primary py-8 text-white text-center shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl quote-text md:text-5xl font-bold mb-2">College Library</h1>
          <div className="h-1 w-24 bg-secondary mx-auto rounded-full"></div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 md:py-20 max-w-6xl space-y-12">
        
        {/* Top Section: Overview & Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary dark:text-gold">A Hub of Knowledge</h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Our library is dedicated to providing students with the resources they need to excel academically. We offer a growing collection of literature and references tailored to our student body.
            </p>
            <div className="bg-primary/5 dark:bg-primary/10 border-l-4 border-secondary p-6 rounded-r-xl">
              <h3 className="font-bold text-lg mb-2 text-primary dark:text-orange-400">Library Policy</h3>
              <p className="text-gray-700 dark:text-gray-300">
                SC/ST books are provided by the MP Govt. specifically for SC/ST students, while donated books are available for General/OBC students.
              </p>
            </div>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
            <img 
              src="https://ik.imagekit.io/qazwsx90/assets/image.png?tr=w-800,h-500,q-auto,f-webp" 
              alt="Library Photo" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
          </div>
        </div>

        {/* Statistics & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Stats Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-transform">
              <div className="bg-secondary/20 p-4 rounded-full text-secondary mb-4">
                <BookMarked size={32} />
              </div>
              <h3 className="text-4xl font-black text-primary dark:text-gold mb-2">370</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">Total Available Books</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-transform">
              <div className="bg-secondary/20 p-4 rounded-full text-secondary mb-4">
                <LibraryIcon size={32} />
              </div>
              <h3 className="text-4xl font-black text-primary dark:text-gold mb-2">0</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">Available Journals</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-transform">
              <div className="bg-secondary/20 p-4 rounded-full text-secondary mb-4">
                <Newspaper size={32} />
              </div>
              <h3 className="text-4xl font-black text-primary dark:text-gold mb-2">0</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">Newspapers / Magazines</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-transform">
              <div className="bg-secondary/20 p-4 rounded-full text-secondary mb-4">
                <Monitor size={32} />
              </div>
              <h3 className="text-4xl font-black text-primary dark:text-gold mb-2">1</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">Total Computers</p>
            </div>
          </div>

          {/* Librarian Profile */}
          <div className="bg-primary text-white p-8 rounded-2xl shadow-xl relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <User size={150} />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 border-b border-red-800 pb-4">Librarian Details</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-orange-200 uppercase tracking-wider mb-1">Name</p>
                  <p className="text-xl font-semibold">Dr. Deepti Shrivastav</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-secondary p-2 rounded-full shadow-inner flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div className="truncate">
                    <p className="text-sm text-orange-200 uppercase tracking-wider mb-1">Email</p>
                    <a href="mailto:deeptilib123@gmail.com" className="hover:text-secondary transition-colors break-all">
                      deeptilib123@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-secondary p-2 rounded-full shadow-inner flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-orange-200 uppercase tracking-wider mb-1">Contact No.</p>
                    <a href="tel:9755054064" className="hover:text-secondary transition-colors">
                      9755054064
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default LibraryPage;
