'use client'

import { useFacultyList } from "@/hooks/use-faculty";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Loader2, Mail, Phone, SearchIcon } from "lucide-react";
import { useState } from "react";
import { FacultyCard02 } from "@/components/admin/Faculty/FacultyCard";

export default function FacultyList() {
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
              <span className="text-secondary font-semibold tracking-widest uppercase text-sm mb-2 block">Our Educators</span>
              <h2 className="text-4xl md:text-5xl font-display text-primary dark:text-red-500 mb-4">Faculty Directory</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Guided by the vision of Swami Vivekananda, our distinguished faculty members are dedicated to academic excellence and character building.
              </p>
            </div>
            <div className="w-full md:w-96">
              <div className="relative group">
                <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors"><SearchIcon /></span>
                <Input className="w-full pl-12 pr-4 py-3 rounded-full h-12 border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 focus:border-primary focus:ring-0 transition-all outline-none" placeholder="Search faculty or department..." type="text" value={search}
                  onChange={(e) => setSearch(e.target.value)} />
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
                }
        `}
            >
              All Departments
            </button>

            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setDeptFilter(dept)}
                className={`px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap
            ${deptFilter === dept
                    ? "bg-primary text-white"
                    : "border-2 border-gray-200 dark:border-gray-800 hover:border-primary hover:text-primary dark:hover:text-red-400"
                  }
          `}
              >
                {dept}
              </button>
            ))}
          </div>
          {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="h-10 w-10 animate-spin text-primary" />
            </div>
          ) : (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredFaculty?.map(f => (
              <FacultyCard02 key={f.id} faculty={f} />
            ))}
            {/* <div className="group bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center">
              <div className="faculty-card-frame mb-6 group-hover:scale-105 transition-transform duration-300">
                <div className="faculty-image-container w-32 h-32 md:w-40 md:h-40">
                  <img alt="Dr. Ananya Sharma" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWEnZsYfRUcM5VskydumX80ISdG4KW9qOaNUGUemzh-kG3Sbd9L23-gQj2DlAI47-jU-ChtKojTFeU9jg2c_jIqFdUPrzP-kb2EwECNAViEhRRWbizbGVtr9KHxaPjYnK_BxgfloMlOSy8-7GBrS24kv_YR0XHYlfxJe3kSkjpjBYxF9_7OYSgu4RD-sJZR7XuNkkoi9nnBoJ_9WeqVz3rStGpRAjA7xjHU2a8dd9twzzQD-w2viwSK-zaG79ariDpUKPOHFM08AI" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Dr. Ananya Sharma</h3>
              <p className="text-primary dark:text-red-400 font-semibold text-sm mb-3">Head of Department</p>
              <div className="w-12 h-0.5 bg-secondary mb-3"></div>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Department of Physics<br />M.Sc, PhD (IIT Delhi)</p>
              <div className="mt-auto flex gap-4">
                <a className="text-gray-400 hover:text-primary transition-colors" href="#"><span className="material-icons text-xl"><Mail/></span></a>
                <a className="text-gray-400 hover:text-primary transition-colors" href="#"><span className="material-icons text-xl"><Phone/></span></a>
              </div>
            </div>
            <div className="group bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center">
              <div className="faculty-card-frame mb-6 group-hover:scale-105 transition-transform duration-300">
                <div className="faculty-image-container w-32 h-32 md:w-40 md:h-40">
                  <img alt="Prof. Rajesh Kumar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHMX3aFHBwb7FeUupFLHnstbUUOtjBZGFnWOpXhu2lJvachBy_EIOIxmHNn2-JG33mSAGfbpO9wdGGVGZJVgAZGH7-uX7Cee7I6Ebu92gAA9TnAjydUhfzZER9AeQdv0uOT_CTxzjaUN-nAmnKVIEQ7Yclt3Dk3YwI4WNJXQVaCvnZ2Nv-Q80u6gV9r4fCU5LyQ-2J3rO2UUrKvMWSUGUHllSwhZ9FoJPqQHIWeMRk7s2bbAp1YbAN-1Vo7bWAhm_0CqJ1Mms2aOs" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Prof. Rajesh Kumar</h3>
              <p className="text-primary dark:text-red-400 font-semibold text-sm mb-3">Senior Professor</p>
              <div className="w-12 h-0.5 bg-secondary mb-3"></div>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Department of Mathematics<br />M.A, M.Phil</p>
              <div className="mt-auto flex gap-4">
                <a className="text-gray-400 hover:text-primary transition-colors" href="#"><span className="material-icons text-xl"><Mail/></span></a>
                <a className="text-gray-400 hover:text-primary transition-colors" href="#"><span className="material-icons text-xl"><Phone/></span></a>
              </div>
            </div>
            <div className="group bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center">
              <div className="faculty-card-frame mb-6 group-hover:scale-105 transition-transform duration-300">
                <div className="faculty-image-container w-32 h-32 md:w-40 md:h-40">
                  <img alt="Dr. Meera Patel" className="w-full h-full object-cover" src="https://avatars.githubusercontent.com/u/109571797?v=4" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Amardeep Lakshkar</h3>
              <p className="text-primary dark:text-red-400 font-semibold text-sm mb-3">Web Developer</p>
              <div className="w-12 h-0.5 bg-secondary mb-3"></div>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Department of Economics<br />PhD (JNU)</p>
              <div className="mt-auto flex gap-4">
                <a className="text-gray-400 hover:text-primary transition-colors" href="#"><span className="material-icons text-xl"><Mail/></span></a>
                <a className="text-gray-400 hover:text-primary transition-colors" href="#"><span className="material-icons text-xl"><Phone/></span></a>
              </div>
            </div>
            <div className="group bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center">
              <div className="faculty-card-frame mb-6 group-hover:scale-105 transition-transform duration-300">
                <div className="faculty-image-container w-32 h-32 md:w-40 md:h-40">
                  <img alt="Prof. Vikram Singh" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFDSY-IuwKNQBq6WbWrby0bXBY7lTz-H71fD4csiVixP9KkC4BAUqj4SUBMzNGfAokDISjCS67fOUeTfYogXeP6Tzu_H_CXwjhfgqCnStsBf8nhBlm448EH0rV-3Nsd4DrXvQ534_Qf7nXfeL1nIyFU6Zz1p5sF4OyusywedAP6J68OXe_c9uCXje9iRnuJ7Hm_V2jHymFR5a3MY6DkrCA2isjfX-TLp9txNYPsZsddMIo0laxBm2FrejY9iiv-FTXRUlKXRouSx4" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Prof. Vikram Singh</h3>
              <p className="text-primary dark:text-red-400 font-semibold text-sm mb-3">Associate Professor</p>
              <div className="w-12 h-0.5 bg-secondary mb-3"></div>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Dept. of Computer Science<br />M.Tech, NET</p>
              <div className="mt-auto flex gap-4">
                <a className="text-gray-400 hover:text-primary transition-colors" href="#"><span className="material-icons text-xl"><Mail/></span></a>
                <a className="text-gray-400 hover:text-primary transition-colors" href="#"><span className="material-icons text-xl"><Phone/></span></a>
              </div>
            </div>
            <div className="group bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center">
              <div className="faculty-card-frame mb-6 group-hover:scale-105 transition-transform duration-300">
                <div className="faculty-image-container w-32 h-32 md:w-40 md:h-40">
                  <img alt="Dr. Sanjay Verma" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5bXQuIfX-P7GBKqaGYqpB3xCzTv2gV-oeCOs6gZyEcEOjNDRJpcnAl649q3tl-Y6O0VwzwaIT4cHUh18J2gL4Ed-DAyFnLQea2h_BjsK-MHKI5Bs__jeI-gCXrM338hqCoPKY74Yaq0xj_QXFzow8NFUcMqYJorza8l_r3CpPrV__YcZ02Izl5CEv8sLJ6Oxp0ahnUtX34SOw8Hr7y2gQHTl_gJfMATQokWbj3K2Efakhj9imNVarQeB9f1iQN8s9YX8mOdrUS7g" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Dr. Sanjay Verma</h3>
              <p className="text-primary dark:text-red-400 font-semibold text-sm mb-3">Assistant Professor</p>
              <div className="w-12 h-0.5 bg-secondary mb-3"></div>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Department of Botany<br />PhD (BHU)</p>
              <div className="mt-auto flex gap-4">
                <a className="text-gray-400 hover:text-primary transition-colors" href="#"><span className="material-icons text-xl"><Mail/></span></a>
                <a className="text-gray-400 hover:text-primary transition-colors" href="#"><span className="material-icons text-xl"><Phone/></span></a>
              </div>
            </div>
            <div className="group bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center">
              <div className="faculty-card-frame mb-6 group-hover:scale-105 transition-transform duration-300">
                <div className="faculty-image-container w-32 h-32 md:w-40 md:h-40">
                  <img alt="Ms. Sunita Jha" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC_jo-whp7WIJ8_92yqXAWmXxqZEuXLfi9GLuTDVDnEt4dOIBAe51JbCn96nDCrVz_QyKaQ6ihc9BZkFJm2Tj7yWWfSQRvW4AbpiBiV1gRQ9R5OYBa2zd0USrkdUL8LfiqP81SV2YTdhQgW3CD00XX_UlLJjBHGweZvJbQfOBKkS-uYZfnVntdzkT8cCyhw7mvgEmDEansDOXFW-mR0WtZALtGMTEi2VrSSi9yR-7Fx4qexwCCWIfvNQjVAsZFftCZePrKD5eW2qw" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Ms. Sunita Jha</h3>
              <p className="text-primary dark:text-red-400 font-semibold text-sm mb-3">Lecturer</p>
              <div className="w-12 h-0.5 bg-secondary mb-3"></div>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Department of English<br />M.A (English Lit)</p>
              <div className="mt-auto flex gap-4">
                <a className="text-gray-400 hover:text-primary transition-colors" href="#"><span className="material-icons text-xl"><Mail/></span></a>
                <a className="text-gray-400 hover:text-primary transition-colors" href="#"><span className="material-icons text-xl"><Phone/></span></a>
              </div>
            </div>
            <div className="group bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center">
              <div className="faculty-card-frame mb-6 group-hover:scale-105 transition-transform duration-300">
                <div className="faculty-image-container w-32 h-32 md:w-40 md:h-40">
                  <img alt="Dr. Amit Trivedi" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDn4vUiYlt_lTd9OsEBkNgU0MGtjsFqlvPvUMVG7Z47BCkK0yhD3NnL-TDREoUGJUVbo6NkkxzXu6zxeccAqDxylu28BAKIA9mUJwAsDLMK9UVAdP87LU3npb0d16FJDmkzoNxRAHVPJhX2ewt4ImUXc0Fwm7a2Ot--iKXpEwf-XArdh1RSFuM8RRH5CNZxuXAbDLnztBgRvjLEshfQLmiXG9EcVqePIQ4hNG2w_6wD8OSmqp2cnQ9x60dHYx2HpMNIoi3B6EUX5Ag" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Dr. Amit Trivedi</h3>
              <p className="text-primary dark:text-red-400 font-semibold text-sm mb-3">Assistant Professor</p>
              <div className="w-12 h-0.5 bg-secondary mb-3"></div>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Department of History<br />M.A, PhD</p>
              <div className="mt-auto flex gap-4">
                <a className="text-gray-400 hover:text-primary transition-colors" href="#"><span className="material-icons text-xl"><Mail/></span></a>
                <a className="text-gray-400 hover:text-primary transition-colors" href="#"><span className="material-icons text-xl"><Phone/></span></a>
              </div>
            </div>
            <div className="group bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center">
              <div className="faculty-card-frame mb-6 group-hover:scale-105 transition-transform duration-300">
                <div className="faculty-image-container w-32 h-32 md:w-40 md:h-40">
                  <img alt="Prof. Kavita Reddy" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDewIGkG8P1-CyiFGqNUGbJthzOU4aWU1yqMcQq0xyCpgV63poUG4lVPvAgfoqExp-FMCsx4kwaGka4a44DHGyjMZP2vEaKMZ5uMdNiG2xCpCDJoLQJZSfl3-Eq8vBbC-Dl5jb4uVmbwV53wDtG7qjI1mlXHTfp-P5-01rLdW_myH65LKvSC2zn_7p3YYZCfAXp-u1sVw0snT6NAarK_0d2pZ4qLmnRmiw59ibraTrFGgtYxQLiLK9KwblVcJyeSVuNFBA3GSn3jg" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Prof. Kavita Reddy</h3>
              <p className="text-primary dark:text-red-400 font-semibold text-sm mb-3">Senior Professor</p>
              <div className="w-12 h-0.5 bg-secondary mb-3"></div>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Department of Chemistry<br />M.Sc (Org. Chem)</p>
              <div className="mt-auto flex gap-4">
                <a className="text-gray-400 hover:text-primary transition-colors" href="#"><span className="material-icons text-xl"><Mail/></span></a>
                <a className="text-gray-400 hover:text-primary transition-colors" href="#"><span className="material-icons text-xl"><Phone/></span></a>
              </div>
            </div> */}
          </div>)}

          {!isLoading && filteredFaculty?.length === 0 && (
            <div className="text-center py-20 border rounded-2xl border-dashed">
              <p className="text-muted-foreground">No faculty members found matching your criteria.</p>
            </div>
          )}
        </section>

      </div>
    </>
  );
}
