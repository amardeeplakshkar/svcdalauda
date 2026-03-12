import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppWrapper from "@/components/provider/AppWrapper";
import { Analytics } from '@vercel/analytics/next';

import { IntlayerClientProvider, LocalPromiseParams } from "next-intlayer";
import { getHTMLTextDir, getIntlayer } from "intlayer";
import { getLocale } from "next-intlayer/server";
import JsonLd from "@/components/core/JsonLd";
import { createMetadata, organizationJsonLd } from "@/lib/seo";
export { generateStaticParams } from "next-intlayer";

export const metadata = createMetadata()

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
            <JsonLd data={organizationJsonLd} />
            {children}
          </AppWrapper>
          <Analytics />
        </body>
      </IntlayerClientProvider>
    </html>
  );
};

export default RootLayout;