import { t, type Dictionary } from "intlayer";

const CoursesPageContent = {
  key: "coursesPage",
  content: {
    title: t({ en: "Regular Courses", hi: "नियमित पाठ्यक्रम" }),
    headers: {
      courseName: t({ en: "Course Name", hi: "पाठ्यक्रम का नाम" }),
      minQual: t({ en: "Minimum Qualification", hi: "न्यूनतम योग्यता" }),
      seats: t({ en: "Seats", hi: "सीटें" }),
      sno: t({ en: "S.No.", hi: "क्र.सं." }),
      faculty: t({ en: "Faculty", hi: "संकाय" }),
      department: t({ en: "Department", hi: "विभाग" }),
      students: t({ en: "Number of Students", hi: "छात्रों की संख्या" }),
      total: t({ en: "Total", hi: "कुल" })
    },
    pg: {
      title: t({ en: "PG Programme", hi: "स्नातकोत्तर कार्यक्रम" }),
      empty: t({ en: "No PG Courses Available", hi: "कोई पीजी पाठ्यक्रम उपलब्ध नहीं" })
    },
    ug: {
      title: t({ en: "UG Programme", hi: "स्नातक कार्यक्रम" }),
      courses: [
        {
          name: t({ en: "B.A. (Plain)", hi: "बी.ए. (सामान्य)" }),
          qual: t({ en: "12th Pass", hi: "12वीं पास" }),
          seats: "-"
        },
        {
          name: t({ en: "B.Sc. (Botany - Chemistry - Zoology)", hi: "बी.एससी. (वनस्पति विज्ञान - रसायन विज्ञान - प्राणीशास्त्र)" }),
          qual: t({ en: "12th Science (Biology)", hi: "12वीं विज्ञान (जीव विज्ञान)" }),
          seats: "-"
        },
        {
          name: t({ en: "B.Sc. (Chemistry - Mathematics - Physics)", hi: "बी.एससी. (रसायन विज्ञान - गणित - भौतिकी)" }),
          qual: t({ en: "12th Science (Maths)", hi: "12वीं विज्ञान (गणित)" }),
          seats: "-"
        },
        {
          name: t({ en: "B.Sc. (Computer Science - Mathematics - Physics)", hi: "बी.एससी. (कंप्यूटर विज्ञान - गणित - भौतिकी)" }),
          qual: t({ en: "12th Science (Maths)", hi: "12वीं विज्ञान (गणित)" }),
          seats: "-"
        },
        {
          name: t({ en: "B.Com (Commerce)", hi: "बी.कॉम (वाणिज्य)" }),
          qual: t({ en: "12th Pass (Commerce/Any Stream)", hi: "12वीं पास (वाणिज्य/कोई भी संकाय)" }),
          seats: "-"
        }
      ]
    },
    diploma: {
      title: t({ en: "Diploma Programme", hi: "डिप्लोमा कार्यक्रम" }),
      empty: t({ en: "No Diploma Courses Available", hi: "कोई डिप्लोमा पाठ्यक्रम उपलब्ध नहीं" })
    },
    departments: {
      title: t({ en: "Departments & Student Intake", hi: "विभाग और छात्र संख्या" }),
      arts: {
        name: t({ en: "Arts", hi: "कला" }),
        items: [
          { name: t({ en: "Hindi", hi: "हिंदी" }), count: "70" },
          { name: t({ en: "English", hi: "अंग्रेजी" }), count: "18" },
          { name: t({ en: "Political Science", hi: "राजनीति विज्ञान" }), count: "85" },
          { name: t({ en: "Sociology", hi: "समाजशास्त्र" }), count: "85" },
          { name: t({ en: "Geography", hi: "भूगोल" }), count: "34" },
          { name: t({ en: "History", hi: "इतिहास" }), count: "128" },
          { name: t({ en: "Economics", hi: "अर्थशास्त्र" }), count: "60" }
        ],
        total: "480"
      },
      commerce: {
        name: t({ en: "Commerce", hi: "वाणिज्य" }),
        items: [
          { name: t({ en: "Commerce", hi: "वाणिज्य" }), count: "140" }
        ],
        total: "140"
      },
      science: {
        name: t({ en: "Science", hi: "विज्ञान" }),
        items: [
          { faculty: t({ en: "Science (Biology)", hi: "विज्ञान (जीव विज्ञान)" }), name: t({ en: "Botany", hi: "वनस्पति विज्ञान" }), count: "90" },
          { faculty: t({ en: "Science (Biology)", hi: "विज्ञान (जीव विज्ञान)" }), name: t({ en: "Zoology", hi: "प्राणीशास्त्र" }), count: "90" },
          { faculty: t({ en: "Science (Mathematics+Biology)", hi: "विज्ञान (गणित+जीव विज्ञान)" }), name: t({ en: "Chemistry", hi: "रसायन विज्ञान" }), count: "90" },
          { faculty: t({ en: "Science (Mathematics)", hi: "विज्ञान (गणित)" }), name: t({ en: "Physics", hi: "भौतिकी" }), count: "30" },
          { faculty: t({ en: "Science (Mathematics)", hi: "विज्ञान (गणित)" }), name: t({ en: "Mathematics", hi: "गणित" }), count: "30" },
          { faculty: t({ en: "Science (Computer Science)", hi: "विज्ञान (कंप्यूटर विज्ञान)" }), name: t({ en: "Computer Science", hi: "कंप्यूटर विज्ञान" }), count: "30" }
        ],
        total: "360"
      }
    }
  }
} satisfies Dictionary;

export default CoursesPageContent;
