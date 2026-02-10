import { t, type Dictionary } from "intlayer";

const Content = {
    key: "notices",
    content:{
        title: t({ en: "Notices", hi: "सूचनाएं" }),
        noNotices: t({ en: "No notices available at the moment.", hi: "इस समय कोई सूचनाएं उपलब्ध नहीं हैं।" }),
        subTitle: t({ en: "Keeping you informed on your path to excellence.", hi: "आपकी उत्कृष्टता की राह पर आपको सूचित रखना।" }),
        recentUpdates: t({ en: "Recent Updates", hi: "हाल की अपडेट" }),
        status: t({ en: "Status", hi: "स्थिति" }),
        date: t({ en: "Date", hi: "तारीख" }),
        olderRecords: t({ en: "Looking for older records?", hi: "पुराने रिकॉर्ड देखें" }),
        viewNoticeArchive: t({ en: "View Notice Archive", hi: "सूचना अभिलेख देखें" }),
    }
} satisfies Dictionary;

export default Content;