import { useIntlayer } from 'next-intlayer/server'
import React from 'react'
import { MdArrowForward } from 'react-icons/md'

const Gallary = () => {
    const content = useIntlayer('gallerySection')
    return (
        <div className="bg-background-light dark:bg-background-dark font-sans text-[#181211] dark:text-[#fbf9f9] min-h-screen">
            <div className="layout-container flex h-full grow flex-col">
                <main className="flex-1">
                    <section className="px-4 py-12 lg:py-20">
                        <div className="max-w-7xl mx-auto">
                            <h1 className="text-4xl text-center md:text-5xl quote-text font-bold text-primary dark:text-gold mb-2">{content.title}</h1>
                            <div className="h-1 w-24 bg-secondary mx-auto rounded-full"></div>
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                                <p className="text-lg text-primary/70 font-display italic">{content.subtitle}</p>
                                <button className="flex justify-center items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all group">
                                    <span>{content.viewArchive}</span>
                                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform"><MdArrowForward/></span>
                                </button>
                            </div>
                            <div className="border-b border-primary/10 mb-8 overflow-x-auto">
                                <div className="flex gap-10 whitespace-nowrap min-w-max">
                                    <a className="pb-4 border-b-2 border-primary text-primary font-bold text-sm tracking-wider uppercase" href="#">{content.tabs.all}</a>
                                    <a className="pb-4 border-b-2 border-transparent text-primary/50 hover:text-primary font-bold text-sm tracking-wider uppercase transition-all" href="#">{content.tabs.cultural}</a>
                                    <a className="pb-4 border-b-2 border-transparent text-primary/50 hover:text-primary font-bold text-sm tracking-wider uppercase transition-all" href="#">{content.tabs.sports}</a>
                                    <a className="pb-4 border-b-2 border-transparent text-primary/50 hover:text-primary font-bold text-sm tracking-wider uppercase transition-all" href="#">{content.tabs.campus}</a>
                                    <a className="pb-4 border-b-2 border-transparent text-primary/50 hover:text-primary font-bold text-sm tracking-wider uppercase transition-all" href="#">{content.tabs.workshops}</a>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="gallery-card relative group overflow-hidden rounded-xl bg-white dark:bg-[#252528] border border-accent-gold/20 shadow-xl shadow-primary/5">
                                    <div className="aspect-[4/5] overflow-hidden">
                                        <img className="w-full h-full object-cover transition-transform duration-700" data-alt="Students performing traditional Indian classical dance on stage" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNTgreYZDlldZVKfylknmjOzUuqsTXhJmPTsCE6e7sDO-eCjGsHzRUzDxAPTBvV0lPRQBR1JXCYxWyDMAWDxhT71B6V-sdk6LxasKKgE3_C4HsrxJPVXl5Qbo3YVX3PqDKeZ-m6riwxIHw3oAluJooePINXMoqEOXYwwc2mH1ycvlltXVs_oYVR3FmK1-7Z6-ku0uStbK10qCd7RJlD1p9fi8aK-S4pHcFGcz_aYZMpmqJSI5ciXqf8y_e6I4E_BULqV_1BDV73so" />
                                    </div>
                                    <div className="gallery-overlay absolute inset-0 bg-primary/80 opacity-0 transition-opacity duration-300 flex flex-col justify-end p-8 text-white">
                                        <span className="text-accent-gold font-bold text-xs uppercase tracking-[0.2em] mb-2">Cultural</span>
                                        <h3 className="font-display text-2xl font-bold mb-2">Annual Folk Dance Festival</h3>
                                        <p className="text-sm text-white/80 line-clamp-2">Celebrating our rich heritage through rhythmic movements and traditional attire.</p>
                                    </div>
                                </div>
                                <div className="gallery-card relative group overflow-hidden rounded-xl bg-white dark:bg-[#252528] border border-accent-gold/20 shadow-xl shadow-primary/5 lg:col-span-2 lg:row-span-1">
                                    <div className="aspect-[16/9] overflow-hidden">
                                        <img className="w-full h-full object-cover transition-transform duration-700" data-alt="Main building architecture of Swami Vivekananda College" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDSOlnxjUSCClJSGWOqMTrP_nBYBJseCKPmgnoMXvajdtA-sAkLqabzbGo05jn1d6wtdj34ob1VZy0bAHFfsBrGeS5GCNLLMSXxEDY9R-6NPYFWm3cCVc_TCuhgf1y8MJoSkRwjHn9qiOyJfJQeq5nZJFbqu6f2qvXuFXJ5Gm6ErcIMTdjSBH5788qeCq6eje2HJbRuNoW7w5-xRHMKUCSUj1PrHBQsdFXOvX-CX7HrDSBIsv2zIv_dQy6NlSc6pCh3877qcasRl8" />
                                    </div>
                                    <div className="gallery-overlay absolute inset-0 bg-primary/80 opacity-0 transition-opacity duration-300 flex flex-col justify-end p-8 text-white">
                                        <span className="text-accent-gold font-bold text-xs uppercase tracking-[0.2em] mb-2">Campus</span>
                                        <h3 className="font-display text-3xl font-bold mb-2">Heritage Hall Architecture</h3>
                                        <p className="text-sm text-white/80">The historic main building standing as a testament to our academic legacy.</p>
                                    </div>
                                </div>
                                <div className="gallery-card relative group overflow-hidden rounded-xl bg-white dark:bg-[#252528] border border-accent-gold/20 shadow-xl shadow-primary/5">
                                    <div className="aspect-square overflow-hidden">
                                        <img className="w-full h-full object-cover transition-transform duration-700" data-alt="Students cheering at a college cricket tournament" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx_0MiS2pp9oDt_iBSvhw_ZzMz7M6M245hN4KwxpQu9G9Vm5dMm9BV8U8Cf4eOIhUxjRtu4Fqnr7L9XeVgf-VX8BqIofLf9wUg1b5wPoJ0OSACY22-LX7Vm8Y5CBoo5LEIGhoBsCo2xcyZXhul3_nuzqAZjnIHvvJBQOUwYFDl_0tJwxjDV6E0lnUXS1W8oJ4Ru-KzPpld_kqOGxhgohULWKZj9sEbYPu-_otwhLWbeiIu0J_BYBzFZEQEqHXAGgcM6qTlqjSxa4U" />
                                    </div>
                                    <div className="gallery-overlay absolute inset-0 bg-primary/80 opacity-0 transition-opacity duration-300 flex flex-col justify-end p-8 text-white">
                                        <span className="text-accent-gold font-bold text-xs uppercase tracking-[0.2em] mb-2">Sports</span>
                                        <h3 className="font-display text-2xl font-bold mb-2">Inter-College Cricket Finals</h3>
                                        <p className="text-sm text-white/80">Witnessing the victory of our collegiate team under the summer sun.</p>
                                    </div>
                                </div>
                                <div className="gallery-card relative group overflow-hidden rounded-xl bg-white dark:bg-[#252528] border border-accent-gold/20 shadow-xl shadow-primary/5">
                                    <div className="aspect-square overflow-hidden">
                                        <img className="w-full h-full object-cover transition-transform duration-700" data-alt="A professor conducting a seminar in a lecture hall" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCicTiCcXqD8Kzis_C6rPz1MMLqDLce-z9YylTzb7sCP8Pg4SPl3YIWVJEo3pXr0liDmySWJDeg1KjVaDsGlPIS17QV8IMXPRVE1ntwYVEpLFVvxUDWyJuNKKllysfzTrQRs5pqsuN9uDu94aWRK9zWYz0HBjWD3Qs0a-AFdzEkrMLeU8VL1wGpnzAvAlsHURUv2HFVL7ocTFdoZtU2s6pM_3_YYAoRhnHGqlfDhJkPZwejQoTkNDLJ7pMi521nf5NdRW_JltFintY" />
                                    </div>
                                    <div className="gallery-overlay absolute inset-0 bg-primary/80 opacity-0 transition-opacity duration-300 flex flex-col justify-end p-8 text-white">
                                        <span className="text-accent-gold font-bold text-xs uppercase tracking-[0.2em] mb-2">Academic</span>
                                        <h3 className="font-display text-2xl font-bold mb-2">Global Innovation Seminar</h3>
                                        <p className="text-sm text-white/80">Engaging dialogue between industry leaders and our bright scholars.</p>
                                    </div>
                                </div>
                                <div className="gallery-card relative group overflow-hidden rounded-xl bg-white dark:bg-[#252528] border border-accent-gold/20 shadow-xl shadow-primary/5">
                                    <div className="aspect-square overflow-hidden">
                                        <img className="w-full h-full object-cover transition-transform duration-700" data-alt="Quiet library study area with bookshelves" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD08RAxdk4qFOjv2I4gzyoWohaJIYJDJoKaCAx4IYsBj0OVeZqp8eK-s535zoWz4PM_kdOZfFJlygEJul5r1zEgFzv7-lLlHUL0oFYGVFaZBfW-ONj4NWnFf_C6Gz8SjXX-b-qYHLQKKhQ87NRytYMUzwju4PhQYSoJSE97TsEHz7NrhTTbrsDi0EV-IEpxO4t7GHr0t4MAHWypxj9JU3OfFiK344hmpN93TIrHAQidcAcRQzdhMJbm_HDwPPma5Mudib76lelp7HI" />
                                    </div>
                                    <div className="gallery-overlay absolute inset-0 bg-primary/80 opacity-0 transition-opacity duration-300 flex flex-col justify-end p-8 text-white">
                                        <span className="text-accent-gold font-bold text-xs uppercase tracking-[0.2em] mb-2">Campus Life</span>
                                        <h3 className="font-display text-2xl font-bold mb-2">The Central Library Sanctuary</h3>
                                        <p className="text-sm text-white/80">Where knowledge meets tranquility in the heart of our campus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default Gallary