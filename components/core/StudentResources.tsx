'use client'

import { useIntlayer } from 'next-intlayer';
import React, { JSX, useState } from 'react'
import { IconType } from 'react-icons/lib';
import { MdAccountBalance, MdContactSupport, MdDescription, MdDevices, MdDownload, MdGrade, MdInfo, MdLink, MdMenuBook, MdOpenInNew, MdPalette, MdPayment, MdPayments, MdPsychology, MdReceiptLong, MdSchool, MdScience } from 'react-icons/md';

const portals = [
    {
        "title": "Vikram Results",
        "subtitle": "University Scorecards",
        "href": "#",
        "icon": <MdSchool />,
        "accent": "primary"
    },
    {
        "title": "Scholarship 2.0",
        "subtitle": "MP State Portal",
        "href": "#",
        "icon": <MdAccountBalance />,
        "accent": "primary"
    },
    {
        "title": "E-Pravesh Port",
        "subtitle": "Admission Portal",
        "href": "#",
        "icon": <MdReceiptLong />,
        "accent": "primary"
    }
]

const syllabusData = {
    first_year: {
        science: {
            title: "विज्ञान संकाय",
            link:
                "https://highereducation.mp.gov.in/?page=V5rbSX5WAwKyQVYYjwHGkQ%3D%3D"
        },
        arts: {
            title: "कला संकाय",
            link:
                "https://highereducation.mp.gov.in/?page=6uVp%2FpC%2F%2B5vE5KdN7z7eFA%3D%3D"
        },
        commerce: {
            title: "वाणिज्य संकाय",
            link:
                "https://highereducation.mp.gov.in/?page=0gmDOLmBdiUFwutV1tbdvw%3D%3D"
        },
        aadhar: [
            { title: "हिन्दी भाषा", link: "https://highereducation.mp.gov.in/Uploaded Document New/admin_hecms/Hindi Language.pdf" },
            { title: "अंग्रेजी भाषा", link: "https://highereducation.mp.gov.in/Uploaded Document New/admin_hecms/English Language.pdf" },
            { title: "VAC", link: "https://highereducation.mp.gov.in/Uploaded Document New/admin_hecms/VAC - Copy 1.pdf" }
        ]
    },

    second_year: {
        science: {
            title: "विज्ञान संकाय",
            link:
                "https://highereducation.mp.gov.in/?page=TkYbuI6tYEgZ4lyin1Dp9g%3D%3D"
        },
        arts: {
            title: "कला संकाय",
            link:
                "https://highereducation.mp.gov.in/?page=tX4nYCIE3HcuikT4bChTOw%3D%3D"
        },
        commerce: {
            title: "वाणिज्य संकाय",
            link:
                "https://highereducation.mp.gov.in/?page=WEyOMJqICO7MqGL1DxfP%2BQ%3D%3D"
        },
        aadhar: [
            { title: "हिन्दी भाषा", link: "https://highereducation.mp.gov.in/Uploaded Document/Foundation Course Hindi_0001.pdf" },
            { title: "अंग्रेजी भाषा", link: "https://highereducation.mp.gov.in/Uploaded Document/Foundation Course English_0001.pdf" },
            { title: "स्टार्टअप एवं उद्यमिता", link: "https://highereducation.mp.gov.in/Uploaded Document/Entrepreneurship DEVELOPMENT_0001.pdf" },
            { title: "महिला सशक्तिकरण", link: "https://highereducation.mp.gov.in/Uploaded Document New/admin_hecms/WomenEmpowerment_rotated.pdf" }
        ]
    },

    third_year: {
        science: {
            title: "विज्ञान संकाय",
            link:
                "https://highereducation.mp.gov.in/?page=uhSOgOVysoYcCsXmG4o4pw%3D%3D"
        },
        arts: {
            title: "कला संकाय",
            link:
                "https://highereducation.mp.gov.in/?page=YXCc9lw%2BooGDWrHDEJik8w%3D%3D"
        },
        commerce: {
            title: "वाणिज्य संकाय",
            link:
                "https://highereducation.mp.gov.in/?page=1PHEAF3kw4AChsH3quvqsQ%3D%3D"
        },
        aadhar: [
            { title: "हिन्दी भाषा", link: "https://highereducation.mp.gov.in/Uploaded Document New/admin_hecms/FC HINDI_edit.pdf" },
            { title: "अंग्रेजी भाषा", link: "https://highereducation.mp.gov.in/Uploaded Document/FC ENGLISH_0001.pdf" },
            { title: "व्यक्तित्व विकास एवं चरित्र निर्माण", link: "https://highereducation.mp.gov.in/Uploaded Document New/admin_hecms/09 June 2023 BA III Personality Development-1.pdf" },
            { title: "डिजिटल जागरूकता- साइबर सुरक्षा", link: "https://highereducation.mp.gov.in/Uploaded Document/FC DIG AW.pdf" }
        ]
    }
};

