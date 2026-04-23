import { t, type Dictionary } from "intlayer";

const ScholarshipPageContent = {
  key: "scholarshipPage",
  content: {
    title: t({ en: "Scholarships", hi: "छात्रवृत्ति" }),
    intro: t({ 
      en: "Regular students can take benefit of various types of scholarships according to their eligibility and criteria. The following scholarship schemes are available for students:", 
      hi: "नियमित छात्र अपनी पात्रता और मानदंडों के अनुसार विभिन्न प्रकार की छात्रवृत्ति का लाभ उठा सकते हैं। छात्रों के लिए निम्नलिखित छात्रवृत्ति योजनाएं उपलब्ध हैं:" 
    }),
    schemes: [
      {
        title: t({ en: "Post Matric Scholarship for OBC / ST / SC Students", hi: "ओबीसी / एसटी / एससी छात्रों के लिए पोस्ट मैट्रिक छात्रवृत्ति" }),
        desc: t({ en: "Financial assistance provided by the Government for students belonging to reserved categories.", hi: "आरक्षित श्रेणियों से संबंधित छात्रों के लिए सरकार द्वारा प्रदान की जाने वाली वित्तीय सहायता।" })
      },
      {
        title: t({ en: "Post Matric Scholarship for Minority Students", hi: "अल्पसंख्यक छात्रों के लिए पोस्ट मैट्रिक छात्रवृत्ति" }),
        desc: t({ en: "Scholarship provided to minority category students for higher education.", hi: "उच्च शिक्षा के लिए अल्पसंख्यक श्रेणी के छात्रों को प्रदान की जाने वाली छात्रवृत्ति।" })
      },
      {
        title: t({ en: "Gaon Ki Beti Incentive Scheme for Girls", hi: "गाँव की बेटी प्रोत्साहन योजना" }),
        desc: t({ en: "Special incentive scheme for meritorious rural girl students.", hi: "मेधावी ग्रामीण छात्राओं के लिए विशेष प्रोत्साहन योजना।" })
      },
      {
        title: t({ en: "Pratibha Kiran Incentive Scheme for Girls", hi: "प्रतिभा किरण प्रोत्साहन योजना" }),
        desc: t({ en: "Scholarship for talented girl students from urban areas.", hi: "शहरी क्षेत्रों की प्रतिभाशाली छात्राओं के लिए छात्रवृत्ति।" })
      },
      {
        title: t({ en: "Aawas Sahayata Scheme for ST & SC Students", hi: "एसटी और एससी छात्रों के लिए आवास सहायता योजना" }),
        desc: t({ en: "Housing financial assistance for SC and ST students.", hi: "एससी और एसटी छात्रों के लिए आवास वित्तीय सहायता।" })
      }
    ],
    reference: {
      title: t({ en: "Looking for more?", hi: "और खोज रहे हैं?" }),
      desc: t({ en: "Discover additional schemes, study materials, and syllabus details in our Student Resources section.", hi: "हमारे छात्र संसाधन अनुभाग में अतिरिक्त योजनाएं, अध्ययन सामग्री और पाठ्यक्रम विवरण खोजें।" }),
      button: t({ en: "Go to Resources", hi: "संसाधनों पर जाएं" })
    }
  }
} satisfies Dictionary;

export default ScholarshipPageContent;
