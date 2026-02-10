import { t, type Dictionary } from "intlayer";

const gallerySection = {
  key: "gallerySection",
  content: {
    title: t({
      en: "Moments at SVGC Dalauda",
      hi: "SVGC दलौदा के यादगार पल",
    }),

    subtitle: t({
      en: "Capturing the spirit of excellence, culture, and community within our hallowed halls.",
      hi: "हमारे प्रतिष्ठित परिसर में उत्कृष्टता, संस्कृति और समुदाय की भावना को संजोते हुए।",
    }),

    viewArchive: t({
      en: "View Full Archive",
      hi: "पूरा संग्रह देखें",
    }),

    tabs: {
      all: t({ en: "All Collections", hi: "सभी संग्रह" }),
      cultural: t({ en: "Cultural Events", hi: "सांस्कृतिक कार्यक्रम" }),
      sports: t({ en: "Sports Arena", hi: "खेल परिसर" }),
      campus: t({ en: "Campus Architecture", hi: "परिसर वास्तुकला" }),
      workshops: t({ en: "Workshops & Seminars", hi: "कार्यशालाएँ एवं सेमिनार" }),
    },

    items: [
      {
        category: "cultural",
        tag: t({ en: "Cultural", hi: "सांस्कृतिक" }),
        title: t({
          en: "Annual Folk Dance Festival",
          hi: "वार्षिक लोक नृत्य महोत्सव",
        }),
        description: t({
          en: "Celebrating our rich heritage through rhythmic movements and traditional attire.",
          hi: "तालबद्ध आंदोलनों और पारंपरिक परिधानों के माध्यम से हमारी समृद्ध विरासत का उत्सव।",
        }),
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCNTgreYZDlldZVKfylknmjOzUuqsTXhJmPTsCE6e7sDO-eCjGsHzRUzDxAPTBvV0lPRQBR1JXCYxWyDMAWDxhT71B6V-sdk6LxasKKgE3_C4HsrxJPVXl5Qbo3YVX3PqDKeZ-m6riwxIHw3oAluJooePINXMoqEOXYwwc2mH1ycvlltXVs_oYVR3FmK1-7Z6-ku0uStbK10qCd7RJlD1p9fi8aK-S4pHcFGcz_aYZMpmqJSI5ciXqf8y_e6I4E_BULqV_1BDV73so",
        aspect: "4/5",
      },

      {
        category: "campus",
        tag: t({ en: "Campus", hi: "परिसर" }),
        title: t({
          en: "Heritage Hall Architecture",
          hi: "हेरिटेज हॉल वास्तुकला",
        }),
        description: t({
          en: "The historic main building standing as a testament to our academic legacy.",
          hi: "हमारी शैक्षणिक विरासत का प्रतीक ऐतिहासिक मुख्य भवन।",
        }),
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDDSOlnxjUSCClJSGWOqMTrP_nBYBJseCKPmgnoMXvajdtA-sAkLqabzbGo05jn1d6wtdj34ob1VZy0bAHFfsBrGeS5GCNLLMSXxEDY9R-6NPYFWm3cCVc_TCuhgf1y8MJoSkRwjHn9qiOyJfJQeq5nZJFbqu6f2qvXuFXJ5Gm6ErcIMTdjSBH5788qeCq6eje2HJbRuNoW7w5-xRHMKUCSUj1PrHBQsdFXOvX-CX7HrDSBIsv2zIv_dQy6NlSc6pCh3877qcasRl8",
        aspect: "16/9",
        featured: true,
      },

      {
        category: "sports",
        tag: t({ en: "Sports", hi: "खेल" }),
        title: t({
          en: "Inter-College Cricket Finals",
          hi: "अंतर-महाविद्यालय क्रिकेट फाइनल",
        }),
        description: t({
          en: "Witnessing the victory of our collegiate team under the summer sun.",
          hi: "गर्मियों की धूप में हमारी टीम की शानदार जीत का साक्षी बनना।",
        }),
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDx_0MiS2pp9oDt_iBSvhw_ZzMz7M6M245hN4KwxpQu9G9Vm5dMm9BV8U8Cf4eOIhUxjRtu4Fqnr7L9XeVgf-VX8BqIofLf9wUg1b5wPoJ0OSACY22-LX7Vm8Y5CBoo5LEIGhoBsCo2xcyZXhul3_nuzqAZjnIHvvJBQOUwYFDl_0tJwxjDV6E0lnUXS1W8oJ4Ru-KzPpld_kqOGxhgohULWKZj9sEbYPu-_otwhLWbeiIu0J_BYBzFZEQEqHXAGgcM6qTlqjSxa4U",
        aspect: "1/1",
      },
    ],
  },
} satisfies Dictionary;

export default gallerySection;
