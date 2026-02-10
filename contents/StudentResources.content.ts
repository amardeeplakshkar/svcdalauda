import { t, type Dictionary } from "intlayer";

const studentResourcesSection = {
  key: "studentResourcesSection",
  content: {
    header: {
      title: t({
        en: "Student Resources",
        hi: "छात्र संसाधन",
      }),
      description: t({
        en: "Access NEP 2020 syllabus links, fee structures, and essential university portals for the current academic session.",
        hi: "वर्तमान शैक्षणिक सत्र के लिए NEP 2020 पाठ्यक्रम, शुल्क संरचना और महत्वपूर्ण विश्वविद्यालय पोर्टल तक पहुँच प्राप्त करें।",
      }),
    },

    nep: {
      title: t({ en: "NEP 2020 Syllabus", hi: "NEP 2020 पाठ्यक्रम" }),
      subtitle: t({
        en: "National Education Policy 2020",
        hi: "राष्ट्रीय शिक्षा नीति 2020",
      }),

      years: [
        {
          key: "first_year",
          label: t({ en: "1st Year", hi: "प्रथम वर्ष" }),
        },
        {
          key: "second_year",
          label: t({ en: "2nd Year", hi: "द्वितीय वर्ष" }),
        },
        {
          key: "third_year",
          label: t({ en: "3rd Year", hi: "तृतीय वर्ष" }),
        },
      ],

      syllabus: {
        first_year: {
          science: {
            title: t({ en: "Faculty of Science", hi: "विज्ञान संकाय" }),
            link: "https://highereducation.mp.gov.in/?page=V5rbSX5WAwKyQVYYjwHGkQ%3D%3D",
          },
          arts: {
            title: t({ en: "Faculty of Arts", hi: "कला संकाय" }),
            link: "https://highereducation.mp.gov.in/?page=6uVp%2FpC%2F%2B5vE5KdN7z7eFA%3D%3D",
          },
          commerce: {
            title: t({ en: "Faculty of Commerce", hi: "वाणिज्य संकाय" }),
            link: "https://highereducation.mp.gov.in/?page=0gmDOLmBdiUFwutV1tbdvw%3D%3D",
          },
          foundation: [
            {
              title: t({ en: "Hindi Language", hi: "हिन्दी भाषा" }),
              link: "https://highereducation.mp.gov.in/Uploaded Document New/admin_hecms/Hindi Language.pdf",
            },
            {
              title: t({ en: "English Language", hi: "अंग्रेजी भाषा" }),
              link: "https://highereducation.mp.gov.in/Uploaded Document New/admin_hecms/English Language.pdf",
            },
            {
              title: t({ en: "VAC", hi: "VAC" }),
              link: "https://highereducation.mp.gov.in/Uploaded Document New/admin_hecms/VAC - Copy 1.pdf",
            },
          ],
        },

        second_year: {
          science: {
            title: t({ en: "Faculty of Science", hi: "विज्ञान संकाय" }),
            link: "https://highereducation.mp.gov.in/?page=TkYbuI6tYEgZ4lyin1Dp9g%3D%3D",
          },
          arts: {
            title: t({ en: "Faculty of Arts", hi: "कला संकाय" }),
            link: "https://highereducation.mp.gov.in/?page=tX4nYCIE3HcuikT4bChTOw%3D%3D",
          },
          commerce: {
            title: t({ en: "Faculty of Commerce", hi: "वाणिज्य संकाय" }),
            link: "https://highereducation.mp.gov.in/?page=WEyOMJqICO7MqGL1DxfP%2BQ%3D%3D",
          },
          foundation: [
            {
              title: t({ en: "Hindi Language", hi: "हिन्दी भाषा" }),
              link: "https://highereducation.mp.gov.in/Uploaded Document/Foundation Course Hindi_0001.pdf",
            },
            {
              title: t({ en: "English Language", hi: "अंग्रेजी भाषा" }),
              link: "https://highereducation.mp.gov.in/Uploaded Document/Foundation Course English_0001.pdf",
            },
            {
              title: t({ en: "Startup & Entrepreneurship", hi: "स्टार्टअप एवं उद्यमिता" }),
              link: "https://highereducation.mp.gov.in/Uploaded Document/Entrepreneurship DEVELOPMENT_0001.pdf",
            },
            {
              title: t({ en: "Women Empowerment", hi: "महिला सशक्तिकरण" }),
              link: "https://highereducation.mp.gov.in/Uploaded Document New/admin_hecms/WomenEmpowerment_rotated.pdf",
            },
          ],
        },

        third_year: {
          science: {
            title: t({ en: "Faculty of Science", hi: "विज्ञान संकाय" }),
            link: "https://highereducation.mp.gov.in/?page=uhSOgOVysoYcCsXmG4o4pw%3D%3D",
          },
          arts: {
            title: t({ en: "Faculty of Arts", hi: "कला संकाय" }),
            link: "https://highereducation.mp.gov.in/?page=YXCc9lw%2BooGDWrHDEJik8w%3D%3D",
          },
          commerce: {
            title: t({ en: "Faculty of Commerce", hi: "वाणिज्य संकाय" }),
            link: "https://highereducation.mp.gov.in/?page=1PHEAF3kw4AChsH3quvqsQ%3D%3D",
          },
          foundation: [
            {
              title: t({ en: "Personality Development", hi: "व्यक्तित्व विकास एवं चरित्र निर्माण" }),
              link: "https://highereducation.mp.gov.in/Uploaded Document New/admin_hecms/09 June 2023 BA III Personality Development-1.pdf",
            },
            {
              title: t({ en: "Digital Awareness & Cyber Security", hi: "डिजिटल जागरूकता - साइबर सुरक्षा" }),
              link: "https://highereducation.mp.gov.in/Uploaded Document/FC DIG AW.pdf",
            },
          ],
        },
      },

      note: t({
        en: "All syllabus buttons lead to the official M.P. Higher Education Portal.",
        hi: "सभी पाठ्यक्रम लिंक आधिकारिक मध्यप्रदेश उच्च शिक्षा पोर्टल पर ले जाते हैं।",
      }),
    },

    feeStructure: {
      title: t({ en: "Fee Structure", hi: "शुल्क संरचना" }),
      rows: [
        { year: "UG - 1st Year", category: "General/OBC", fee: "₹2,450" },
        { year: "UG - 1st Year", category: "SC/ST/Girl", fee: "₹1,120" },
        { year: "UG - 2nd/3rd", category: "General/OBC", fee: "₹2,100" },
        { year: "UG - 2nd/3rd", category: "SC/ST/Girl", fee: "₹980" },
      ],
      buttonLabel: t({ en: "View Detailed Fee Structure", hi: "विस्तृत शुल्क संरचना देखें" }),
    },
    portalHeader: t({ en: "University Portals", hi: "विश्वविद्यालय पोर्टल" }),
    portals: [
      {
        title: t({ en: "Vikram Results", hi: "विक्रम परिणाम" }),
        subtitle: t({ en: "University Scorecards", hi: "विश्वविद्यालय स्कोरकार्ड" }),
        href: "#",
        icon: "MdSchool",
        accent: "primary",
      },
      {
        title: t({ en: "Scholarship 2.0", hi: "छात्रवृत्ति 2.0" }),
        subtitle: t({ en: "MP State Portal", hi: "मध्यप्रदेश राज्य पोर्टल" }),
        href: "#",
        icon: "MdAccountBalance",
        accent: "primary",
      },
      {
        title: t({ en: "E-Pravesh Portal", hi: "ई-प्रवेश पोर्टल" }),
        subtitle: t({ en: "Admission Portal", hi: "प्रवेश पोर्टल" }),
        href: "#",
        icon: "MdReceiptLong",
        accent: "primary",
      },
    ],

    help: {
      title: t({
        en: "Need help finding something?",
        hi: "क्या आपको कुछ खोजने में सहायता चाहिए?",
      }),
      description: t({
        en: "Our administrative office is open Mon–Sat, 9:00 AM to 5:00 PM for physical inquiries.",
        hi: "हमारा प्रशासनिक कार्यालय सोमवार–शनिवार, सुबह 9 बजे से शाम 5 बजे तक खुला रहता है।",
      }),
      emailLabel: t({ en: "Email Office", hi: "कार्यालय को ईमेल करें" }),
      callLabel: t({ en: "Call Desk", hi: "डेस्क पर कॉल करें" }),
    },
  },
} satisfies Dictionary;

export default studentResourcesSection;
