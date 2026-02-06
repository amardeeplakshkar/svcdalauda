import { Metadata } from 'next';
import { Label } from '@/components/ui/label'
import { Clock, LocateIcon, Mail, Phone, School } from 'lucide-react'
import React from 'react'
import { MdAccountBalance, MdDiversity1, MdDiversity3, MdFlag, MdGroups, MdLightbulb, MdMilitaryTech, MdSend, MdVerifiedUser, MdVisibility } from 'react-icons/md'

export const metadata: Metadata = {
  title: 'Contact Us - Swami Vivekananda Govt College',
  description: 'Get in touch with Swami Vivekananda Govt College. Find our contact information, address, phone, email, and reach out to us with your queries.',
  keywords: 'contact, phone, email, location, address, dalauda',
  alternates: {
    canonical: 'https://svgcdalauda.in/contact',
  },
  openGraph: {
    title: 'Contact Us - Swami Vivekananda Govt College',
    description: 'Reach out to us with your questions and feedback',
    type: 'website',
    url: 'https://svgcdalauda.in/contact',
  },
};

const ContactPage = () => {
    return (
        <div className="bg-background-light overflow-x-hidden dark:bg-background-dark text-gray-800 dark:text-gray-100 transition-colors duration-200">
            <header className="bg-primary py-8 text-white text-center shadow-lg">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl quote-text md:text-5xl font-bold mb-2">Contact Us</h1>
                    <div className="h-1 w-24 bg-secondary mx-auto rounded-full"></div>
                </div>
            </header>
            <main className="container mx-auto px-4 py-12 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-7 bg-white dark:bg-gray-800 p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-primary dark:text-orange-400 mb-4">Send us a Message</h2>
                            <p className="text-gray-600 dark:text-gray-400">Have a question or feedback? Fill out the form below and our administrative team will get back to you shortly.</p>
                        </div>
                        <form action="#" className="space-y-6" method="POST">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <Label className="block text-sm font-semibold mb-2" >Full Name</Label>
                                    <input className="w-full px-4 py-3 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-secondary focus:border-secondary transition-all" id="full-name" name="full-name" placeholder="John Doe" type="text" />
                                </div>
                                <div>
                                    <Label className="block text-sm font-semibold mb-2">Email Address</Label>
                                    <input className="w-full px-4 py-3 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-secondary focus:border-secondary transition-all" id="email" name="email" placeholder="john@example.com" type="email" />
                                </div>
                            </div>
                            <div>
                                <Label className="block text-sm font-semibold mb-2">Subject</Label>
                                <select className="w-full px-4 py-3 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-secondary focus:border-secondary transition-all" id="subject" name="subject">
                                    <option>General Inquiry</option>
                                    <option>Admissions</option>
                                    <option>Academic Calendar</option>
                                    <option>Department Details</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div>
                                <Label className="block text-sm font-semibold mb-2">Your Message</Label>
                                <textarea className="w-full px-4 py-3 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-secondary focus:border-secondary transition-all resize-none" rows={5} id="message" name="message" placeholder="How can we help you?"></textarea>
                            </div>
                            <button className="w-full md:w-auto px-10 py-4 bg-primary hover:bg-red-900 text-white font-bold rounded shadow-lg transform active:scale-95 transition-all flex items-center justify-center gap-2" type="submit">
                                <span className="material-icons-outlined"><MdSend /></span>
                                Send Message
                            </button>
                        </form>
                    </div>
                    <div className="lg:col-span-5 space-y-8">
                        <div className="bg-primary text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <span className="material-icons-outlined text-9xl"><School size={150} /></span>
                            </div>
                            <h3 className="text-2xl font-bold mb-8 border-b border-red-800 pb-4">Contact Details</h3>
                            <div className="space-y-6 relative z-10">
                                <div className="flex items-start gap-4">
                                    <div className="bg-secondary p-3 rounded shadow-inner">
                                        <span className="material-icons-outlined"><LocateIcon /></span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-orange-200">Address</h4>
                                        <p className="text-sm leading-relaxed opacity-90">Swami Vivekananda Govt College,<br />Mhow-Neemuch Road, Dalauda,<br />Dist- Mandsaur, Madhya Pradesh - 458667</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-secondary p-3 rounded shadow-inner">
                                        <span className="material-icons-outlined"><Phone /></span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-orange-200">Phone</h4>
                                        <p className="text-sm opacity-90">+91 7422 123456<br />+91 7422 654321</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-secondary p-3 rounded shadow-inner">
                                        <span className="material-icons-outlined"><Mail /></span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-orange-200">Email</h4>
                                        <p className="text-sm opacity-90">info@svgcdalauda.ac.in<br />principal@svgcdalauda.ac.in</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-secondary p-3 rounded shadow-inner">
                                        <span className="material-icons-outlined"><Clock /></span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-orange-200">Office Hours</h4>
                                        <p className="text-sm opacity-90">Monday - Saturday<br />10:00 AM - 05:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="map-container overflow-hidden rounded-2xl shadow-xl border-4 border-white dark:border-gray-800 h-[300px]">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d996.9320264428029!2d75.09990942740093!3d23.963168504004162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396425000621d1d5%3A0xad04c7f96a1ba9c6!2sSwami%20Vivekanand%20govt%20college%20dalouda!5e1!3m2!1sen!2sin!4v1768489190668!5m2!1sen!2sin" width="100%" height="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="College Location Map" >
                            </iframe>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ContactPage