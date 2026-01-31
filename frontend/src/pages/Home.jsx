import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Faq from '../components/Faq'
import LeadingBrands from '../components/LeadingBrands'
import RecentWorks from '../components/RecentWorks'
import OurTeam from '../components/OurTeam'
import Services from '../components/Services'
import Marquee from '../components/Marquee'

const Home = () => {
  return (
    <>
    <Services/>
    <RecentWorks/>
    <Marquee/>
    <OurTeam/>
    <LeadingBrands/>
    <Faq/>
    </>
  )
}

export default Home