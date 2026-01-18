import { Navbar } from '@/components/blocks/Navbar'
import Footer from '@/components/core/Footer'
import React from 'react'

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar/>
      {children}
      <Footer />
    </div>
  )
}

export default LandingLayout