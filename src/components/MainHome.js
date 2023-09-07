import React from 'react'
import HeroSection from './MainHome/HeroSection'
import Featured from './MainHome/FeaturedScholarships'
import Testimonials from './MainHome/Testimonials'
import CountryList from './Countries/CountriesList'

const MainHome = () => {
  return (
    <div>
      <HeroSection/> 
     
      <Featured/>
      <CountryList/>
      {/* <Testimonials/> */}
      
    
    </div>
  )
}

export default MainHome