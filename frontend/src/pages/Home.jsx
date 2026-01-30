import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Faq from '../components/Faq'
import LeadingBrands from '../components/LeadingBrands'
import RecentWorks from '../components/RecentWorks'
import OurTeam from '../components/OurTeam'
import Services from '../components/Services'

const Home = () => {
  return (
    <>
    <Services/>
    <RecentWorks/>
    <OurTeam/>
    <LeadingBrands/>
    <Faq/>
    </>
  )
}

export default Home