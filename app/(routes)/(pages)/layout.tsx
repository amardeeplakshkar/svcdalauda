import { Navbar } from '@/components/blocks/Navbar'
import Footer from '@/components/core/Footer'
import { getLocale } from 'next-intlayer/server'
import { IntlayerServerProvider } from 'next-intlayer/server'
import React from 'react'

const LandingLayout = async ({ children }: { children: React.ReactNode }) => {
  const locale = await getLocale();

  return (
    <IntlayerServerProvider locale={locale}>
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    </IntlayerServerProvider>
  );
};

export default LandingLayout;