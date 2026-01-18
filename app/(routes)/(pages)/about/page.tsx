import { Label } from '@/components/ui/label'
import { Clock, LocateIcon, Mail, Phone, School } from 'lucide-react'
import React from 'react'
import { MdAccountBalance, MdDiversity1, MdDiversity3, MdFlag, MdGroups, MdLightbulb, MdMilitaryTech, MdSend, MdVerifiedUser, MdVisibility } from 'react-icons/md'

const AboutPage = () => {
    return (
        <div className="bg-background-light overflow-x-hidden dark:bg-background-dark text-gray-800 dark:text-gray-100 transition-colors duration-200">
            <main className="max-w-7xl mx-auto px-6">
                <section className="py-16 md:py-24 border-b border-primary/5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1">
                            <h2 className="text-4xl md:text-6xl font-black text-primary leading-tight mb-8">History &amp; <br />Heritage</h2>
                            <div className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300 italic">
                                <p>
                                    Founded in the rural heartland of Dalauda, Swami Vivekananda Govt College was established with a singular vision: to democratize high-quality education for the youth who represent India's future.
                                </p>
                                <p>
                                    For nearly four decades, our institution has stood as a testament to the ideals of Swami Vivekananda. What began as a modest building with a handful of visionary teachers has evolved into a premier regional hub for intellectual and character development.
                                </p>
                                <p className="font-normal not-italic">
                                    Our heritage is not just in our brick and mortar, but in the thousands of alumni who lead with integrity across the globe, carrying forward the flame of knowledge kindled here.
                                </p>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-accent-gold/10 rounded-xl transform -rotate-2 group-hover:rotate-0 transition-transform"></div>
                                <div className="relative overflow-hidden rounded-xl aspect-[4/5] shadow-2xl">
                                    <img alt="Historical Campus View" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" data-alt="Vintage sepia-toned photograph of college founding ceremony" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpksC6BX9TQHXgYUZeMrri1v5KtCj8IoPKi1aFWOij_8fD1RylVCX0Fq0HJYO0V4x2YlIr_2QJv9oI0GJEdJOlrvoXIwh04jaqvlC4HtmiYj5J-3OJ4AP908g1L0GfHAObGZuToLePMdB3Ci00PX3jaK6bt1l9KSMD4Tl0WaaUxNPYvvQQsZ9lY4qhWSOR1nkT_HqgT0S9NXzViBgUBNJ9YDHP9oTclPhG1lcrOgMcIEq-uJVHY8DQytn4UK6BzuP84nGKC65zu_I" />
                                    <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="py-20">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-primary">Our Guiding Light</h2>
                        <div className="h-1 w-20 bg-secondary mx-auto mt-4"></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        
                        <div className="bg-white dark:bg-zinc-900 p-12 rounded-xl shadow-sm border-t-4 border-secondary relative overflow-hidden">
                            <div className="absolute -right-8 -top-8 opacity-10">
                                <span className="material-symbols-outlined text-9xl"><MdFlag/></span>
                            </div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="size-12 rounded-full bg-accent-saffron/20 flex items-center justify-center text-accent-saffron">
                                    <span className="material-symbols-outlined text-3xl"><MdFlag/></span>
                                </div>
                                <h3 className="text-2xl font-bold">Our Mission</h3>
                            </div>
                            <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-400">
                                To provide holistic education that balances academic excellence with character building, ensuring our students are not just employable, but enlightened citizens capable of societal transformation.
                            </p>
                        </div>
                        
                        <div className="bg-white dark:bg-zinc-900 p-12 rounded-xl shadow-sm border-t-4 border-primary relative overflow-hidden">
                            <div className="absolute -right-8 -top-8 opacity-10">
                                <span className="material-symbols-outlined text-9xl"><MdVisibility/></span>
                            </div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-3xl"><MdVisibility/></span>
                                </div>
                                <h3 className="text-2xl font-bold">Our Vision</h3>
                            </div>
                            <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-400">
                                To emerge as a national center of excellence for higher education in the rural sector, fostering innovation, inclusivity, and the timeless values of Swami Vivekananda in every scholar.
                            </p>
                        </div>
                    </div>
                </section>
                
                <section className="py-20 border-t border-primary/5">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <span className="text-accent-gold font-bold uppercase tracking-widest text-xs">Governance</span>
                            <h2 className="text-4xl font-bold text-primary mt-2">Institutional Leadership</h2>
                        </div>
                        <p className="max-w-md text-gray-500 text-right">Guided by a council of distinguished academicians and community leaders committed to the college's growth.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        
                        <div className="group">
                            <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4">
                                <img alt="Principal" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Professional portrait of the college principal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJFPnkKhw9v5ogxFyj14EAxrQzA5bqXdCcNQ4PehCVY2jS5v2YugIJdDBePqTsWy-oYt_vxyuMediSAP8G2pcWIes8GtNi7NHJHbtxDlsmtCR7Q3rAN-2dlxUr7KV2wAaoov_SYExaUy_22TyuVNTOqMPMQGkkcs584qRGfsp1R7etYTsWgrE3B5-eK74jOpHiy5D5CrkVguL09LkKg3VTeHB0pW3Qi_QATODeTOwuQ1yqjUT70YAFdi4MoyVPHDmFmTAZaGuUkmE" />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                    <p className="text-white text-xs italic">"Education is the manifestation of the perfection already in man."</p>
                                </div>
                            </div>
                            <h4 className="text-lg font-bold text-primary">Dr. Rajesh Kumar</h4>
                            <p className="text-sm text-accent-gold font-medium uppercase tracking-tighter">Principal</p>
                        </div>
                        
                        <div className="group">
                            <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4">
                                <img alt="Vice Principal" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Professional portrait of the vice principal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm3H5Lx1A3b51fvBaxUr6_9ri5GdrDrg9SaCOfb0958azqGIV86l1xLDimF1y-xEuiGIgl51tpTZQLFjHESvZJsLIF8Oj_gZ_5yKeobb2lx5TFlMCz8MRHvpherI5DTf6ETSN2Xyblc8XXI7ET70xJBI3RVq5Pg7GCkKCLgI4Bm_QONqUCz9h6gY-1krpWRy7Jy4ane3aXn-9ZKibUofOqVoGpYQ_TTNej2V7AynzTLxvvA4gSripo_6F98uK8sIRUCvYKz0IwV8Q" />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                    <p className="text-white text-xs italic">"Striving for excellence in every academic pursuit."</p>
                                </div>
                            </div>
                            <h4 className="text-lg font-bold text-primary">Prof. Sunita Sharma</h4>
                            <p className="text-sm text-accent-gold font-medium uppercase tracking-tighter">Vice Principal</p>
                        </div>
                        
                        <div className="group">
                            <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4">
                                <img alt="Registrar" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Professional portrait of the administrative head" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz_LCNF_3thwPtgEao0OquOn8q1eSCT-nR5dXluDsGPgF-Vc48mY74vLhEerSg0qkSQgppeWhqTTQMrF84NXVsPB5xt3pguKiTYAQHYvo0FYwEvnVrY6xgCXqsF0EmZu_HJmPhd6HXgF2HF_vWOir-8IZDhlLVP15psSimNsPpQAoulRbqDsHWDpIGq4sgMkfJJgjw72dx4FW5pjmkR3YjXPdxT21TzUqlWnxlQie3ns2iQZzpk96uwCxZd9l-PIYNDeO6fjdei2I" />
                            </div>
                            <h4 className="text-lg font-bold text-primary">Shri Alok Vardhan</h4>
                            <p className="text-sm text-accent-gold font-medium uppercase tracking-tighter">Registrar</p>
                        </div>
                        
                        <div className="group">
                            <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4">
                                <img alt="Board Member" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Professional portrait of a governing body member" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBckfHRiG7hidkDlrcbsnyZGYeeuL9SHK3FlHpI8llXniSOz8n1Ji-vqsFQKPOFq-RWYIhLTMUwq3HaWFnhIkLzykmiwqdM3mivysuUoucULvk6rzL66vUYrM4IuUGytxv0_Jph0VNqzwSl0mQ2PxiG9jTW8FVgPzbipcqZ631yA-nUTLknUNSqbf6lS_zqeqw2wP088DAjJ9AMzoWQQETxuIIel_PL9rmMnM8OZt8zgAP3xd_IOfY6jIdtc8CIYpE6HoqlNaT-J78" />
                            </div>
                            <h4 className="text-lg font-bold text-primary">Dr. Meera Iyer</h4>
                            <p className="text-sm text-accent-gold font-medium uppercase tracking-tighter">Head of Governing Body</p>
                        </div>
                    </div>
                </section>
                
                <section className="py-24 bg-primary/5 -mx-6 px-6 md:-mx-40 md:px-40">
                    <div className="max-w-[1200px] mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-black text-primary mb-4 tracking-tight">Our Core Values</h2>
                            <p className="text-gray-600 max-w-xl mx-auto">The pillars upon which our institution is built and our students are molded.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            
                            <div className="bg-background-light dark:bg-zinc-800 p-8 rounded-lg shadow-[0_4px_0_0_#C9A961] hover:-translate-y-1 transition-transform">
                                <div className="text-primary mb-4"><span className="material-symbols-outlined text-4xl"><MdVerifiedUser/></span></div>
                                <h3 className="text-xl font-bold mb-3 text-primary">Integrity</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Upholding the highest moral and ethical standards in every action and academic endeavor.</p>
                            </div>
                            
                            <div className="bg-background-light dark:bg-zinc-800 p-8 rounded-lg shadow-[0_4px_0_0_#C9A961] hover:-translate-y-1 transition-transform">
                                <div className="text-primary mb-4"><span className="material-symbols-outlined text-4xl"><MdMilitaryTech/></span></div>
                                <h3 className="text-xl font-bold mb-3 text-primary">Excellence</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">A relentless pursuit of quality in teaching, learning, and extracurricular participation.</p>
                            </div>
                            
                            <div className="bg-background-light dark:bg-zinc-800 p-8 rounded-lg shadow-[0_4px_0_0_#C9A961] hover:-translate-y-1 transition-transform">
                                <div className="text-primary mb-4"><span className="material-symbols-outlined text-4xl"><MdGroups/></span></div>
                                <h3 className="text-xl font-bold mb-3 text-primary">Social Responsibility</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Committing to the betterment of our local community and the nation at large.</p>
                            </div>
                            
                            <div className="bg-background-light dark:bg-zinc-800 p-8 rounded-lg shadow-[0_4px_0_0_#C9A961] hover:-translate-y-1 transition-transform">
                                <div className="text-primary mb-4"><span className="material-symbols-outlined text-4xl"><MdLightbulb/></span></div>
                                <h3 className="text-xl font-bold mb-3 text-primary">Innovation</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Encouraging fresh perspectives and creative solutions to modern-day challenges.</p>
                            </div>
                            
                            <div className="bg-background-light dark:bg-zinc-800 p-8 rounded-lg shadow-[0_4px_0_0_#C9A961] hover:-translate-y-1 transition-transform">
                                <div className="text-primary mb-4"><span className="material-symbols-outlined text-4xl"><MdDiversity3/></span></div>
                                <h3 className="text-xl font-bold mb-3 text-primary">Inclusivity</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Fostering an environment where every individual feels valued, regardless of background.</p>
                            </div>
                            
                            <div className="bg-background-light dark:bg-zinc-800 p-8 rounded-lg shadow-[0_4px_0_0_#C9A961] hover:-translate-y-1 transition-transform">
                                <div className="text-primary mb-4"><span className="material-symbols-outlined text-4xl"><MdAccountBalance/></span></div>
                                <h3 className="text-xl font-bold mb-3 text-primary">Tradition</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Respecting our cultural roots while embracing the progress of the modern world.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default AboutPage