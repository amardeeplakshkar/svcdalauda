'use client'

import { useFacultyList } from "@/hooks/use-faculty";
import { Input } from "@/components/ui/input";
import { Loader2, SearchIcon } from "lucide-react";
import { useState } from "react";
import { FacultyCard02 } from "@/components/admin/Faculty/FacultyCard";
import { useIntlayer } from "next-intlayer";

export default function FacultyList() {
  const content = useIntlayer('facultyPage');
  const { data: faculty, isLoading } = useFacultyList();
  const [search, setSearch] = useState("");
  const [deptFilter, setDeptFilter] = useState<string>("all");

  const departments = faculty
    ? Array.from(new Set(faculty.map(f => f.department)))
    : [];

  const filteredFaculty = faculty?.filter(f => {
    const matchesSearch = f.name.toLowerCase().includes(search.toLowerCase()) ||
      f.designation.toLowerCase().includes(search.toLowerCase());
    const matchesDept = deptFilter === "all" || f.department === deptFilter;
    return matchesSearch && matchesDept;
  });

  return (
    <>
      <div className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
        <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-secondary font-semibold tracking-widest uppercase text-sm mb-2 block">{content.badge}</span>
              <h2 className="text-4xl md:text-5xl font-display text-primary dark:text-red-500 mb-4">{content.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">{content.description}</p>
            </div>
            <div className="w-full md:w-96">
              <div className="relative group">
                <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
                  <SearchIcon />
                </span>
                <Input
                  className="w-full pl-12 pr-4 py-3 rounded-full h-12 border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 focus:border-primary focus:ring-0 transition-all outline-none"
                  placeholder={content.search.placeholder.value}
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-10 overflow-x-auto pb-4 custom-scrollbar">
            <button
              onClick={() => setDeptFilter("all")}
              className={`px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap
                ${deptFilter === "all"
                  ? "bg-primary text-white"
                  : "border-2 border-gray-200 dark:border-gray-800 hover:border-primary hover:text-primary dark:hover:text-red-400"
                }`}
            >
              {content.filter.allDepartments}
            </button>

            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setDeptFilter(dept)}
                className={`px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap
                  ${deptFilter === dept
                    ? "bg-primary text-white"
                    : "border-2 border-gray-200 dark:border-gray-800 hover:border-primary hover:text-primary dark:hover:text-red-400"
                  }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="h-10 w-10 animate-spin text-primary" />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredFaculty?.map(f => (
                <FacultyCard02 key={f.id} faculty={f} />
              ))}
            </div>
          )}

          {!isLoading && filteredFaculty?.length === 0 && (
            <div className="text-center py-20 border rounded-2xl border-dashed">
              <p className="text-muted-foreground">{content.empty}</p>
            </div>
          )}
        </section>
      </div>
    </>
  );
}