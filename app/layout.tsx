import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppWrapper from "@/components/provider/AppWrapper";
import { Analytics } from '@vercel/analytics/next';

import { IntlayerClientProvider, LocalPromiseParams } from "next-intlayer";
import { getHTMLTextDir, getIntlayer } from "intlayer";
import { getLocale } from "next-intlayer/server";
export { generateStaticParams } from "next-intlayer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Swami Vivekananda Govt College Dalauda | SVGC Dalauda | Official Website",

  description:
    "Official website of Swami Vivekananda Government College Dalauda (SVGC Dalauda), Madhya Pradesh. Explore NEP 2020 syllabus, admissions, results, scholarships, academic programs, campus facilities, and student resources.",

  icons: {
    icon: "/assets/logo.jpg",
    shortcut: "/assets/logo.jpg",
    apple: "/assets/logo.jpg"
  },
  keywords: [
    "svgcdalauda",
    "svcdalauda",
    "swami vivekananda govt college dalauda",
    "swami vivekanand college dalauda",
    "govt college dalauda",
    "dalauda govt college",
    "dalauda college",
    "daloda govt college",
    "dalodagovtcollege",
    "swami vivekananda college daloda",
    "government college dalauda madhya pradesh",
    "dalauda college mp",
    "mandsaur govt college",
    "nep 2020 syllabus dalauda college"
  ],

  alternates: {
    canonical: "https://www.svgcdalauda.in/",
  },

  openGraph: {
    title:
      "Swami Vivekananda Govt College Dalauda | SVGC Dalauda",
    description:
      "Swami Vivekananda Government College Dalauda is a premier government college in Madhya Pradesh offering quality education, NEP 2020 curriculum, and student-focused academic programs.",
    type: "website",
    url: "https://www.svgcdalauda.in/",
    siteName: "SVGC Dalauda",
  },

  robots: "index, follow"
};


const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const locale = await getLocale();

  return (
    <html lang={locale} dir={getHTMLTextDir(locale)} suppressHydrationWarning>
      <IntlayerClientProvider defaultLocale={locale}>
        <body>
          <AppWrapper>
            {children}
          </AppWrapper>
          <Analytics />
        </body>
      </IntlayerClientProvider>
    </html>
  );
};

export default RootLayout;