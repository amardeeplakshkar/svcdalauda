import React from 'react'
import Link from 'next/link'
import { MdArrowForward } from 'react-icons/md'
import { useIntlayer } from 'next-intlayer/server'
import { db } from '@/lib/db'
import { galleryImages } from '@/shared/schema'
import { asc } from 'drizzle-orm'

// ─── Server component — fetch directly from DB, no API round-trip ─────────────

async function getPreviewImages() {
  try {
    const images = await db
      .select()
      .from(galleryImages)
      .orderBy(asc(galleryImages.displayOrder))
      .limit(5)

    return { images }
  } catch {
    return { images: [] }
  }
}

// ─── Bento grid layout — matches the original design ─────────────────────────
// Slot 0 → tall portrait (4/5)
// Slot 1 → wide landscape spanning 2 cols (16/9)
// Slot 2,3,4 → square
const ASPECT: Record<number, string> = {
  0: 'aspect-[4/5]',
  1: 'aspect-[16/9] lg:col-span-2',
  2: 'aspect-square',
  3: 'aspect-square',
  4: 'aspect-square',
}

const Gallery = async () => {
  const content = useIntlayer('gallerySection')
  const { images } = await getPreviewImages()

  return (
    <div className="bg-background-light dark:bg-background-dark font-sans text-[#181211] dark:text-[#fbf9f9]">
      <div className="layout-container flex h-full grow flex-col">
        <main className="flex-1">
          <section className="px-4 py-12 lg:py-20">
            <div className="max-w-7xl mx-auto">

              {/* ── Header ──────────────────────────────────────────────── */}
              <h1 className="text-4xl text-center md:text-5xl quote-text font-bold text-primary dark:text-gold mb-2">
                {content.title}
              </h1>
              <div className="h-1 w-24 bg-secondary mx-auto rounded-full" />

              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 mt-4">
                <p className="text-lg text-primary/70 font-display italic">
                  {content.subtitle}
                </p>
                <Link href="/gallery">
                  <button className="flex justify-center items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all group">
                    <span>{content.viewArchive}</span>
                    <MdArrowForward className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>

              {/* ── Bento Grid ──────────────────────────────────────────── */}
              {images.length === 0 ? (
                // Skeleton — invisible to visitors while DB is empty
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[0, 1, 2, 3, 4].map(i => (
                    <div
                      key={i}
                      className={`rounded-xl bg-muted/30 ${ASPECT[i]}`}
                    />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {images.map((img, i) => (
                    <Link
                      key={img.id}
                      href="/gallery"
                      className={`gallery-card relative group overflow-hidden rounded-xl bg-white dark:bg-[#252528] border border-accent-gold/20 shadow-xl shadow-primary/5 ${ASPECT[i] ?? 'aspect-square'}`}
                    >
                      <div className="w-full h-full overflow-hidden">
                        <img
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          src={img.url}
                          alt={img.altText}
                          loading={i === 0 ? 'eager' : 'lazy'}
                        />
                      </div>
                      {/* Hover overlay — identical to original */}
                      <div className="gallery-overlay absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 text-white">
                        <span className="text-accent-gold font-bold text-xs uppercase tracking-[0.2em] mb-2">
                          {img.category}
                        </span>
                        <h3 className="font-display text-2xl font-bold mb-2">
                          {img.title}
                        </h3>
                        {img.description && (
                          <p className="text-sm text-white/80 line-clamp-2">
                            {img.description}
                          </p>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              )}

            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Gallery