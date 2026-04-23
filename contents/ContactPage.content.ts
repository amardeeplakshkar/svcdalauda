import { t, type Dictionary } from "intlayer";

const ContactPageContent = {
  key: "contactPage",
  content: {
    header: {
      title: t({
        en: "Contact Us",
        hi: "संपर्क करें",
      }),
    },

    form: {
      title: t({
        en: "Send us a Message",
        hi: "हमें संदेश भेजें",
      }),
      description: t({
        en: "Have a question or feedback? Fill out the form below and our administrative team will get back to you shortly.",
        hi: "कोई प्रश्न या सुझाव है? नीचे दिया गया फॉर्म भरें और हमारी प्रशासनिक टीम जल्द ही आपसे संपर्क करेगी।",
      }),
      fields: {
        fullName: {
          label: t({
            en: "Full Name",
            hi: "पूरा नाम",
          }),
          placeholder: t({
            en: "John Doe",
            hi: "राम कुमार",
          }),
        },
        email: {
          label: t({
            en: "Email Address",
            hi: "ईमेल पता",
          }),
          placeholder: t({
            en: "john@example.com",
            hi: "ram@example.com",
          }),
        },
        subject: {
          label: t({
            en: "Subject",
            hi: "विषय",
          }),
          options: {
            generalInquiry: t({
              en: "General Inquiry",
              hi: "सामान्य पूछताछ",
            }),
            admissions: t({
              en: "Admissions",
              hi: "प्रवेश",
            }),
            academicCalendar: t({
              en: "Academic Calendar",
              hi: "शैक्षणिक कैलेंडर",
            }),
            departmentDetails: t({
              en: "Department Details",
              hi: "विभाग विवरण",
            }),
            other: t({
              en: "Other",
              hi: "अन्य",
            }),
          },
        },
        message: {
          label: t({
            en: "Your Message",
            hi: "आपका संदेश",
          }),
          placeholder: t({
            en: "How can we help you?",
            hi: "हम आपकी कैसे सहायता कर सकते हैं?",
          }),
        },
      },
      submitButton: t({
        en: "Send Message",
        hi: "संदेश भेजें",
      }),
    },

    contactDetails: {
      title: t({
        en: "Contact Details",
        hi: "संपर्क विवरण",
      }),
      address: {
        label: t({
          en: "Address",
          hi: "पता",
        }),
        value: t({
          en: "Swami Vivekananda Govt College,\nMhow-Neemuch Road, Dalauda,\nDist- Mandsaur, Madhya Pradesh - 458667",
          hi: "स्वामी विवेकानंद शासकीय महाविद्यालय,\nमहू-नीमच रोड, दलौदा,\nजिला- मंदसौर, मध्य प्रदेश - 458667",
        }),
      },
      phone: {
        label: t({
          en: "Phone",
          hi: "फ़ोन",
        }),
        value: t({
          en: "+91 7422 123456\n+91 7422 654321",
          hi: "+91 7422 123456\n+91 7422 654321",
        }),
      },
      email: {
        label: t({
          en: "Email",
          hi: "ईमेल",
        }),
        value: t({
          en: "info@svgcdalauda.in\nprincipal@svgcdalauda.in",
          hi: "info@svgcdalauda.in\nprincipal@svgcdalauda.in",
        }),
      },
      officeHours: {
        label: t({
          en: "Office Hours",
          hi: "कार्यालय समय",
        }),
        value: t({
          en: "Monday - Saturday\n10:00 AM - 05:00 PM",
          hi: "सोमवार - शनिवार\nसुबह 10:00 - शाम 05:00",
        }),
      },
    },

    map: {
      title: t({
        en: "College Location Map",
        hi: "महाविद्यालय स्थान मानचित्र",
      }),
    },
  },
} satisfies Dictionary;

export default ContactPageContent;