const ICONS: Record<IconKey, IconType> = {
    MdSchool,
    MdAccountBalance,
    MdReceiptLong,
};


type IconKey = "MdSchool" | "MdAccountBalance" | "MdReceiptLong";

const YEARS = [
    { key: "first_year", label: "1st Year", hi: "प्रथम वर्ष" },
    { key: "second_year", label: "2nd Year", hi: "द्वितीय वर्ष" },
    { key: "third_year", label: "3rd Year", hi: "तृतीय वर्ष" }
];

type YearKey = "first_year" | "second_year" | "third_year";
export default function StudentResources() {
    const content = useIntlayer('studentResourcesSection')
    const [year, setYear] = useState<YearKey>("first_year");

    const data = syllabusData[year];
    return (
        <main className="w-full">
            <div className="flex flex-wrap justify-between items-end gap-6 mb-12">
                <div className="flex min-w-72 flex-col gap-3">
                    <h1 className="text-primary dark:text-white quote-text  text-4xl lg:text-5xl font-black leading-tight tracking-tight">{content.header.title}</h1>
                    <div className="h-1 w-24 bg-secondary rounded-full"></div>
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">{content.header.description}</p>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 flex flex-col gap-6">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 soft-card-shadow border-t-4 border-primary">

                        {/* HEADER */}
                        <div className="flex items-center gap-3 mb-6">
                            <span className="material-symbols-outlined text-primary">
                                <MdMenuBook />
                            </span>
                            <div>
                                <h2 className="text-xl font-bold text-primary dark:text-white">
                                    NEP 2020 Syllabus
                                </h2>
                                <p className="text-[10px] text-gray-500 font-medium uppercase tracking-widest">
                                    राष्ट्रीय शिक्षा नीति 2020 पाठ्यक्रम
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-2 mb-8 p-1 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
                            {YEARS.map((y) => (
                                <button
                                    key={y.key}
                                    onClick={() => setYear(y.key as YearKey)}
                                    className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold border flex flex-col items-center transition ${year === y.key
                                        ? "bg-primary text-white border-0"
                                        : "year-tab-inactive"
                                        }`}
                                >
                                    <span>{y.label}</span>
                                    <span className="text-[9px] opacity-80">{y.hi}</span>
                                </button>
                            ))}
                        </div>

                        <Faculty
                            icon={<MdScience />}
                            en="Faculty of Science"
                            hi="विज्ञान संकाय"
                            link={data.science.link}
                        />

                        <Faculty
                            icon={<MdPalette />}
                            en="Faculty of Arts"
                            hi="कला संकाय"
                            link={data.arts.link}
                        />

                        <Faculty
                            icon={<MdPayment />}
                            en="Faculty of Commerce"
                            hi="वाणिज्य संकाय"
                            link={data.commerce.link}
                        />

                        {/* FOUNDATION COURSE */}
                        <div className="mt-4 p-5 bg-primary/5 rounded-xl border border-primary/10">
                            <h3 className="text-xs font-black text-secondary uppercase tracking-widest flex justify-between mb-4">
                                <span className="flex items-center gap-2">
                                    <MdGrade className="text-base" />
                                    Foundation Course
                                </span>
                                <span className="text-[10px] font-bold">आधार पाठ्यक्रम</span>
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {data.aadhar.map((item, i) => (
                                    <FoundationItem link={item.link} key={i} icon={<MdDescription />} title={item.title} hi="" />
                                ))}
                            </div>
                        </div>

                        {/* NOTE */}
                        <div className="mt-8 p-4 bg-background-light rounded-lg border border-dashed border-primary/20">
                            <div className="flex items-center gap-2 mb-2">
                                <MdInfo className="text-secondary text-sm" />
                                <span className="text-xs font-bold uppercase tracking-wider">
                                    External Link Note
                                </span>
                            </div>
                            <p className="text-[11px] text-gray-500">
                                {content.nep.note}
                            </p>
                        </div>

                    </div>
                </div>

                <div className="lg:col-span-4 flex flex-col gap-6">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 soft-card-shadow border-t-4 border-secondary h-full flex flex-col">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="material-symbols-outlined text-secondary"><MdPayments /></span>
                            <h2 className="text-xl font-bold text-primary dark:text-white">{content.feeStructure.title}</h2>
                        </div>
                        <div className="overflow-hidden border border-gray-100 dark:border-gray-700 rounded-lg flex-grow mb-6">
                            <table className="w-full text-left border-collapse text-xs">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th className="p-3 font-semibold">Year/Level</th>
                                        <th className="p-3 font-semibold">Category</th>
                                        <th className="p-3 font-semibold text-right">Fee (INR)</th>
                                    </tr>
                                </thead>
                                <tbody className="dark:bg-gray-800">
                                    {content.feeStructure.rows.map((data, i) =>
                                        <tr key={i} className="border-b border-gray-50 dark:border-gray-700">
                                            <td className="p-3">{data.year}</td>
                                            <td className="p-3">{data.category}</td>
                                            <td className="p-3 text-right font-medium">{data.fee}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                        {/* TODO: Implement downloadFeeSchedule handler - update to fetch from /api/fee-schedule or provide direct PDF URL */}
                        <button
                            disabled
                            title="PDF download will be implemented"
                            className="w-full py-3 bg-primary/50 text-white rounded-lg font-bold text-sm cursor-not-allowed flex items-center justify-center gap-2 mt-auto opacity-60"
                        >
                            <span className="material-symbols-outlined text-sm"><MdDownload /></span>
                            {content.feeStructure.buttonLabel}
                        </button>
                    </div>
                </div>
                <div className="lg:col-span-3 flex flex-col gap-6">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 soft-card-shadow border-t-4 border-primary h-full">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="material-symbols-outlined text-primary"><MdLink /></span>
                            <h2 className="text-xl font-bold text-primary dark:text-white">{content.portalHeader}</h2>
                        </div>
                        <div className="flex flex-col gap-4">
                            {portals.map((item) => (
                                <PortalCard
                                    key={item.title}
                                    href={item.href}
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    icon={item.icon}
                                    accent={item.accent}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 bg-primary/5 dark:bg-gray-800/50 rounded-2xl p-8 border border-primary/10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <div className="size-14 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center text-primary shadow-sm border border-primary/5">
                        <span className="material-symbols-outlined text-3xl"><MdContactSupport /></span>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-primary dark:text-white">{content.help.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{content.help.description}</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={() => window.location.href = 'mailto:info@svgcdalauda.ac.in'}
                        className="px-6 py-2 border-2 border-primary text-primary rounded-lg font-bold text-sm hover:bg-primary hover:text-white transition-all"
                        aria-label="Email office"
                    >
                        {content.help.emailLabel}
                    </button>
                    <button
                        onClick={() => window.location.href = 'tel:+919999999999'}
                        className="px-6 py-2 bg-secondary text-white rounded-lg font-bold text-sm hover:brightness-110 transition-all shadow-md shadow-secondary/20"
                        aria-label="Call desk"
                    >
                        {content.help.callLabel}
                    </button>
                </div>
            </div>
        </main>
    )
}


function Faculty({ icon, en, hi, link }: {
    icon: React.ReactNode,
    en: string, hi: string, link: string
}) {
    return (
        <div className="space-y-3 mb-6">
            <h3 className="text-xs font-black uppercase tracking-widest flex justify-between border-b pb-2">
                <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">{icon}</span>
                    {en}
                </span>
                <span className="text-[10px] text-gray-400">{hi}</span>
            </h3>

            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="syllabus-link group flex justify-between items-center"
            >
                <span>{en} – NEP Links</span>
                <MdOpenInNew className="text-gray-300 group-hover:text-primary text-base" />
            </a>
        </div>
    );
}

const FoundationItem = ({ icon, title, hi, link }: {
    icon: React.ReactNode,
    title: string, hi: string, link: string,
}) => (
    <a
        target="_blank"
        rel="noopener noreferrer"
        href={link} className="flex items-center gap-2 p-2.5 rounded-lg bg-white border hover:border-secondary transition">
        <span className="text-primary text-sm">{icon}</span>
        <div className="flex flex-col">
            <span className="text-[11px] font-bold">{title}</span>
            <span className="text-[9px] text-gray-500">{hi}</span>
        </div>
    </a>
);


type PortalCardProps = {
    title: string;
    subtitle: string;
    href: string;
    icon: React.ReactNode;   // 👈 important
    accent: string;
};


export function PortalCard({
    href,
    title,
    subtitle,
    icon,
    accent = "primary",
}: PortalCardProps) {
    const accentBg =
        accent === "saffron"
            ? "bg-secondary/10 dark:bg-secondary/30"
            : "bg-primary/10 dark:bg-primary/30";

    const accentText =
        accent === "saffron"
            ? "text-secondary"
            : "text-primary";

    const accentHoverText =
        accent === "saffron"
            ? "group-hover:text-secondary"
            : "group-hover:text-primary";

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 hover-lift group shadow-sm transition"
        >
            {/* LEFT ICON */}
            <div
                className={`size-10 shrink-0 ${accentBg} rounded-lg flex items-center justify-center`}
            >
                <span className={`${accentText} text-lg`}>
                    {icon}
                </span>
            </div>

            {/* TEXT */}
            <div className="flex flex-col grow min-w-0">
                <p className="text-sm font-bold text-primary dark:text-white line-clamp-1">
                    {title}
                </p>
                <p className="text-[10px] text-gray-500">{subtitle}</p>
            </div>

            {/* OPEN ICON */}
            <span
                className={`text-gray-300 ${accentHoverText} transition-colors`}
            >
                {icon && <span className="text-lg"><MdOpenInNew /></span>}
            </span>
        </a>
    );
}