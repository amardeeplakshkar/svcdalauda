import { t, type Dictionary } from "intlayer";

const FacultyPageContent = {
  key: "facultyPage",
  content: {
    badge: t({
      en: "Our Educators",
      hi: "हमारे शिक्षक",
    }),
    title: t({
      en: "Faculty Directory",
      hi: "संकाय निर्देशिका",
    }),
    description: t({
      en: "Guided by the vision of Swami Vivekananda, our distinguished faculty members are dedicated to academic excellence and character building.",
      hi: "स्वामी विवेकानंद की दृष्टि से प्रेरित, हमारे विशिष्ट संकाय सदस्य शैक्षणिक उत्कृष्टता और चरित्र निर्माण के लिए समर्पित हैं।",
    }),
    search: {
      placeholder: t({
        en: "Search faculty or department...",
        hi: "संकाय या विभाग खोजें...",
      }),
    },
    filter: {
      allDepartments: t({
        en: "All Departments",
        hi: "सभी विभाग",
      }),
    },
    empty: t({
      en: "No faculty members found matching your criteria.",
      hi: "आपके मानदंड से मेल खाने वाले कोई संकाय सदस्य नहीं मिले।",
    }),
  },
} satisfies Dictionary;

export default FacultyPageContent;