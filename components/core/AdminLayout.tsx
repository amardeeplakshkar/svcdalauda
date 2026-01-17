import React from 'react'
import { MdAccountBalance, MdGppMaybe, MdPublic, MdSchool } from 'react-icons/md'

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display min-h-screen">
            <div className="flex h-screen w-full overflow-hidden">
                <div className="hidden lg:flex lg:w-1/2 relative">
                    <div className="absolute inset-0 bg-cover bg-center" data-alt="Dignified view of college campus architecture" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDl-0cr_C2437cP4qpJnJrYyrTtzP_87FOqWaeadssxrwILJS5kZMeyW26Cg_KX17uIU5P29K8Z7z65w2Z-jP8I6EqFrHUQ_kNowONqFNmYkSiRlAJrmuKOq522WeY53T75VeMLSbTmCLEbthbVGFOSkr-A82pRnqvCLwbdYBOAkqVpeGRtCTy17hoJJLP8ikzsYI8ZmZYpJPNwJ82M5YC-NOfIZfr3eLe7v_A_2f7JelcnmdGddQA_ErLrSmkyrSJ-W18CG1gQQ00')" }}>
                    </div>
                    <div className="absolute inset-0 bg-primary/75 flex flex-col justify-end p-20 text-white">
                        <div className="max-w-md">
                            <div className="mb-6 opacity-90">
                                <span className="material-symbols-outlined text-6xl"><MdAccountBalance /></span>
                            </div>
                            <h1 className="text-5xl font-bold leading-tight mb-4">Establishing Excellence Since 1964</h1>
                            <p className="text-xl font-light opacity-80 leading-relaxed">
                                Dedicated to the ideals of Swami Vivekananda, empowering the youth of Dalauda through quality education and character building.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-8 sm:px-12 md:px-24 bg-background-light dark:bg-background-dark">
                    <div className="w-full max-w-[440px]">

                        <div className="mb-4 text-center">
                            <div className="flex items-center justify-center gap-3 mb-3">
                                <div className="bg-primary p-2 rounded-lg text-white">
                                    <span className="material-symbols-outlined text-3xl"><MdSchool /></span>
                                </div>
                                <h2 className="text-[#181211]  dark:text-white text-lg font-bold tracking-tight">Swami Vivekananda Govt College</h2>
                            </div>
                            <h3 className="text-3xl font-black text-primary dark:text-primary leading-tight mb-2">Admin Portal</h3>
                            <p className="text-[#89675d] dark:text-gray-400 text-base font-normal">Please enter your credentials to manage the institution.</p>
                        </div>

                        <div className='flex items-center justify-center'>
                            {children}
                        </div>

                        <div className="mt-4 pt-4 border-t border-[#f1ebea] dark:border-gray-800">
                            <div className="flex items-center gap-2 text-[#89675d] dark:text-gray-500 text-xs font-medium uppercase tracking-widest">
                                <span className="material-symbols-outlined text-sm"><MdGppMaybe /></span>
                                <span>Authorized Personnel Only</span>
                            </div>
                            <p className="mt-4 text-[#89675d] dark:text-gray-500 text-sm">
                                Unauthorized access attempts are monitored and recorded.
                            </p>

                            <div className="mt-4">
                                <a className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#f1ebea] dark:bg-gray-800 text-[#181211] dark:text-white text-sm font-bold transition-colors hover:bg-[#e2d8d5] dark:hover:bg-gray-700" href="#">
                                    <span className="material-symbols-outlined text-lg"><MdPublic /></span>
                                    <span>Return to Website</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLayout