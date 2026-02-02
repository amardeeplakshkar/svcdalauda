import React from "react";

import {
    MdSchool,
    MdLocationOn,
    MdCall,
    MdMail,
} from "react-icons/md";

const getAcademicYear = (): string => {
    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    return `${currentYear}-${String(nextYear).slice(-2)}`;
};

const Footer = () => {

    const footerData = {
        college: {
            name: "Swami Vivekananda Govt College",
            location: "Dalauda, Mandsaur (M.P.)",
            quote: "Arise, awake, and stop not till the goal is reached.",
            author: "Swami Vivekananda",
            icon: MdSchool,
        },

        sections: [
            {
                title: "Academics",
                links: [
                    { label: "Academic Departments", href: "#" },
                    { label: "Central Library", href: "#" },
                    { label: "Research & Innovation", href: "#" },
                    { label: "Faculty Profiles", href: "#" },
                    { label: "Skill Development", href: "#" },
                ],
            },
            {
                title: "Admissions",
                links: [
                    { label: `Apply Now ${getAcademicYear()}`, href: "#", highlight: true },
                    { label: "Fee Structure", href: "#" },
                    { label: "Scholarship Programs", href: "#" },
                    { label: "Admission Prospectus", href: "#" },
                    { label: "Rules & Regulations", href: "#" },
                ],
            },
            {
                title: "Campus Life",
                links: [
                    { label: "Hostel Facilities", href: "#" },
                    { label: "Sports & Fitness", href: "#" },
                    { label: "NSS & NCC Units", href: "#" },
                    { label: "Cultural Activities", href: "#" },
                    { label: "Alumni Network", href: "#" },
                ],
            },
        ],

        contact: [
            {
                icon: MdLocationOn,
                text: (
                    <>
                        Dalauda, Mandsaur District,
                        <br />
                        Madhya Pradesh - 458667
                    </>
                ),
            },
            {
                icon: MdCall,
                text: "+91 0000 000000",
            },
            {
                icon: MdMail,
                text: "info@svgcdalauda.ac.in",
            },
        ],

        copyright:
            <span>© {new Date().getFullYear()} Swami Vivekananda Govt College Dalauda</span>,
    };
    const getCurrentYear = () => new Date().getFullYear();
    const CollegeIcon = footerData.college.icon;
    return (
        <footer className="bg-primary text-white pt-20 pb-10 px-6 lg:px-40">
            <div className="max-w-[1200px] mx-auto">

                {/* College Header */}
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="mb-6">
                        <div className="h-16 w-16 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                            <CollegeIcon className="text-accent-gold text-4xl" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black mb-2">
                            {footerData.college.name}
                        </h2>
                        <p className="text-accent-gold font-medium tracking-[0.2em] uppercase text-xs">
                            {footerData.college.location}
                        </p>
                    </div>

                    <div className="max-w-3xl border-y border-white/10 py-8 px-4">
                        <blockquote className="font-serif italic text-xl md:text-2xl text-cream-bg/90">
                            "{footerData.college.quote}"
                        </blockquote>
                        <cite className="block mt-4 text-accent-gold font-bold text-sm uppercase tracking-wider">
                            — {footerData.college.author}
                        </cite>
                    </div>
                </div>

                {/* Footer Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {footerData.sections.map((section) => (
                        <div key={section.title} className="flex flex-col gap-6">
                            <h4 className="text-accent-gold font-bold text-sm uppercase tracking-widest border-b border-white/10 pb-2">
                                {section.title}
                            </h4>
                            <ul className="flex flex-col gap-3">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className={`text-sm transition-colors footer-link-hover
                        ${link.highlight ? "font-bold text-accent-gold" : "text-white/80 hover:text-accent-gold"}
                      `}
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-accent-gold font-bold text-sm uppercase tracking-widest border-b border-white/10 pb-2">
                            Get in Touch
                        </h4>
                        <div className="flex flex-col gap-4">
                            {footerData.contact.map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <div key={i} className="flex gap-3">
                                        <Icon className="text-accent-gold text-xl" />
                                        <p className="text-sm text-white/80">{item.text}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 text-center">
                    <p className="text-white/40 text-[11px] uppercase tracking-[0.3em] font-bold">
                        {footerData.copyright}
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
