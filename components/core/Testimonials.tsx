"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { MdChevronLeft, MdChevronRight, MdFormatQuote } from 'react-icons/md';

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    text: string;
    image: string;
}

const defaultTestimonials: Testimonial[] = [
    {
        id: 1,
        name: "Amardeep Lakshkar",
        role: "B.Sc. Final Year",
        text: "The academic rigour at Swami Vivekananda Govt College has shaped my perspective. The mentors here don't just teach; they inspire greatness.",
        image: "https://avatars.githubusercontent.com/u/109571797"
    },
    {
        id: 2,
        name: "Rahul Meena",
        role: "B.A. History",
        text: "यहाँ का वातावरण और शिक्षकों का सहयोग अद्वितीय है। मुझे अपने करियर को एक नई दिशा देने का अवसर मिला है।",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZhp9aps4L7xUL2N0RXf9-frb8uk1hY3QxiWnqbxa10p9ZX2FmrxoY7UVRZQVntqD5J5M7ScreOK9bqoO0IodDUy_6QFHoFIVwV5pnQ4eKwmyEhllEayxYmbx4LetlWDy1l4bF81Aj_65zDYEjrsU4goMat5afAeP9pczUMmxGFcSeWXxn5NH_NSIX1loexYaQwQ2eBhxlPWDFQJart6a-PrtosRe1QUkws8XpVAbvWu6VyjgEwb0ZJe8lDmLEaD5pTU1chgAF6UM"
    },
    {
        id: 3,
        name: "Priya Patel",
        role: "Ph.D. Scholar",
        text: "The research facilities and the library collection are world-class. Being a part of this institution is a matter of great pride for me.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCl-KfBc6VJg8FppUUgAjelhKs7yd6t965YkA-uVA1Gm0NLNvF7PUx5X3pa4Q6sJ-x2zby2mFGgk2WHAgYvkO3KRDqQzPNcKK6mSkngMGWW_c6kvTps0__4cscgp1mkJmY-Dd7yosxO_g0DQw9PWdtf_4YA1nCLra_79CdJ8Qc8AC-AzbsuLNaYF1KHzwas2jOWaw6OJMxaZGyVzP8oZxpSMM33NMHL5cWDgdrXLu4hll9f4ShnrPCTHNrd3L3O97U1KIeFr2TXMtU"
    },
    {
        id: 4,
        name: "Vikram Singh",
        role: "B.Com. 2nd Year",
        text: "The practical approach to commerce and business studies has given me the confidence to start my own venture right after graduation.",
        image: "https://ik.imagekit.io/qazwsx90/assets/image.png?tr=w-400,h-400,fo-face,q-auto,f-webp"
    },
    {
        id: 5,
        name: "Neha Gupta",
        role: "B.Sc. Physics",
        text: "Faculty members go out of their way to ensure we grasp complex concepts. The laboratory sessions are incredibly insightful and well-equipped.",
        image: "https://ik.imagekit.io/qazwsx90/assets/image.png?tr=w-400,h-400,fo-face,q-auto,f-webp"
    },
    {
        id: 6,
        name: "Arjun Verma",
        role: "B.A. Political Science",
        text: "SVGC has provided me with a platform to develop my leadership skills. The debate clubs and cultural events are just amazing.",
        image: "https://ik.imagekit.io/qazwsx90/assets/image.png?tr=w-400,h-400,fo-face,q-auto,f-webp"
    }
];

export interface TestimonialsProps {
    title?: string;
    subtitle?: string;
    testimonials?: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({
    title = "Voices of Our Students",
    subtitle = "Discover the journeys of excellence and the transformative experiences that define the SVGC, Dalauda legacy through the words of our scholars.",
    testimonials = defaultTestimonials
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerView(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerView(2);
            } else {
                setItemsPerView(3);
            }
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.max(0, testimonials.length - itemsPerView);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, [maxIndex]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    }, [maxIndex]);

    const goToSlide = (index: number) => {
        setCurrentIndex(Math.min(index, maxIndex));
    };

    return (
        <div>
            <section className="pt-20 pb-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl quote-text font-bold text-primary dark:text-gold mb-2">{title}</h2>
                    <div className="h-1 w-24 bg-secondary mx-auto rounded-full"></div>
                    <div className="saffron-accent-bar mx-auto mb-8"></div>
                    <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </div>
            </section>
            <section className="pb-24 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto relative">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.slice(currentIndex, currentIndex + itemsPerView).map((t) => (
                            <div key={t.id} className="bg-surface-bright p-8 rounded-xl shadow-sm border-b-4 border-secondary hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center">
                                <div className="relative mb-6">
                                    <div className="w-24 h-24 rounded-full border-4 border-secondary overflow-hidden">
                                        <img alt={t.name} className="w-full h-full object-cover" data-alt={t.name} src={t.image} />
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 bg-secondary text-white p-2 rounded-full flex items-center justify-center">
                                        <span className="material-symbols-outlined text-sm"><MdFormatQuote /></span>
                                    </div>
                                </div>
                                <p className="text-on-surface-variant italic mb-6 leading-relaxed">
                                    "{t.text}"
                                </p>
                                <div>
                                    <h4 className="font-black text-lg text-primary">{t.name}</h4>
                                    <p className="text-secondary font-bold text-sm uppercase tracking-wider">{t.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="mb-4 flex items-center justify-center gap-6">
                <button onClick={prevSlide} className="w-12 h-12 rounded-full border-2 border-secondary text-secondary flex items-center justify-center hover:bg-secondary hover:text-white transition-all scale-95 active:scale-90">
                    <span className="material-symbols-outlined"><MdChevronLeft /></span>
                </button>
                <div className="flex gap-2">
                    {testimonials.slice(0, itemsPerView).map((_, index) => (
                        <div key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex ? "bg-primary" : "bg-secondary"}`}></div>
                    ))}
                </div>
                <button onClick={nextSlide} className="w-12 h-12 rounded-full border-2 border-secondary text-secondary flex items-center justify-center hover:bg-secondary hover:text-white transition-all scale-95 active:scale-90">
                    <span className="material-symbols-outlined"><MdChevronRight /></span>
                </button>
            </div>
        </div>
     )
}

export default Testimonials