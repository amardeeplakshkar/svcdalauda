import React from "react";
import { MdSchool, MdLocationOn, MdCall, MdMail } from "react-icons/md";
import { useIntlayer } from "next-intlayer/server";

const getAcademicYear = (): string => {
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;
  return `${currentYear}-${String(nextYear).slice(-2)}`;
};

const Footer = () => {
  const content = useIntlayer("footer");

  const navSections = [
    {
      title: content.sections.academics.title,
      links: [
        { label: content.sections.academics.links.departments, href: "#" },
        { label: content.sections.academics.links.library, href: "#" },
        { label: content.sections.academics.links.research, href: "#" },
        { label: content.sections.academics.links.faculty, href: "#" },
        { label: content.sections.academics.links.skill, href: "#" },
      ],
    },
    {
      title: content.sections.admissions.title,
      links: [
        { label: `${content.sections.admissions.links.applyNow.value} ${getAcademicYear()}`, href: "#", highlight: true },
        { label: content.sections.admissions.links.feeStructure, href: "#" },
        { label: content.sections.admissions.links.scholarship, href: "#" },
        { label: content.sections.admissions.links.prospectus, href: "#" },
        { label: content.sections.admissions.links.rules, href: "#" },
      ],
    },
    {
      title: content.sections.campusLife.title,
      links: [
        { label: content.sections.campusLife.links.hostel, href: "#" },
        { label: content.sections.campusLife.links.sports, href: "#" },
        { label: content.sections.campusLife.links.nssNcc, href: "#" },
        { label: content.sections.campusLife.links.cultural, href: "#" },
        { label: content.sections.campusLife.links.alumni, href: "#" },
      ],
    },
  ];

  const contactItems = [
    { icon: MdLocationOn, text: content.contact.address.value.replace("\\n", "\n"), multiline: true },
    { icon: MdCall, text: content.contact.phone.value },
    { icon: MdMail, text: content.contact.email.value },
  ];

  return (
    <footer className="bg-primary text-white pt-20 pb-10 px-6 lg:px-40">
      <div className="max-w-[1200px] mx-auto">

        {/* content.College Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="mb-6">
            <div className="h-16 w-16 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto">
              <MdSchool className="text-accent-gold text-4xl" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black mb-2">
              {content.college.name}
            </h2>
            <p className="text-accent-gold font-medium tracking-[0.2em] uppercase text-xs">
              {content.college.location}
            </p>
          </div>

          <div className="max-w-3xl border-y border-white/10 py-8 px-4">
            <blockquote className="font-serif italic text-xl md:text-2xl text-cream-bg/90">
              "{content.college.quote}"
            </blockquote>
            <cite className="block mt-4 text-accent-gold font-bold text-sm uppercase tracking-wider">
              — {content.college.author}
            </cite>
          </div>
        </div>

        {/* Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {navSections.map((section, i) => (
            <div key={i} className="flex flex-col gap-6">
              <h4 className="text-accent-gold font-bold text-sm uppercase tracking-widest border-b border-white/10 pb-2">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href}
                      className={`text-sm transition-colors footer-link-hover
                        ${link.href ? "font-bold text-accent-gold" : "text-white/80 hover:text-accent-gold"}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="flex flex-col gap-6">
            <h4 className="text-accent-gold font-bold text-sm uppercase tracking-widest border-b border-white/10 pb-2">
              {content.contact.title}
            </h4>
            <div className="flex flex-col gap-4">
              {contactItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex gap-3">
                    <Icon className="text-accent-gold text-xl shrink-0" />
                    <p className="text-sm text-white/80 whitespace-pre-line">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* content.Copyright */}
        <div className="mt-12 text-center">
          <p className="text-white/40 text-[11px] uppercase tracking-[0.3em] font-bold">
            © {new Date().getFullYear()} {content.copyright}
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;