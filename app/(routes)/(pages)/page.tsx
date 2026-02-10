import { Metadata, NextPage } from 'next';

import CampusFacilities from '@/components/core/CampusFacilities'
import Container from '@/components/core/Container'
import CourseSection from '@/components/core/CourseSection'
import Gallary from '@/components/core/Gallary'
import HeroSection from '@/components/core/HeroSection'
import Notices from '@/components/core/Notices'
import { PrincipalMessage02 } from '@/components/core/PrincipalMessage'
import QuickLinks from '@/components/core/QuickLinks'
import StudentResources from '@/components/core/StudentResources';
import { getLocale, IntlayerServerProvider } from 'next-intlayer/server';

export const metadata: Metadata = {
  title: 'Swami Vivekananda Govt College, Dalauda',
  description: 'Welcome to Swami Vivekananda Govt College, Dalauda. A premier institution dedicated to excellence in education and character development. Discover our academic programs, facilities, and campus life.',
  keywords: 'college, education, dalauda, government college, academic programs',
  alternates: {
    canonical: 'https://www.svgcdalauda.in/',
  },
  openGraph: {
    title: 'Swami Vivekananda Govt College, Dalauda',
    description: 'Premier educational institution in Dalauda committed to excellence',
    type: 'website',
    url: 'https://www.svgcdalauda.in/',
  },
};

const App = () => {
  return (
    <div className='bg-accent/30'>
      <HeroSection />
      <QuickLinks />
      <Container className='p-2'>
        <PrincipalMessage02 />
      </Container>
      <Notices />
      <CourseSection />
      <Container className='p-2'>
        <CampusFacilities />
      </Container>
      <Gallary />
      <Container className='p-2'>
        <StudentResources />
      </Container>
    </div>
  )
}

const Page: NextPage = async () => {
  const locale = await getLocale();

  return (
    <IntlayerServerProvider locale={locale}>
      <App/>
    </IntlayerServerProvider>
  );
};

export default Page;