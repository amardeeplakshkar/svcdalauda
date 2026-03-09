import { t, type Dictionary } from "intlayer";

const gallerySection = {
  key: "galleryPage",
  content: {
    title: t({
      en: "Our Gallery",
      hi: "हमारी गैलरी",
    }),

    subtitle: t({
      en: "Moments that define our journey — celebrations, achievements, and everyday campus life.",
      hi: "हमारी यात्रा को परिभाषित करने वाले क्षण - उत्सव, उपलब्धियां और रोज़मर्रा की कैंपस जीवन।",
    }),
  },
} satisfies Dictionary;

export default gallerySection;
