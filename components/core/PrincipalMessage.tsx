import Image from 'next/image'
import React from 'react'
import { Card } from '../ui/card'
import { ArrowRight, BrainCircuitIcon, GraduationCap, LucideGraduationCap, Quote, School } from 'lucide-react'
import { MortarboardDuoIcon } from './Icons'
import Link from 'next/link'
import { useIntlayer } from 'next-intlayer/server'

export const PrincipalMessage02 = () => {
  const content = useIntlayer('principleMessage')
  return (
    <div className="bg-background-light dark:bg-background-dark font-sans text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <header className="py-12 text-center">
        <div className="inline-block relative">
          <h2 className="text-4xl md:text-5xl quote-text font-bold text-primary dark:text-gold mb-2">{content.title}</h2>
          <div className="h-1 w-24 bg-secondary mx-auto rounded-full"></div>
          <div className="absolute text-9xl quote-text font-bold -top-10 -left-8 text-primary/10 dark:text-gold/10 pointer-events-none">
            &#8220;
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-4 border-2 border-gold/30 rounded-2xl transition-all group-hover:inset-0"></div>
            <div className="relative z-10 overflow-hidden rounded-xl shadow-2xl border-4 border-white dark:border-gray-800">
              <img alt="Portrait of the Principal" className="w-full aspect-4/5 object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyrdOBljxSmd6GAkhZyGRV3EcPKwP_1ENTFDucUx3m_I9jU5-tuWyoeuapSEaMRt-3MOY93eOd_O7lWIEIYS3Mz2EHvYq-wIVCHg9SwW0vclJEPpZDMv0yycznrUSWEk9yyeO5kPS6KWFYES2BU6WUCFNhehcuxFF0tMDKgIAeDMRc5YifGKiaqoCnyz8aZwyDOzN2KZkYkfWxYvTtawqpScKpKZCkfE_vfZybUIoZrkniqdPJhmaQnujoKRj6Lnjb9Drmbk6IQQ8" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 to-transparent text-white">
                <p className="quote-text text-2xl font-bold">{content.name}</p>
                <p className="text-gold font-medium uppercase tracking-widest text-sm">{content.designation}</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/5 dark:bg-secondary/5 rounded-full blur-3xl"></div>
          </div>
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl quote-text italic text-gray-700 dark:text-gray-300 leading-relaxed">
                {content.quote}
              </h3>
              <p className="text-primary dark:text-gold font-semibold">{content.quoteAuthor}</p>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              <p>
                {content.message}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-6 border-t border-gray-200 dark:border-gray-800">
              <div className="text-center sm:text-left">
                <div className="font-signature text-4xl text-primary dark:text-gold mb-1">Signature</div>
                <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">{content.signature}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={'/faculty'}>
                  <button className="px-8 py-3.5 bg-primary hover:bg-red-900 text-white font-semibold rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center gap-2 group">
                    {content.button1}
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                      <ArrowRight />
                    </span>
                  </button>
                </Link>
                <Link href={'/contact'}>
                <button className="px-8 py-3 border-2 border-primary/20 dark:border-gold/20 hover:border-primary dark:hover:border-gold text-primary dark:text-gold font-semibold rounded-lg transition-colors">
                  {content.button2}
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
