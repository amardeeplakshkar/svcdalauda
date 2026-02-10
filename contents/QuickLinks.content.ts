import { t, type Dictionary } from "intlayer";

const QuickLinksContent = {
    key: "quickLinks",
    content: {
        departments: t({ en: "Departments", hi: "विभाग" }),
        calendar: t({ en: "Calendar", hi: "कैलेंडर" }),
        notices: t({ en: "Notices", hi: "सूचनाएं" }),
        contactUs: t({ en: "Contact Us", hi: "संपर्क करें" }),
    },
} satisfies Dictionary;

export default QuickLinksContent;