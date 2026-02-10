import { t, type Dictionary } from "intlayer";

const aboutInstitutionSection = {
  key: "aboutInstitutionSection",
  content: {
    history: {
      title: t({
        en: "History & Heritage",
        hi: "इतिहास एवं विरासत",
      }),
      paragraphs: [
        t({
          en: "Founded in the rural heartland of Dalauda, Swami Vivekananda Govt College was established with a singular vision: to democratize high-quality education for the youth who represent India's future.",
          hi: "दलौदा के ग्रामीण हृदयस्थल में स्थापित, स्वामी विवेकानंद शासकीय महाविद्यालय की स्थापना एक स्पष्ट उद्देश्य के साथ की गई—भारत के भविष्य का प्रतिनिधित्व करने वाले युवाओं के लिए उच्च गुणवत्ता वाली शिक्षा को सुलभ बनाना।",
        }),
        t({
          en: "For nearly four decades, our institution has stood as a testament to the ideals of Swami Vivekananda. What began as a modest building with a handful of visionary teachers has evolved into a premier regional hub for intellectual and character development.",
          hi: "लगभग चार दशकों से, हमारा संस्थान स्वामी विवेकानंद के आदर्शों का सजीव प्रमाण रहा है। कुछ दूरदर्शी शिक्षकों और एक साधारण भवन से शुरू होकर यह आज बौद्धिक और चरित्र विकास का प्रमुख क्षेत्रीय केंद्र बन चुका है।",
        }),
        t({
          en: "Our heritage is not just in our brick and mortar, but in the thousands of alumni who lead with integrity across the globe, carrying forward the flame of knowledge kindled here.",
          hi: "हमारी विरासत केवल इमारतों में नहीं, बल्कि उन हजारों पूर्व छात्रों में है जो विश्वभर में सत्यनिष्ठा के साथ नेतृत्व कर रहे हैं और यहाँ प्रज्वलित ज्ञान की ज्योति को आगे बढ़ा रहे हैं।",
        }),
      ],
      imageAlt: t({
        en: "Historical Campus View",
        hi: "ऐतिहासिक परिसर दृश्य",
      }),
      imageCaption: t({
        en: "Vintage photograph of the college founding ceremony",
        hi: "महाविद्यालय के स्थापना समारोह की ऐतिहासिक तस्वीर",
      }),
    },

    guidingLight: {
      title: t({
        en: "Our Guiding Light",
        hi: "हमारा मार्गदर्शक प्रकाश",
      }),
      mission: {
        title: t({ en: "Our Mission", hi: "हमारा मिशन" }),
        description: t({
          en: "To provide holistic education that balances academic excellence with character building, ensuring our students are not just employable, but enlightened citizens capable of societal transformation.",
          hi: "शैक्षणिक उत्कृष्टता और चरित्र निर्माण के संतुलन के साथ समग्र शिक्षा प्रदान करना, ताकि हमारे छात्र केवल रोजगार योग्य ही नहीं, बल्कि समाज परिवर्तन में सक्षम जागरूक नागरिक बनें।",
        }),
      },
      vision: {
        title: t({ en: "Our Vision", hi: "हमारी दृष्टि" }),
        description: t({
          en: "To emerge as a national center of excellence for higher education in the rural sector, fostering innovation, inclusivity, and the timeless values of Swami Vivekananda in every scholar.",
          hi: "ग्रामीण क्षेत्र में उच्च शिक्षा के लिए राष्ट्रीय उत्कृष्टता केंद्र के रूप में उभरना, प्रत्येक छात्र में नवाचार, समावेशन और स्वामी विवेकानंद के शाश्वत मूल्यों को विकसित करना।",
        }),
      },
    },

    leadership: {
      badge: t({ en: "Governance", hi: "प्रशासन" }),
      title: t({
        en: "Institutional Leadership",
        hi: "संस्थागत नेतृत्व",
      }),
      description: t({
        en: "Guided by a council of distinguished academicians and community leaders committed to the college's growth.",
        hi: "महाविद्यालय के विकास के लिए समर्पित प्रतिष्ठित शिक्षाविदों और सामुदायिक नेताओं द्वारा मार्गदर्शित।",
      }),
      members: [
        {
          name: "Dr. Rajesh Kumar",
          role: t({ en: "Principal", hi: "प्राचार्य" }),
          quote: t({
            en: "Education is the manifestation of the perfection already in man.",
            hi: "शिक्षा मनुष्य में पहले से विद्यमान पूर्णता की अभिव्यक्ति है।",
          }),
          imageAlt: t({ en: "Principal", hi: "प्राचार्य" }),
        },
        {
          name: "Prof. Sunita Sharma",
          role: t({ en: "Vice Principal", hi: "उप-प्राचार्य" }),
          quote: t({
            en: "Striving for excellence in every academic pursuit.",
            hi: "प्रत्येक शैक्षणिक प्रयास में उत्कृष्टता की ओर अग्रसर।",
          }),
          imageAlt: t({ en: "Vice Principal", hi: "उप-प्राचार्य" }),
        },
        {
          name: "Shri Alok Vardhan",
          role: t({ en: "Registrar", hi: "पंजीयक" }),
          imageAlt: t({ en: "Registrar", hi: "पंजीयक" }),
        },
        {
          name: "Dr. Meera Iyer",
          role: t({
            en: "Head of Governing Body",
            hi: "शासन निकाय प्रमुख",
          }),
          imageAlt: t({ en: "Governing Body Member", hi: "शासन निकाय सदस्य" }),
        },
      ],
    },

    values: {
      title: t({
        en: "Our Core Values",
        hi: "हमारे मूल मूल्य",
      }),
      subtitle: t({
        en: "The pillars upon which our institution is built and our students are molded.",
        hi: "वे स्तंभ जिन पर हमारा संस्थान और हमारे छात्र गढ़े जाते हैं।",
      }),
      items: [
        {
          key: "integrity",
          title: t({ en: "Integrity", hi: "निष्ठा" }),
          description: t({
            en: "Upholding the highest moral and ethical standards in every action and academic endeavor.",
            hi: "प्रत्येक कार्य और शैक्षणिक प्रयास में सर्वोच्च नैतिक मूल्यों का पालन।",
          }),
        },
        {
          key: "excellence",
          title: t({ en: "Excellence", hi: "उत्कृष्टता" }),
          description: t({
            en: "A relentless pursuit of quality in teaching, learning, and extracurricular participation.",
            hi: "शिक्षण, अध्ययन और सह-पाठ्यक्रम गतिविधियों में गुणवत्ता की निरंतर खोज।",
          }),
        },
        {
          key: "responsibility",
          title: t({
            en: "Social Responsibility",
            hi: "सामाजिक उत्तरदायित्व",
          }),
          description: t({
            en: "Committing to the betterment of our local community and the nation at large.",
            hi: "स्थानीय समुदाय और राष्ट्र के समग्र कल्याण के लिए प्रतिबद्धता।",
          }),
        },
        {
          key: "innovation",
          title: t({ en: "Innovation", hi: "नवाचार" }),
          description: t({
            en: "Encouraging fresh perspectives and creative solutions to modern-day challenges.",
            hi: "आधुनिक चुनौतियों के लिए नए दृष्टिकोण और रचनात्मक समाधान को प्रोत्साहन।",
          }),
        },
        {
          key: "inclusivity",
          title: t({ en: "Inclusivity", hi: "समावेशन" }),
          description: t({
            en: "Fostering an environment where every individual feels valued, regardless of background.",
            hi: "ऐसा वातावरण बनाना जहाँ प्रत्येक व्यक्ति को, उसकी पृष्ठभूमि की परवाह किए बिना, महत्व मिले।",
          }),
        },
        {
          key: "tradition",
          title: t({ en: "Tradition", hi: "परंपरा" }),
          description: t({
            en: "Respecting our cultural roots while embracing the progress of the modern world.",
            hi: "आधुनिक प्रगति को अपनाते हुए अपनी सांस्कृतिक जड़ों का सम्मान।",
          }),
        },
      ],
    },
  },
} satisfies Dictionary;

export default aboutInstitutionSection;
