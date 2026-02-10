import { t, type Dictionary } from "intlayer";

const Content = {
    key: "campusFacilities",
    content: {
        title: t({ en: "Campus Facilities", hi: "कैंपस सुविधाएं" }),
        description: t({ en: "Modern and well-equipped facilities for an enriched learning experience.", hi: "एक समृद्ध शिक्षण अनुभव के लिए आधुनिक और अच्छी तरह से सुसज्जित सुविधाएं।" }),
        facilities: [
            {
                title: t({
                    en: "Library",
                    hi: "पुस्तकालय",
                }),
                description: t({
                    en: "A vast collection of books, journals, and digital resources for academic research.",
                    hi: "शैक्षणिक अनुसंधान के लिए पुस्तकों, पत्रिकाओं और डिजिटल संसाधनों का विशाल संग्रह।",
                }),
                isNew: true,
            },
            {
                title: t({
                    en: "Laboratories",
                    hi: "प्रयोगशालाएँ",
                }),
                description: t({
                    en: "State-of-the-art science and computer labs with modern equipment.",
                    hi: "आधुनिक उपकरणों के साथ अत्याधुनिक विज्ञान और कंप्यूटर प्रयोगशालाएँ।",
                }),
                isNew: false,
            },
            {
                title: t({
                    en: "Sports Ground",
                    hi: "खेल का मैदान",
                }),
                description: t({
                    en: "Spacious grounds for various sports activities and physical education.",
                    hi: "विभिन्न खेल गतिविधियों और शारीरिक शिक्षा के लिए विशाल मैदान।",
                }),
                isNew: false,
            },
            {
                title: t({
                    en: "Computer Lab",
                    hi: "कंप्यूटर लैब",
                }),
                description: t({
                    en: "Fully equipped computer lab with high-speed internet connectivity.",
                    hi: "उच्च गति इंटरनेट कनेक्टिविटी के साथ पूरी तरह सुसज्जित कंप्यूटर लैब।",
                }),
                isNew: false,
            },
        ],
        viewAllNotices : t({ en: "Know More", hi: "और जानें" })
    }
} satisfies Dictionary;

export default Content;