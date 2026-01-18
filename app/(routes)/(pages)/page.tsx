
import CampusFacilities from '@/components/core/CampusFacilities'
import Container from '@/components/core/Container'
import CourseSection from '@/components/core/CourseSection'
import Gallary from '@/components/core/Gallary'
import HeroSection from '@/components/core/HeroSection'
import Notices from '@/components/core/Notices'
import { PrincipalMessage02 } from '@/components/core/PrincipalMessage'
import QuickLinks from '@/components/core/QuickLinks'

const App = () => {
  return (
    <div className='bg-accent/30'>
      <HeroSection/>
      <QuickLinks/>
      <Container className='p-2'>
      <PrincipalMessage02/>
      </Container>
      <Notices/>
      <CourseSection/>
      <Container className='p-2'>
      <CampusFacilities/>
      </Container>
      <Gallary/>
    </div>
  )
}

export default App