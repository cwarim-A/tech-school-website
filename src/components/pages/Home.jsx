import React from 'react'
import AvailableCourse from '../Courses/AvailableCourse'
import HeroSection from '../HeroSection/HeroSection'
import TrackRecord from '../TrackRecord/TrackRecord'
import Advantages from "../Advantages/Advantages"
import FAQPage from '../FAQ/Faq'
import ContactUs from '../ContactUs/ContactUs'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <AvailableCourse/>
      <TrackRecord/>
      <Advantages/>
      <FAQPage/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default Home
