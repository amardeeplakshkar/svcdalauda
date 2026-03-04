import { t, type Dictionary } from "intlayer";

const FooterContent = {
  key: "footer",
  content: {
    college: {
      name: t({
        en: "Swami Vivekananda Govt College",
        hi: "स्वामी विवेकानंद शासकीय महाविद्यालय",
      }),
      location: t({
        en: "Dalauda, Mandsaur (M.P.)",
        hi: "दलौदा, मंदसौर (म.प्र.)",
      }),
      quote: t({
        en: "Arise, awake, and stop not till the goal is reached.",
        hi: "उठो, जागो और तब तक मत रुको जब तक लक्ष्य प्राप्त न हो जाए।",
      }),
      author: t({
        en: "Swami Vivekananda",
        hi: "स्वामी विवेकानंद",
      }),
    },

    sections: {
      academics: {
        title: t({ en: "Academics", hi: "शिक्षा" }),
        links: {
          departments: t({ en: "Academic Departments", hi: "शैक्षणिक विभाग" }),
          library: t({ en: "Central Library", hi: "केंद्रीय पुस्तकालय" }),
          research: t({ en: "Research & Innovation", hi: "अनुसंधान एवं नवाचार" }),
          faculty: t({ en: "Faculty Profiles", hi: "संकाय प्रोफ़ाइल" }),
          skill: t({ en: "Skill Development", hi: "कौशल विकास" }),
        },
      },
      admissions: {
        title: t({ en: "Admissions", hi: "प्रवेश" }),
        links: {
          applyNow: t({ en: "Apply Now", hi: "अभी आवेदन करें" }),
          feeStructure: t({ en: "Fee Structure", hi: "शुल्क संरचना" }),
          scholarship: t({ en: "Scholarship Programs", hi: "छात्रवृत्ति कार्यक्रम" }),
          prospectus: t({ en: "Admission Prospectus", hi: "प्रवेश विवरणिका" }),
          rules: t({ en: "Rules & Regulations", hi: "नियम एवं विनियम" }),
        },
      },
      campusLife: {
        title: t({ en: "Campus Life", hi: "परिसर जीवन" }),
        links: {
          hostel: t({ en: "Hostel Facilities", hi: "छात्रावास सुविधाएं" }),
          sports: t({ en: "Sports & Fitness", hi: "खेल एवं स्वास्थ्य" }),
          nssNcc: t({ en: "NSS & NCC Units", hi: "एनएसएस एवं एनसीसी इकाइयां" }),
          cultural: t({ en: "Cultural Activities", hi: "सांस्कृतिक गतिविधियां" }),
          alumni: t({ en: "Alumni Network", hi: "पूर्व छात्र नेटवर्क" }),
        },
      },
    },

    contact: {
      title: t({ en: "Get in Touch", hi: "संपर्क करें" }),
      address: t({
        en: "Dalauda, Mandsaur District,\nMadhya Pradesh - 458667",
        hi: "दलौदा, मंदसौर जिला,\nमध्य प्रदेश - 458667",
      }),
      phone: t({ en: "+91 0000 000000", hi: "+91 0000 000000" }),
      email: t({ en: "info@svgcdalauda.ac.in", hi: "info@svgcdalauda.ac.in" }),
    },

    copyright: t({
      en: "Swami Vivekananda Govt College Dalauda",
      hi: "स्वामी विवेकानंद शासकीय महाविद्यालय दलौदा",
    }),
  },
} satisfies Dictionary;

export default FooterContent;