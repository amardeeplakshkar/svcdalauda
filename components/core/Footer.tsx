import React from 'react'
import { MdCall, MdLocationOn, MdMail, MdSchool, MdSocialDistance } from 'react-icons/md'

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-20 pb-10 px-6 lg:px-40">
            <div className="max-w-[1200px] mx-auto">
               
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="mb-6">
                        <div className="h-16 w-16 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                            <span className="material-symbols-outlined text-accent-gold text-4xl"><MdSchool/></span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-2">Swami Vivekananda Govt College</h2>
                        <p className="text-accent-gold font-medium tracking-[0.2em] uppercase text-xs">Dalauda, Mandsaur (M.P.)</p>
                    </div>
                    <div className="max-w-3xl border-y border-white/10 py-8 px-4">
                        <blockquote className="font-serif italic text-xl md:text-2xl text-cream-bg/90 leading-relaxed">
                            "Arise, awake, and stop not till the goal is reached."
                        </blockquote>
                        <cite className="not-italic block mt-4 text-accent-gold font-bold text-sm tracking-wider uppercase">— Swami Vivekananda</cite>
                    </div>
                </div>
               
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                   
                    <div className="flex flex-col gap-6">
                        <h4 className="text-accent-gold font-bold text-sm uppercase tracking-widest border-b border-white/10 pb-2">Academics</h4>
                        <ul className="flex flex-col gap-3">
                            <li><a className="text-sm text-white/80 hover:text-accent-gold transition-colors footer-link-hover" href="#">Academic Departments</a></li>
                            <li><a className="text-sm text-white/80 hover:text-accent-gold transition-colors footer-link-hover" href="#">Central Library</a></li>
                            <li><a className="text-sm text-white/80 hover:text-accent-gold transition-colors footer-link-hover" href="#">Research &amp; Innovation</a></li>
                            <li><a className="text-sm text-white/80 hover:text-accent-gold transition-colors footer-link-hover" href="#">Faculty Profiles</a></li>
                            <li><a className="text-sm text-white/80 hover:text-accent-gold transition-colors footer-link-hover" href="#">Skill Development</a></li>
                        </ul>
                    </div>
                   
                    <div className="flex flex-col gap-6">
                        <h4 className="text-accent-gold font-bold text-sm uppercase tracking-widest border-b border-white/10 pb-2">Admissions</h4>
                        <ul className="flex flex-col gap-3">
                            <li><a className="text-sm text-white/80 hover:text-accent-gold transition-colors footer-link-hover font-bold" href="#">Apply Now 2024-25</a></li>
                            <li><a className="text-sm text-white/80 hover:text-accent-gold transition-colors footer-link-hover" href="#">Fee Structure</a></li>
                            <li><a className="text-sm text-white/80 hover:text-accent-gold transition-colors footer-link-hover" href="#">Scholarship Programs</a></li>
                            <li><a className="text-sm text-white/80 hover:text-accent-gold transition-colors footer-link-hover" href="#">Admission Prospectus</a></li>
                            <li><a className="text-sm text-white/80 hover:text-accent-gold transition-colors footer-link-hover" href="#">Rules &amp; Regulations</a></li>
                        </ul>
                    </div>
                   
                    <div className="flex flex-col gap-6">
                        <h4 className="text-accent-gold font-bold text-sm uppercase tracking-widest border-b border-white/10 pb-2">Campus Life</h4>
                        <ul className="flex flex-col gap-3">
                            <li><a className="text-sm text-white/80 hover:text-accent-gold transition-colors footer-link-hover" href="#">Hostel Facilities</a></li>
                            <li><a className="text-sm text-white/80 hover:text-accent-gold transition-colors footer-link-hover" href="#">Sports &amp; Fitness</a></li>
                            <li><a className="text-sm text-white/80 hover:text-accent-gold transition-colors footer-link-hover" href="#">NSS &amp; NCC Units</a></li>
                            <li><a className="text-sm text-white/80 hover:text-accent-gold transition-colors footer-link-hover" href="#">Cultural Activities</a></li>
                            <li><a className="text-sm text-white/80 hover:text-accent-gold transition-colors footer-link-hover" href="#">Alumni Network</a></li>
                        </ul>
                    </div>
                   
                    <div className="flex flex-col gap-6">
                        <h4 className="text-accent-gold font-bold text-sm uppercase tracking-widest border-b border-white/10 pb-2">Get in Touch</h4>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="material-symbols-outlined text-accent-gold text-xl"><MdLocationOn/></span>
                                <p className="text-sm text-white/80 leading-relaxed">Dalauda, Mandsaur District,<br />Madhya Pradesh - 458667</p>
                            </div>
                            <div className="flex gap-3">
                                <span className="material-symbols-outlined text-accent-gold text-xl"><MdCall/></span>
                                <p className="text-sm text-white/80">+91 0000 000000</p>
                            </div>
                            <div className="flex gap-3">
                                <span className="material-symbols-outlined text-accent-gold text-xl"><MdMail/></span>
                                <p className="text-sm text-white/80">info@svgcdalauda.ac.in</p>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className="mt-12 text-center">
                    <p className="text-white/40 text-[11px] uppercase tracking-[0.3em] font-bold">
                        © 2024 Swami Vivekananda Govt College Dalauda. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer