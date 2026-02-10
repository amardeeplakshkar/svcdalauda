import { t, type Dictionary } from "intlayer";

const Content = {
    key: "courseSection",
    content: {
        title: t({ en: "Departments & Courses", hi: "विभाग और पाठ्यक्रम" }),
        subTitle: t({ en: "Explore our diverse academic facilities for an enriched learning experience.", hi: "एक समृद्ध शिक्षण अनुभव के लिए हमारे विविध शैक्षणिक सुविधाओं का अन्वेषण करें।" }),
        viewAllCourses: t({ en: "VIEW ALL COURSES", hi: "सभी पाठ्यक्रम देखें" }),
        departmentOfScience: t({ en: "Department of Science", hi: "विज्ञान विभाग" }),
        departmentOfScienceTagline: t({ en: "Explore the mysteries of the universe through our rigorous programs in Physics, Chemistry, Mathematics, and Biological Sciences.", hi: "भौतिकी, रसायन विज्ञान, गणित और जैविक विज्ञान में हमारे कठोर कार्यक्रमों के माध्यम से ब्रह्मांड के रहस्यों का अन्वेषण करें।" }),
        departmentOfArts: t({ en: "Department of Arts", hi: "कला विभाग" }),
        departmentOfArtsTagline: t({ en: "Dive deep into human culture, history, and languages. Our Arts department fosters critical thinking and creative expression.", hi: "मानव संस्कृति, इतिहास और भाषाओं में गहराई से डुबकी लगाएं। हमारा कला विभाग आलोचनात्मक सोच और रचनात्मक अभिव्यक्ति को बढ़ावा देता है।" }),
        departmentOfCommerce: t({ en: "Department of Commerce", hi: "वाणिज्य विभाग" }),
        departmentOfCommerceTagline: t({ en: "Master the art of business and finance with our comprehensive courses in Accounting, Economics, Business Administration, and Commerce.", hi: "लेखांकन, अर्थशास्त्र, व्यवसाय प्रशासन और वाणिज्य में हमारे व्यापक पाठ्यक्रमों के साथ व्यापार और वित्त की कला में महारत हासिल करें।" }),
    }
} satisfies Dictionary;

export default Content;