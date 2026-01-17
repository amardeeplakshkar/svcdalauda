import { Bell } from 'lucide-react'
import React from 'react'
import { MdArrowRightAlt, MdCalendarMonth, MdDescription, MdDownloadForOffline, MdHistory, MdInfo, MdPictureAsPdf } from 'react-icons/md'

const Notices = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-sans text-stone-800 dark:text-stone-200 transition-colors duration-300">
            <div className="layout-container flex h-full grow flex-col">
                <main className="flex-1 max-w-7xl mx-auto w-full py-12 px-6">
                    <div className="mb-10 text-center relative">
                        <div className="flex items-center justify-center gap-4 mb-2">
                            <div className="ornament"></div>
                            <span className="material-symbols-outlined text-accent-gold"><Bell/></span>
                            <div className="ornament"></div>
                        </div>
                        <h2 className="text-4xl md:text-5xl quote-text font-bold text-primary dark:text-gold mb-2">Announcements</h2>
                        <div className="h-1 w-24 bg-secondary mx-auto rounded-full"></div>
                        <p className="text-primary/60 dark:text-stone-400 max-w-2xl mx-auto italic font-display text-lg">
                            Keeping you informed on your path to excellence.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                        <button className="flex h-10 items-center justify-center px-6 rounded-full bg-primary text-white shadow-lg shadow-primary/20 text-sm font-bold transition-all">
                            All Notices
                        </button>
                        <button className="flex h-10 items-center justify-center px-6 rounded-full bg-white dark:bg-stone-800 border border-primary/10 text-primary dark:text-stone-300 text-sm font-semibold hover:border-primary/40 transition-all">
                            Examinations
                        </button>
                        <button className="flex h-10 items-center justify-center px-6 rounded-full bg-white dark:bg-stone-800 border border-primary/10 text-primary dark:text-stone-300 text-sm font-semibold hover:border-primary/40 transition-all">
                            Admissions
                        </button>
                        <button className="flex h-10 items-center justify-center px-6 rounded-full bg-white dark:bg-stone-800 border border-primary/10 text-primary dark:text-stone-300 text-sm font-semibold hover:border-primary/40 transition-all">
                            Scholarships
                        </button>
                        <button className="flex h-10 items-center justify-center px-6 rounded-full bg-white dark:bg-stone-800 border border-primary/10 text-primary dark:text-stone-300 text-sm font-semibold hover:border-primary/40 transition-all">
                            Cultural
                        </button>
                    </div>

                    <div className="bg-card-light dark:bg-stone-900 rounded-xl border border-primary/10 shadow-xl shadow-stone-200/50 dark:shadow-none overflow-hidden flex flex-col h-[600px]">
                        <div className="p-4 bg-primary/5 dark:bg-white/5 border-b border-primary/10 flex justify-between items-center">
                            <span className="text-xs font-bold text-primary dark:text-accent-gold uppercase tracking-widest">Recent Updates</span>
                            <span className="text-[10px] text-primary/60 dark:text-stone-400">Displaying 12 of 128 items</span>
                        </div>
                        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-4">

                            <div className="notice-card group flex items-start gap-5 p-5 bg-white dark:bg-stone-800/50 rounded-lg border border-primary/5 transition-all cursor-pointer relative">
                                <div className="flex flex-col items-center justify-center bg-primary/10 dark:bg-primary/20 rounded-lg min-w-[64px] h-[64px] text-primary dark:text-accent-gold border border-primary/5">
                                    <span className="text-lg font-bold font-display leading-none">24</span>
                                    <span className="text-[10px] uppercase font-bold tracking-tighter">Oct '24</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="bg-accent-gold text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter shadow-sm">New</span>
                                        <span className="text-[10px] font-bold text-primary/50 dark:text-stone-500 uppercase tracking-widest">Academic</span>
                                    </div>
                                    <h3 className="text-primary dark:text-stone-100 text-lg font-bold font-display leading-snug group-hover:text-primary/80 transition-colors truncate">
                                        Semester Examination Schedule - Winter 2024
                                    </h3>
                                    <p className="text-stone-500 dark:text-stone-400 text-sm font-normal line-clamp-1 mt-1">
                                        The detailed timetable for the upcoming winter semester exams is now available for download. All departments are advised to review.
                                    </p>
                                </div>
                                <div className="flex flex-col items-end justify-between self-stretch">
                                    <button className="text-primary/40 hover:text-primary dark:text-stone-500 dark:hover:text-accent-gold transition-colors">
                                        <span className="material-symbols-outlined text-3xl"><MdDownloadForOffline/></span>
                                    </button>
                                    <span className="text-[10px] text-stone-400 font-medium">1.2 MB · PDF</span>
                                </div>
                            </div>

                            <div className="notice-card group flex items-start gap-5 p-5 bg-white dark:bg-stone-800/50 rounded-lg border border-primary/5 transition-all cursor-pointer relative">
                                <div className="flex flex-col items-center justify-center bg-primary/10 dark:bg-primary/20 rounded-lg min-w-[64px] h-[64px] text-primary dark:text-accent-gold border border-primary/5">
                                    <span className="text-lg font-bold font-display leading-none">22</span>
                                    <span className="text-[10px] uppercase font-bold tracking-tighter">Oct '24</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-[10px] font-bold text-primary/50 dark:text-stone-500 uppercase tracking-widest">Scholarship</span>
                                    </div>
                                    <h3 className="text-primary dark:text-stone-100 text-lg font-bold font-display leading-snug group-hover:text-primary/80 transition-colors truncate">
                                        Scholarship Application Deadline Extension
                                    </h3>
                                    <p className="text-stone-500 dark:text-stone-400 text-sm font-normal line-clamp-1 mt-1">
                                        The last date for submitting minority scholarship forms has been extended to Nov 15th for all eligible students.
                                    </p>
                                </div>
                                <div className="flex flex-col items-end justify-between self-stretch">
                                    <button className="text-primary/40 hover:text-primary dark:text-stone-500 dark:hover:text-accent-gold transition-colors">
                                        <span className="material-symbols-outlined text-3xl"><MdPictureAsPdf/></span>
                                    </button>
                                    <span className="text-[10px] text-stone-400 font-medium">850 KB · PDF</span>
                                </div>
                            </div>

                            <div className="notice-card group flex items-start gap-5 p-5 bg-white dark:bg-stone-800/50 rounded-lg border border-primary/5 transition-all cursor-pointer relative">
                                <div className="flex flex-col items-center justify-center bg-primary/10 dark:bg-primary/20 rounded-lg min-w-[64px] h-[64px] text-primary dark:text-accent-gold border border-primary/5">
                                    <span className="text-lg font-bold font-display leading-none">18</span>
                                    <span className="text-[10px] uppercase font-bold tracking-tighter">Oct '24</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-[10px] font-bold text-primary/50 dark:text-stone-500 uppercase tracking-widest">Events</span>
                                    </div>
                                    <h3 className="text-primary dark:text-stone-100 text-lg font-bold font-display leading-snug group-hover:text-primary/80 transition-colors truncate">
                                        Guest Lecture on Vedantic Philosophy by Dr. Sharma
                                    </h3>
                                    <p className="text-stone-500 dark:text-stone-400 text-sm font-normal line-clamp-1 mt-1">
                                        Join us in the Central Auditorium for an enlightening session on the teachings of Swami Vivekananda.
                                    </p>
                                </div>
                                <div className="flex flex-col items-end justify-between self-stretch">
                                    <button className="text-primary/40 hover:text-primary dark:text-stone-500 dark:hover:text-accent-gold transition-colors">
                                        <span className="material-symbols-outlined text-3xl"><MdCalendarMonth/></span>
                                    </button>
                                    <span className="text-[10px] text-stone-400 font-medium">View Flyer</span>
                                </div>
                            </div>

                            <div className="notice-card group flex items-start gap-5 p-5 bg-white dark:bg-stone-800/50 rounded-lg border border-primary/5 transition-all cursor-pointer relative">
                                <div className="flex flex-col items-center justify-center bg-primary/10 dark:bg-primary/20 rounded-lg min-w-[64px] h-[64px] text-primary dark:text-accent-gold border border-primary/5">
                                    <span className="text-lg font-bold font-display leading-none">15</span>
                                    <span className="text-[10px] uppercase font-bold tracking-tighter">Oct '24</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-[10px] font-bold text-primary/50 dark:text-stone-500 uppercase tracking-widest">Admin</span>
                                    </div>
                                    <h3 className="text-primary dark:text-stone-100 text-lg font-bold font-display leading-snug group-hover:text-primary/80 transition-colors truncate">
                                        Annual Sports Meet Registration Form - 2024
                                    </h3>
                                    <p className="text-stone-500 dark:text-stone-400 text-sm font-normal line-clamp-1 mt-1">
                                        Registration for track and field events is now open. Physical fitness clearance required from the medical center.
                                    </p>
                                </div>
                                <div className="flex flex-col items-end justify-between self-stretch">
                                    <button className="text-primary/40 hover:text-primary dark:text-stone-500 dark:hover:text-accent-gold transition-colors">
                                        <span className="material-symbols-outlined text-3xl"><MdDescription/></span>
                                    </button>
                                    <span className="text-[10px] text-stone-400 font-medium">DOCX · 45 KB</span>
                                </div>
                            </div>

                            <div className="notice-card group flex items-start gap-5 p-5 bg-white dark:bg-stone-800/50 rounded-lg border border-primary/5 transition-all cursor-pointer relative">
                                <div className="flex flex-col items-center justify-center bg-primary/10 dark:bg-primary/20 rounded-lg min-w-[64px] h-[64px] text-primary dark:text-accent-gold border border-primary/5">
                                    <span className="text-lg font-bold font-display leading-none">10</span>
                                    <span className="text-[10px] uppercase font-bold tracking-tighter">Oct '24</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-[10px] font-bold text-primary/50 dark:text-stone-500 uppercase tracking-widest">Library</span>
                                    </div>
                                    <h3 className="text-primary dark:text-stone-100 text-lg font-bold font-display leading-snug group-hover:text-primary/80 transition-colors truncate">
                                        Updated Library Timing for Mid-Term Exams
                                    </h3>
                                    <p className="text-stone-500 dark:text-stone-400 text-sm font-normal line-clamp-1 mt-1">
                                        Library will remain open until 9:00 PM on weekdays and 5:00 PM on weekends for the next two months.
                                    </p>
                                </div>
                                <div className="flex flex-col items-end justify-between self-stretch">
                                    <button className="text-primary/40 hover:text-primary dark:text-stone-500 dark:hover:text-accent-gold transition-colors">
                                        <span className="material-symbols-outlined text-3xl"><MdInfo/></span>
                                    </button>
                                    <span className="text-[10px] text-stone-400 font-medium">Info</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 bg-primary text-white flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm"><MdHistory/></span>
                                <span className="text-sm font-semibold tracking-wide">Looking for older records?</span>
                            </div>
                            <button className="flex items-center gap-1 text-sm font-bold bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
                                View Notice Archive
                                <span className="material-symbols-outlined text-sm"><MdArrowRightAlt/></span>
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Notices