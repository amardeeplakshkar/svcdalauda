import { t, type Dictionary } from "intlayer";

const QuickLinksContent = {
    key: "quickLinks",
    content: {
        departments: t({ en: "Resources", hi: "संसाधन" }),
        calendar: t({ en: "About Us", hi: "हमारे बारें में" }),
        notices: t({ en: "Notices", hi: "सूचनाएं" }),
        contactUs: t({ en: "Contact Us", hi: "संपर्क करें" }),
    },
} satisfies Dictionary;

export default QuickLinksContent;