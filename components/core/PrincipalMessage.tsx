import Image from 'next/image'
import React from 'react'
import { Card } from '../ui/card'
import { ArrowRight, BrainCircuitIcon, GraduationCap, LucideGraduationCap, Quote, School } from 'lucide-react'
import { MortarboardDuoIcon } from './Icons'
import Link from 'next/link'

const PrincipalMessage = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto">
        <div className="bg-card rounded-2xl border border-border/50 shadow-soft overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side - Departments & Principal Image */}
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-4 mb-4">
                {/* <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center"> */}
                <MortarboardDuoIcon color="gold" size={35} />
                {/* </div> */}
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                  Principal's Message
                </h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Explore our diverse academic departments and courses designed to elevate your knowledge and skills.
              </p>
              <div className="aspect-5/3 rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=450&fit=crop"
                  alt="Principal Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Welcome Message */}
            <div className="p-8 md:p-10 bg-muted/20 flex flex-col justify-center">
              <span className="w-12 h-12 text-primary mb-6 relative">
                <span className="absolute -left-4 -top-4 text-9xl font-serif leading-none text-yellow-500">
                  &#8220;
                </span>
              </span>
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-4">
                Welcome to Swami Vivekananda Govt College.
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our college is committed to fostering academic excellence, character development, and holistic growth. We strive to provide a nurturing environment that empowers students to excel and contribute to society. Together, we can achieve great heights.
              </p>
              <div>
                <p className="text-muted-foreground text-sm mb-1">Warm regards,</p>
                <p className="font-serif font-semibold text-foreground">name</p>
                <p className="text-muted-foreground text-sm">Principal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export const PrincipalMessage02 = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-sans text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <header className="py-12 text-center">
        <div className="inline-block relative">
          <h2 className="text-4xl md:text-5xl quote-text font-bold text-primary dark:text-gold mb-2">Principal's Message</h2>
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
              <img alt="Portrait of the Principal" className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyrdOBljxSmd6GAkhZyGRV3EcPKwP_1ENTFDucUx3m_I9jU5-tuWyoeuapSEaMRt-3MOY93eOd_O7lWIEIYS3Mz2EHvYq-wIVCHg9SwW0vclJEPpZDMv0yycznrUSWEk9yyeO5kPS6KWFYES2BU6WUCFNhehcuxFF0tMDKgIAeDMRc5YifGKiaqoCnyz8aZwyDOzN2KZkYkfWxYvTtawqpScKpKZCkfE_vfZybUIoZrkniqdPJhmaQnujoKRj6Lnjb9Drmbk6IQQ8" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                <p className="quote-text text-2xl font-bold">NAME</p>
                <p className="text-gold font-medium uppercase tracking-widest text-sm">Principal, SVGC Dalauda</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/5 dark:bg-secondary/5 rounded-full blur-3xl"></div>
          </div>
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl quote-text italic text-gray-700 dark:text-gray-300 leading-relaxed">
                "Education is the manifestation of the perfection already in man."
              </h3>
              <p className="text-primary dark:text-gold font-semibold">— Swami Vivekananda</p>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              <p>
                It is my distinct honor to welcome you to Swami Vivekananda Govt College, Dalauda. Our institution stands as a beacon of academic excellence and character building, deeply rooted in the philosophy of the great sage Swami Vivekananda.
              </p>
              <p>
                We believe that education is not merely the collection of facts but the training of the mind to think. At our college, we strive to create an environment where students can flourish intellectually, morally, and physically. Our dedicated faculty ensures that while students excel in their academic pursuits, they also grow into responsible citizens of this great nation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-6 border-t border-gray-200 dark:border-gray-800">
              <div className="text-center sm:text-left">
                <div className="font-signature text-4xl text-primary dark:text-gold mb-1">Signature</div>
                <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">Principal Signature</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={'/faculty'}>
                  <button className="px-8 py-3.5 bg-primary hover:bg-red-900 text-white font-semibold rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center gap-2 group">
                    View Faculty
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                      <ArrowRight />
                    </span>
                  </button>
                </Link>
                <Link href={'/about'}>
                <button className="px-8 py-3 border-2 border-primary/20 dark:border-gold/20 hover:border-primary dark:hover:border-gold text-primary dark:text-gold font-semibold rounded-lg transition-colors">
                  Contact Office
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

export default PrincipalMessage