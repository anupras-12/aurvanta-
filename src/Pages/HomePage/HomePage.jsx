import React from 'react'
import HeroSection from './Components/HeroSection'
import AboutUs from './Components/AboutUs'
import Services from './Components/Services'
import SustainbilityResourcing from './Components/SustainbilityResourcing'
import Collections from './Components/Collections'
import ContactUs from './Components/ContactUs'
import Testimonials from './Components/Testimonials'
import CompaniesTrust from './CompaniesTrust'

const HomePage = () => {
  return (
   <>
   <HeroSection/>
   <AboutUs/>
   <Services/>
   <SustainbilityResourcing/>
   <CompaniesTrust/>
   <Collections/>
   <Testimonials/>
   <ContactUs/>
   </>
  )
}

export default HomePage