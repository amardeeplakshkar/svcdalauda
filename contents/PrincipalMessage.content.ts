import { t, type Dictionary } from "intlayer";

const Content = {
    key: "principleMessage",
    content:{
        name: t({ en: "Principal Name", hi: "प्रधानाचार्य का नाम" }),
        designation: t({ en: "Principal, SVGC Dalauda", hi: "प्रधानाचार्य, स्वामी विवेकानंद सरकारी कॉलेज दालौदा" }),
        title: t({ en: "Principal's Message", hi: "प्रधानाचार्य का संदेश" }),
        quote: t({ en: "Education is the manifestation of the perfection already in manifestationan.", hi: "शिक्षा मनुष्य में पहले से ही विद्यमान पूर्णता का प्रकटीकरण है।" }),
        quoteAuthor: t({ en: "— Swami Vivekananda", hi: "— स्वामी विवेकानंद" }),
        message: t({ en: "It is my distinct honor to welcome you to Swami Vivekananda Govt College, Dalauda. Our institution stands as a beacon of academic excellence and character building, deeply rooted in the philosophy of the great sage Swami Vivekananda.\n\nWe believe that education is not merely the collection of facts but the training of the mind to think. At our college, we strive to create an environment where students can flourish intellectually, morally, and physically. Our dedicated faculty ensures that while students excel in their academic pursuits, they also grow into responsible citizens of this great nation.", hi: "स्वामी विवेकानंद सरकारी कॉलेज, दालौदा में आपका स्वागत करते हुए मुझे अत्यंत सम्मान की अनुभूति हो रही है। हमारा संस्थान शैक्षणिक उत्कृष्टता और चरित्र निर्माण का एक प्रकाशस्तंभ है, जो महान संत स्वामी विवेकानंद के दर्शन में गहराई से निहित है।\n\nहम मानते हैं कि शिक्षा केवल तथ्यों का संग्रह नहीं है बल्कि सोचने के लिए मन का प्रशिक्षण है। हमारे कॉलेज में, हम एक ऐसा वातावरण बनाने का प्रयास करते हैं जहां छात्र बौद्धिक, नैतिक और शारीरिक रूप से फल-फूल सकें। हमारे समर्पित संकाय यह सुनिश्चित करते हैं कि जबकि छात्र अपनी शैक्षणिक गतिविधियों में उत्कृष्टता प्राप्त करते हैं, वे इस महान राष्ट्र के जिम्मेदार नागरिक भी बनते हैं।" }),
        signature: t({ en: "Principal Signature", hi: "प्रधानाचार्य का हस्ताक्षर" }),
        button1: t({ en: "View Faculty", hi: "संकाय देखें" }),
        button2: t({ en: "Contact Office", hi: "कार्यालय से संपर्क करें" }),

    }
} satisfies Dictionary;

export default Content;