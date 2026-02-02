'use client'

import { usePostList } from '@/hooks/use-posts';
import { Bell } from 'lucide-react'
import Link from 'next/link';
import { useState } from 'react'
import { MdArrowRightAlt, MdHistory, MdInfo } from 'react-icons/md'
import ReactMarkdown from 'react-markdown'

const Notices = () => {
    const { data: posts, isLoading } = usePostList();
    type FilterType = "all" | "blog" | "announcement" | "notice";

    const [activeFilter, setActiveFilter] = useState<FilterType>("all");

    const blogs = posts?.filter(p => p.category === 'blog') || [];
    const announcements = posts?.filter(p => p.category === 'announcement') || [];
    const notices = posts?.filter(p => p.category === 'notice') || [];

    const formatDate = (date: Date | null) => {
        if (!date) return { day: "--", monthYear: "---" };

        const d = new Date(date);
        return {
            day: d.getDate(),
            monthYear: d.toLocaleDateString("en-US", {
                month: "short",
                year: "2-digit",
            }),
        };
    };

    const filteredPosts = (() => {
        switch (activeFilter) {
            case "blog":
                return blogs;
            case "announcement":
                return announcements;
            case "notice":
                return notices;
            default:
                return posts || [];
        }
    })();


    return (
        <div className="bg-background-light dark:bg-background-dark font-sans text-stone-800 dark:text-stone-200 transition-colors duration-300">
            <div className="layout-container flex h-full grow flex-col">
                <main className="flex-1 max-w-7xl mx-auto w-full py-12 px-6">
                    <div className="mb-10 text-center relative">
                        <div className="flex items-center justify-center gap-4 mb-2">
                            <div className="ornament"></div>
                            <span className="material-symbols-outlined text-primary"><Bell /></span>
                            <div className="ornament"></div>
                        </div>
                        <h2 className="text-4xl md:text-5xl quote-text font-bold text-primary dark:text-gold mb-2">Announcements</h2>
                        <div className="h-1 w-24 bg-secondary mx-auto rounded-full"></div>
                        <p className="text-primary/60 dark:text-stone-400 max-w-2xl mx-auto italic font-display text-lg">
                            Keeping you informed on your path to excellence.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                        <button
                            onClick={() => setActiveFilter("all")}
                            className={`flex items-center justify-center gap-3 h-10 px-6 rounded-full text-sm font-bold transition-all
      ${activeFilter === "all"
                                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                                    : "bg-white dark:bg-stone-800 border border-primary/10 text-primary dark:text-stone-300"}
    `}
                        >
                            All
                        </button>

                        <button
                            onClick={() => setActiveFilter("blog")}
                            className={`flex items-center justify-center gap-3  h-10 px-6 rounded-full text-sm font-semibold transition-all
      ${activeFilter === "blog"
                                    ? "bg-primary text-white"
                                    : "bg-white dark:bg-stone-800 border border-primary/10 text-primary dark:text-stone-300"}
    `}
                        >
                            Blogs
                        </button>

                        <button
                            onClick={() => setActiveFilter("announcement")}
                            className={`flex items-center justify-center gap-3  h-10 px-6 rounded-full text-sm font-semibold transition-all
      ${activeFilter === "announcement"
                                    ? "bg-primary text-white"
                                    : "bg-white dark:bg-stone-800 border border-primary/10 text-primary dark:text-stone-300"}
    `}
                        >
                            Announcements
                        </button>

                        <button
                            onClick={() => setActiveFilter("notice")}
                            className={`flex items-center justify-center gap-3  h-10 px-6 rounded-full text-sm font-semibold transition-all
      ${activeFilter === "notice"
                                    ? "bg-primary text-white"
                                    : "bg-white dark:bg-stone-800 border border-primary/10 text-primary dark:text-stone-300"}
    `}
                        >
                            Notices
                        </button>
                    </div>


                    <div className="bg-card-light dark:bg-stone-900 rounded-xl border border-primary/10 shadow-xl shadow-stone-200/50 dark:shadow-none overflow-hidden flex flex-col h-[600px]">
                        <div className="p-4 bg-primary/5 dark:bg-white/5 border-b border-primary/10 flex justify-between items-center">
                            <span className="text-xs font-bold text-primary dark:text-accent-gold uppercase tracking-widest">Recent Updates</span>
                        </div>
                        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-4">
                            {isLoading && (
                                <p className="text-center text-sm text-stone-500">{activeFilter === 'all' ? 'Loading...' : `Loading ${activeFilter}...`}</p>
                            )}

                            {!isLoading && filteredPosts.length === 0 && (
                                <p className="text-center text-sm text-stone-500">
                                    {activeFilter === 'all' ? 'No posts available' : `No ${activeFilter} available`}
                                </p>
                            )}

                            {filteredPosts.map((post) => {
                                const { day, monthYear } = formatDate(post.createdAt);

                                return (
                                    <Link
                                        key={post.id}
                                        className="notice-card group flex items-start gap-5 p-5 bg-white dark:bg-stone-800/50 rounded-lg border border-primary/5 transition-all cursor-pointer relative"
                                        href={`/posts/${post.id}`}
                                    >
                                        {/* Date box */}
                                        <div className="flex flex-col items-center justify-center bg-primary/10 dark:bg-primary/20 rounded-lg min-w-[64px] h-[64px] text-primary dark:text-accent-gold border border-primary/5">
                                            <span className="text-lg font-bold font-display leading-none">
                                                {day}
                                            </span>
                                            <span className="text-[10px] uppercase font-bold tracking-tighter">
                                                {monthYear}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-[10px] font-bold text-primary/50 dark:text-stone-500 uppercase tracking-widest">
                                                    {post.category}
                                                </span>
                                            </div>

                                            <h3 className="text-primary dark:text-stone-100 text-lg font-bold font-display leading-snug group-hover:text-primary/80 transition-colors truncate">
                                                {post.title}
                                            </h3>

                                            <div className="text-stone-500 dark:text-stone-400 text-sm font-normal line-clamp-1 mt-1 overflow-hidden text-ellipsis">
                                                {post.content ? post.content.split('\n')[0].substring(0, 100) : ''}
                                            </div>
                                        </div>

                                        {/* Action icon (generic) */}
                                        <div className="flex flex-col items-end justify-between self-stretch">
                                            <button className="text-primary/40 hover:text-primary dark:text-stone-500 dark:hover:text-accent-gold transition-colors">
                                                <span className="material-symbols-outlined text-3xl">
                                                    <MdInfo />
                                                </span>
                                            </button>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                        <div className="p-6 bg-primary text-white flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm"><MdHistory /></span>
                                <span className="text-sm font-semibold tracking-wide">Looking for older records?</span>
                            </div>
                            <Link href='/posts' className="flex items-center gap-1 text-sm font-bold bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
                                View Notice Archive
                                <span className="material-symbols-outlined text-sm"><MdArrowRightAlt /></span>
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Notices