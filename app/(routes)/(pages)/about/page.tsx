import { Metadata, NextPage } from 'next';
import { Label } from '@/components/ui/label'
import { Clock, LocateIcon, Mail, Phone, School } from 'lucide-react'
import React from 'react'
import { MdAccountBalance, MdDiversity1, MdDiversity3, MdFlag, MdGroups, MdLightbulb, MdMilitaryTech, MdSend, MdVerifiedUser, MdVisibility } from 'react-icons/md'

import { IconType } from "react-icons";

type CoreValueKey =
    | "integrity"
    | "excellence"
    | "socialResponsibility"
    | "innovation"
    | "inclusivity"
    | "tradition";

const coreValueIcons: Record<string, IconType> = {
    integrity: MdVerifiedUser,
    excellence: MdMilitaryTech,
    socialResponsibility: MdGroups,
    innovation: MdLightbulb,
    inclusivity: MdDiversity3,
    tradition: MdAccountBalance,
};

import { getLocale, IntlayerServerProvider, useIntlayer } from 'next-intlayer/server';

export const metadata: Metadata = {
    title: 'About Us - Swami Vivekananda Govt College',
    description: 'Learn about our history, heritage, vision, and mission. Discover what makes us a premier educational institution dedicated to character development and academic excellence.',
    keywords: 'about, history, heritage, vision, mission, college, dalauda',
    alternates: {
        canonical: 'https://www.svgcdalauda.in/about',
    },
    openGraph: {
        title: 'About Us - Swami Vivekananda Govt College',
        description: 'History and heritage of our institution spanning nearly four decades',
        type: 'website',
        url: 'https://www.svgcdalauda.in/about',
    },
};

