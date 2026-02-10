import { t, type Dictionary } from "intlayer";

const HeroSectionContent = {
    key: "heroSection",
    content: {
        quote: {
            head: t({
                en: "Arise! Awake!",
                hi: "उठो ! जागो !",
            }),
            subHead: t({
                en: "And stop not until the",
                hi: "और तब तक मत रुको जब तक",
            }),
            subHead2: t({
                en: "goal is reached.",
                hi: "लक्ष्य प्राप्त न हो जाए।",
            }),
            leader: t({
                en: "Swami Vivekananda",
                hi: "स्वामी विवेकानंद",
            }),
            button1: t({
                en: "Explore College",
                hi: "कॉलेज एक्सप्लोर करें",
            }),
            button2: t({
                en: "Learn More",
                hi: "और जानें",
            }),
        },
    },
} satisfies Dictionary;

export default HeroSectionContent;