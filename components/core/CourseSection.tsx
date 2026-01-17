import { GraduationCap, BookOpen, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { DepartmentDuoIcon } from './Icons'
import { RiMicroscopeFill } from "react-icons/ri";
import { MdArrowForward, MdOutlineHistoryEdu, MdRadioButtonChecked } from "react-icons/md";
import { MdPayments } from "react-icons/md";

const CourseSection = () => {
    return (
        <section className="py-8 md:py-12 bg-theme-500">
            <div className="p-8 container mx-auto">
                <h2 className="text-4xl text-center md:text-5xl quote-text font-bold text-white dark:text-gold mb-2">Departments & Courses</h2>
                <div className="h-1 w-24 bg-secondary mx-auto rounded-full mb-4"></div>
                <p className="dark:text-muted-foreground text-center text-muted mb-10 max-w-xl mx-auto">
                    Explore our diverse academic facilities for an enriched learning experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="group bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-8 rounded-2xl shadow-sm card-hover transition-all duration-300">
                        <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                            <span className="material-icons text-3xl text-primary group-hover:text-white">
                                <RiMicroscopeFill />
                            </span>
                        </div>
                        <h3 className="font-display text-2xl font-bold text-primary dark:text-secondary mb-3">Department of Science</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            Explore the mysteries of the universe through our rigorous programs in Physics, Chemistry, Mathematics, and Biological Sciences.
                        </p>
                        <ul className="space-y-3 mb-8 text-sm font-medium">
                            <li className="flex items-center gap-2">
                                <span className="material-icons text-secondary text-xs"><MdRadioButtonChecked/></span>
                                B.Sc. Mathematics &amp; Physics
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="material-icons text-secondary text-xs"><MdRadioButtonChecked/></span>
                                B.Sc. Biology &amp; Chemistry
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="material-icons text-secondary text-xs"><MdRadioButtonChecked/></span>
                                M.Sc. Specialized Research
                            </li>
                        </ul>
                        <a className="inline-flex items-center gap-2 text-primary dark:text-secondary font-bold group-hover:gap-4 hover:gap-4 transition-all" href="#">
                            VIEW ALL COURSES <span className="material-icons text-lg"><MdArrowForward/></span>
                        </a>
                    </div>
                    <div className="group bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-8 rounded-2xl shadow-sm card-hover transition-all duration-300">
                        <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                            <span className="material-icons text-3xl text-primary group-hover:text-white">
                                <MdOutlineHistoryEdu />
                            </span>
                        </div>
                        <h3 className="font-display text-2xl font-bold text-primary dark:text-secondary mb-3">Department of Arts</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            Dive deep into human culture, history, and languages. Our Arts department fosters critical thinking and creative expression.
                        </p>
                        <ul className="space-y-3 mb-8 text-sm font-medium">
                            <li className="flex items-center gap-2">
                                <span className="material-icons text-secondary text-xs"><MdRadioButtonChecked/></span>
                                B.A. English &amp; Hindi Literature
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="material-icons text-secondary text-xs"><MdRadioButtonChecked/></span>
                                B.A. Political Science &amp; History
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="material-icons text-secondary text-xs"><MdRadioButtonChecked/></span>
                                M.A. Sociology &amp; Economics
                            </li>
                        </ul>
                        <a className="inline-flex items-center gap-2 text-primary dark:text-secondary font-bold group-hover:gap-4 hover:gap-4 transition-all" href="#">
                            VIEW ALL COURSES <span className="material-icons text-lg"><MdArrowForward/></span>
                        </a>
                    </div>
                    <div className="group bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-8 rounded-2xl shadow-sm card-hover transition-all duration-300">
                        <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                            <span className="material-icons text-3xl text-primary group-hover:text-white">
                                <MdPayments/>
                            </span>
                        </div>
                        <h3 className="font-display text-2xl font-bold text-primary dark:text-secondary mb-3">Department of Commerce</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            Equipping students with modern business acumen, accounting expertise, and financial management skills for the global market.
                        </p>
                        <ul className="space-y-3 mb-8 text-sm font-medium">
                            <li className="flex items-center gap-2">
                                <span className="material-icons text-secondary text-xs"><MdRadioButtonChecked/></span>
                                B.Com. Financial Accounting
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="material-icons text-secondary text-xs"><MdRadioButtonChecked/></span>
                                B.Com. Computer Application
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="material-icons text-secondary text-xs"><MdRadioButtonChecked/></span>
                                M.Com. Business Management
                            </li>
                        </ul>
                        <a className="inline-flex items-center gap-2 text-primary dark:text-secondary font-bold group-hover:gap-4 hover:gap-4 transition-all" href="#">
                            VIEW ALL COURSES <span className="material-icons text-lg"><MdArrowForward/></span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CourseSection