const AboutPage = () => {
    const content = useIntlayer('aboutInstitutionSection')
    return (
        <div className="bg-background-light overflow-x-hidden dark:bg-background-dark text-gray-800 dark:text-gray-100 transition-colors duration-200">
            <main className="max-w-7xl mx-auto px-6">
                <section className="py-16 md:py-24 border-b border-primary/5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1">
                            <h2 className="text-4xl md:text-6xl font-black text-primary leading-tight mb-8">{content.history.title}</h2>
                            <div className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300 italic">
                                <p>
                                    {content.history.paragraphs[0]}
                                </p>
                                <p>
                                    {content.history.paragraphs[1]}
                                </p>
                                <p className="font-normal not-italic">
                                    {content.history.paragraphs[2]}
                                </p>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-accent-gold/10 rounded-xl transform -rotate-2 group-hover:rotate-0 transition-transform"></div>
                                <div className="relative overflow-hidden rounded-xl aspect-[4/5] shadow-2xl">
                                    <img alt={content?.history?.imageAlt.value ?? ''} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" data-alt="Vintage sepia-toned photograph of college founding ceremony" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpksC6BX9TQHXgYUZeMrri1v5KtCj8IoPKi1aFWOij_8fD1RylVCX0Fq0HJYO0V4x2YlIr_2QJv9oI0GJEdJOlrvoXIwh04jaqvlC4HtmiYj5J-3OJ4AP908g1L0GfHAObGZuToLePMdB3Ci00PX3jaK6bt1l9KSMD4Tl0WaaUxNPYvvQQsZ9lY4qhWSOR1nkT_HqgT0S9NXzViBgUBNJ9YDHP9oTclPhG1lcrOgMcIEq-uJVHY8DQytn4UK6BzuP84nGKC65zu_I" />
                                    <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-primary">{content.guidingLight.title}</h2>
                        <div className="h-1 w-20 bg-secondary mx-auto mt-4"></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">

                        <div className="bg-white dark:bg-zinc-900 p-12 rounded-xl shadow-sm border-t-4 border-secondary relative overflow-hidden">
                            <div className="absolute -right-8 -top-8 opacity-10">
                                <span className="material-symbols-outlined text-9xl"><MdFlag /></span>
                            </div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="size-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                                    <span className="material-symbols-outlined text-3xl"><MdFlag /></span>
                                </div>
                                <h3 className="text-2xl font-bold">{content.guidingLight.mission.title}</h3>
                            </div>
                            <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-400">
                                {content.guidingLight.mission.description}
                            </p>
                        </div>

                        <div className="bg-white dark:bg-zinc-900 p-12 rounded-xl shadow-sm border-t-4 border-primary relative overflow-hidden">
                            <div className="absolute -right-8 -top-8 opacity-10">
                                <span className="material-symbols-outlined text-9xl"><MdVisibility /></span>
                            </div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-3xl"><MdVisibility /></span>
                                </div>
                                <h3 className="text-2xl font-bold">{content.guidingLight.vision.title}</h3>
                            </div>
                            <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-400">
                                {content.guidingLight.vision.description}
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-20 border-t border-primary/5">
                    <div className="flex flex-col md:flex-row justify-between mb-12 gap-6">
                        <div>
                            <span className="text-accent-gold font-bold uppercase tracking-widest text-xs">{content.leadership.badge}</span>
                            <h2 className="text-4xl font-bold text-primary mt-2">{content.leadership.title}</h2>
                        </div>
                        <p className="max-w-md text-gray-500">{content.leadership.description}</p>
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
                            <p className="text-sm text-accent-gold font-medium uppercase tracking-tighter">{content.leadership.members[0].role}</p>
                        </div>

                        <div className="group">
                            <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4">
                                <img alt="Vice Principal" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Professional portrait of the vice principal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm3H5Lx1A3b51fvBaxUr6_9ri5GdrDrg9SaCOfb0958azqGIV86l1xLDimF1y-xEuiGIgl51tpTZQLFjHESvZJsLIF8Oj_gZ_5yKeobb2lx5TFlMCz8MRHvpherI5DTf6ETSN2Xyblc8XXI7ET70xJBI3RVq5Pg7GCkKCLgI4Bm_QONqUCz9h6gY-1krpWRy7Jy4ane3aXn-9ZKibUofOqVoGpYQ_TTNej2V7AynzTLxvvA4gSripo_6F98uK8sIRUCvYKz0IwV8Q" />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                    <p className="text-white text-xs italic">"Striving for excellence in every academic pursuit."</p>
                                </div>
                            </div>
                            <h4 className="text-lg font-bold text-primary">Prof. Sunita Sharma</h4>
                            <p className="text-sm text-accent-gold font-medium uppercase tracking-tighter"> {content.leadership.members[1].role}</p>
                        </div>

                        <div className="group">
                            <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4">
                                <img alt="Registrar" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Professional portrait of the administrative head" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz_LCNF_3thwPtgEao0OquOn8q1eSCT-nR5dXluDsGPgF-Vc48mY74vLhEerSg0qkSQgppeWhqTTQMrF84NXVsPB5xt3pguKiTYAQHYvo0FYwEvnVrY6xgCXqsF0EmZu_HJmPhd6HXgF2HF_vWOir-8IZDhlLVP15psSimNsPpQAoulRbqDsHWDpIGq4sgMkfJJgjw72dx4FW5pjmkR3YjXPdxT21TzUqlWnxlQie3ns2iQZzpk96uwCxZd9l-PIYNDeO6fjdei2I" />
                            </div>
                            <h4 className="text-lg font-bold text-primary">Shri Alok Vardhan</h4>
                            <p className="text-sm text-accent-gold font-medium uppercase tracking-tighter">{content.leadership.members[2].role}</p>
                        </div>

                        <div className="group">
                            <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4">
                                <img alt="Board Member" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Professional portrait of a governing body member" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBckfHRiG7hidkDlrcbsnyZGYeeuL9SHK3FlHpI8llXniSOz8n1Ji-vqsFQKPOFq-RWYIhLTMUwq3HaWFnhIkLzykmiwqdM3mivysuUoucULvk6rzL66vUYrM4IuUGytxv0_Jph0VNqzwSl0mQ2PxiG9jTW8FVgPzbipcqZ631yA-nUTLknUNSqbf6lS_zqeqw2wP088DAjJ9AMzoWQQETxuIIel_PL9rmMnM8OZt8zgAP3xd_IOfY6jIdtc8CIYpE6HoqlNaT-J78" />
                            </div>
                            <h4 className="text-lg font-bold text-primary">Dr. Meera Iyer</h4>
                            <p className="text-sm text-accent-gold font-medium uppercase tracking-tighter">{content.leadership.members[3].role}</p>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-primary/5 -mx-6 px-6 md:-mx-40 md:px-40">
                    <div className="max-w-[1200px] mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-black text-primary mb-4 tracking-tight">{content.values.title}</h2>
                            <p className="text-gray-600 max-w-xl mx-auto">{content.values.subtitle}</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {content.values.items.map((value, i) => {
                                let Icon: IconType | null = null;

                                if (value.key.value === 'integrity') Icon = MdVerifiedUser;
                                else if (value.key.value === 'excellence') Icon = MdMilitaryTech;
                                else if (value.key.value === 'responsibility') Icon = MdGroups;
                                else if (value.key.value === 'innovation') Icon = MdLightbulb;
                                else if (value.key.value === 'inclusivity') Icon = MdDiversity3;
                                else if (value.key.value === 'tradition') Icon = MdAccountBalance;

                                return (
                                    <div
                                        key={i}
                                        className="bg-background-light dark:bg-zinc-800 p-8 rounded-lg
                       shadow-[0_4px_0_0_#C9A961] hover:-translate-y-1 transition-transform"
                                    >
                                        <div className="text-primary mb-4">
                                            {Icon && <Icon className="text-4xl" />}
                                        </div>

                                        <h3 className="text-xl font-bold mb-3 text-primary">
                                            {value.title}
                                        </h3>

                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}


const Page: NextPage = async () => {
    const locale = await getLocale();

    return (
        <IntlayerServerProvider locale={locale}>
            <AboutPage />
        </IntlayerServerProvider>
    );
};

export default Page;