import { Locales, type IntlayerConfig } from "intlayer";

const config: IntlayerConfig = {
  internationalization: {
    locales: [
      Locales.ENGLISH,
      Locales.HINDI
    ],
    defaultLocale: Locales.ENGLISH,
  },
  routing: {
    mode: "search-params", 
  },
};

export default config;