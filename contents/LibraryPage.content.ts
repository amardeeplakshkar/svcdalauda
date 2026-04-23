import { t, type Dictionary } from "intlayer";

const LibraryPageContent = {
  key: "libraryPage",
  content: {
    title: t({ en: "College Library", hi: "महाविद्यालय पुस्तकालय" }),
    hubTitle: t({ en: "A Hub of Knowledge", hi: "ज्ञान का केंद्र" }),
    hubDesc: t({ 
      en: "Our library is dedicated to providing students with the resources they need to excel academically. We offer a growing collection of literature and references tailored to our student body.", 
      hi: "हमारा पुस्तकालय छात्रों को उनके शैक्षणिक विकास के लिए आवश्यक संसाधन प्रदान करने के लिए समर्पित है। हम अपने छात्रों के लिए साहित्य और संदर्भों का एक बढ़ता हुआ संग्रह प्रदान करते हैं।" 
    }),
    policyTitle: t({ en: "Library Policy", hi: "पुस्तकालय नीति" }),
    policyDesc: t({ 
      en: "SC/ST books are provided by the MP Govt. specifically for SC/ST students, while donated books are available for General/OBC students.", 
      hi: "मध्य प्रदेश सरकार द्वारा एससी/एसटी छात्रों के लिए विशेष रूप से एससी/एसटी पुस्तकें प्रदान की जाती हैं, जबकि सामान्य/ओबीसी छात्रों के लिए दान की गई पुस्तकें उपलब्ध हैं।" 
    }),
    stats: {
      books: t({ en: "Total Available Books", hi: "कुल उपलब्ध पुस्तकें" }),
      journals: t({ en: "Available Journals", hi: "उपलब्ध पत्रिकाएँ" }),
      newspapers: t({ en: "Newspapers / Magazines", hi: "समाचार पत्र / पत्रिकाएँ" }),
      computers: t({ en: "Total Computers", hi: "कुल कंप्यूटर" }),
    },
    librarian: {
      title: t({ en: "Librarian Details", hi: "लाइब्रेरियन विवरण" }),
      nameLabel: t({ en: "Name", hi: "नाम" }),
      name: t({ en: "Dr. Deepti Shrivastav", hi: "डॉ. दीप्ति श्रीवास्तव" }),
      emailLabel: t({ en: "Email", hi: "ईमेल" }),
      contactLabel: t({ en: "Contact No.", hi: "संपर्क नंबर" }),
    }
  }
} satisfies Dictionary;

export default LibraryPageContent;
