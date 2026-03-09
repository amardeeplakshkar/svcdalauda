'use client'

import { useState, useEffect, useRef } from "react"
import { useGallery, type GalleryImage, type GalleryCategory } from "@/hooks/use-gallery"
import { GALLERY_CATEGORIES } from "@/shared/schema"
import { MdArrowForward, MdClose, MdChevronLeft, MdChevronRight } from "react-icons/md"
import { Image } from "@imagekit/next"
import { useIntlayer } from "next-intlayer"

// ─── Public Gallery Page ──────────────────────────────────────────────────────

export default function GalleryPage() {
    const content = useIntlayer('galleryPage')
    const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all")
    const [lightbox, setLightbox] = useState<GalleryImage | null>(null)
    const [lightboxIndex, setLightboxIndex] = useState(0)
    const { data: images = [], isLoading } = useGallery(activeCategory === "all" ? undefined : activeCategory)

    // ─── Lightbox keyboard nav ────────────────────────────────────────────────

    useEffect(() => {
        if (!lightbox) return
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") setLightbox(null)
            if (e.key === "ArrowRight") navigateLightbox(1)
            if (e.key === "ArrowLeft") navigateLightbox(-1)
        }
        window.addEventListener("keydown", handler)
        return () => window.removeEventListener("keydown", handler)
    }, [lightbox, lightboxIndex, images])

    useEffect(() => {
        if (lightbox) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
        return () => { document.body.style.overflow = "" }
    }, [lightbox])

    const openLightbox = (img: GalleryImage) => {
        const idx = images.findIndex(i => i.id === img.id)
        setLightboxIndex(idx)
        setLightbox(img)
    }

    const navigateLightbox = (dir: 1 | -1) => {
        const next = (lightboxIndex + dir + images.length) % images.length
        setLightboxIndex(next)
        setLightbox(images[next])
    }

    // ─── Masonry-style layout buckets ────────────────────────────────────────
    // Split into 3 columns for large screens
    const col1 = images.filter((_, i) => i % 3 === 0)
    const col2 = images.filter((_, i) => i % 3 === 1)
    const col3 = images.filter((_, i) => i % 3 === 2)

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen font-sans">

            {/* ── Header ─────────────────────────────────────────────────────────── */}
            <header className="py-12 text-center">
                <div className="inline-block relative">
                    <h1 className="text-4xl md:text-5xl quote-text font-bold text-primary dark:text-gold mb-2">
                        {content.title}
                    </h1>
                    <div className="h-1 w-24 bg-secondary mx-auto rounded-full" />
                    <div className="absolute text-9xl quote-text font-bold -top-10 -left-8 text-primary/10 dark:text-gold/10 pointer-events-none">
                        &#8220;
                    </div>
                </div>
                <p className="mt-4 text-primary/70 dark:text-gold/70 font-display italic text-lg max-w-xl mx-auto px-4">
                    {content.subtitle}
                </p>
            </header>

            {/* ── Category Tabs ──────────────────────────────────────────────────── */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap gap-2 mb-8 md:hidden">
                    {(["all", ...GALLERY_CATEGORIES.filter(c => c !== "all")] as GalleryCategory[]).map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border transition-all capitalize ${activeCategory === cat
                                    ? "bg-primary dark:bg-gold text-white border-primary dark:border-gold"
                                    : "border-primary/20 dark:border-gold/20 text-primary/60 dark:text-gold/60 hover:border-primary dark:hover:border-gold hover:text-primary dark:hover:text-gold"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Desktop: scrollable underline tabs */}
                <div className="hidden md:block border-b border-primary/10 dark:border-gold/10 mb-10 overflow-x-auto scrollbar-none">
                    <div className="flex gap-8 whitespace-nowrap min-w-max">
                        {(["all", ...GALLERY_CATEGORIES.filter(c => c !== "all")] as GalleryCategory[]).map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`pb-4 border-b-2 font-bold text-sm tracking-wider uppercase transition-all capitalize ${activeCategory === cat
                                        ? "border-primary dark:border-gold text-primary dark:text-gold"
                                        : "border-transparent text-primary/50 dark:text-gold/50 hover:text-primary dark:hover:text-gold"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ── Loading Skeleton ──────────────────────────────────────────────── */}
                {isLoading && (
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                        {Array.from({ length: 9 }).map((_, i) => (
                            <div
                                key={i}
                                className="break-inside-avoid rounded-xl bg-muted animate-pulse mb-4"
                                style={{ height: `${180 + (i % 3) * 80}px` }}
                            />
                        ))}
                    </div>
                )}

                {/* ── Empty State ───────────────────────────────────────────────────── */}
                {!isLoading && images.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-24 text-center">
                        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <span className="text-3xl">🖼️</span>
                        </div>
                        <p className="text-xl font-bold text-primary dark:text-gold">No images yet</p>
                        <p className="text-muted-foreground mt-2">Check back soon for updates from campus.</p>
                    </div>
                )}

                {/* ── Masonry Grid ─────────────────────────────────────────────────── */}
                {!isLoading && images.length > 0 && (
                    <>
                        {/* Mobile: single column */}
                        <div className="md:hidden columns-1 gap-4">
                            {images.map(img => (
                                <GalleryCard key={img.id} image={img} onClick={() => openLightbox(img)} />
                            ))}
                        </div>

                        {/* Tablet: 2 columns */}
                        <div className="hidden md:flex lg:hidden gap-4">
                            {[col1.concat(col3), col2].map((col, ci) => (
                                <div key={ci} className="flex-1 flex flex-col gap-4">
                                    {col.map(img => (
                                        <GalleryCard key={img.id} image={img} onClick={() => openLightbox(img)} />
                                    ))}
                                </div>
                            ))}
                        </div>

                        {/* Desktop: 3 columns */}
                        <div className="hidden lg:flex gap-4">
                            {[col1, col2, col3].map((col, ci) => (
                                <div key={ci} className="flex-1 flex flex-col gap-4">
                                    {col.map(img => (
                                        <GalleryCard key={img.id} image={img} onClick={() => openLightbox(img)} />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* ── View Archive Button ─────────────────────────────────────────────
                {!isLoading && images.length > 0 && (
                    <div className="flex justify-center mt-12 mb-16">
                        <button className="flex items-center gap-2 px-8 py-3 border-2 border-primary dark:border-gold text-primary dark:text-gold font-bold rounded-lg hover:bg-primary dark:hover:bg-gold hover:text-white dark:hover:text-background-dark transition-all group">
                            <span>View Full Archive</span>
                            <MdArrowForward className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                )} */}
            </div>

            {/* ── Lightbox ─────────────────────────────────────────────────────────── */}
            {lightbox && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                    onClick={() => setLightbox(null)}
                >
                    {/* Close */}
                    <button
                        onClick={() => setLightbox(null)}
                        className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors z-10"
                    >
                        <MdClose size={28} />
                    </button>

                    {/* Counter */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/50 text-sm font-medium">
                        {lightboxIndex + 1} / {images.length}
                    </div>

                    {/* Prev */}
                    <button
                        onClick={(e) => { e.stopPropagation(); navigateLightbox(-1) }}
                        className="absolute left-4 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all z-10"
                    >
                        <MdChevronLeft size={28} />
                    </button>

                    {/* Image */}
                    <div
                        className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center gap-4"
                        onClick={e => e.stopPropagation()}
                    >
                        <img
                            src={lightbox.url}
                            alt={lightbox.altText}
                            className="max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl"
                        />
                        <div className="text-center">
                            <p className="text-white font-bold text-lg">{lightbox.title}</p>
                            {lightbox.description && (
                                <p className="text-white/60 text-sm mt-1 max-w-lg">{lightbox.description}</p>
                            )}
                            <span className="inline-block mt-2 text-xs font-bold uppercase tracking-widest text-primary/80 border border-primary/40 px-3 py-0.5 rounded-full capitalize">
                                {lightbox.category}
                            </span>
                        </div>
                    </div>

                    {/* Next */}
                    <button
                        onClick={(e) => { e.stopPropagation(); navigateLightbox(1) }}
                        className="absolute right-4 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all z-10"
                    >
                        <MdChevronRight size={28} />
                    </button>
                </div>
            )}
        </div>
    )
}

// ─── Gallery Card ─────────────────────────────────────────────────────────────

function GalleryCard({ image, onClick }: { image: GalleryImage; onClick: () => void }) {
    return (
        <div
            onClick={onClick}
            className="gallery-card relative group overflow-hidden rounded-xl bg-white dark:bg-[#252528] border border-accent-gold/20 shadow-xl shadow-primary/5 cursor-pointer mb-4 break-inside-avoid"
        >
            <div className="overflow-hidden">
                <img
                    src={image.url}
                    alt={image.altText}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                />
            </div>

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-primary/80 dark:bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-gold font-bold text-xs uppercase tracking-[0.2em] mb-1 capitalize">
                    {image.category}
                </span>
                <h3 className="font-display text-lg font-bold leading-tight mb-1">
                    {image.title}
                </h3>
                {image.description && (
                    <p className="text-sm text-white/80 line-clamp-2">{image.description}</p>
                )}
            </div>
        </div>
    )
}