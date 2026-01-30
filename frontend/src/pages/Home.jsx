import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Faq from '../components/Faq'
import LeadingBrands from '../components/LeadingBrands'
import RecentWorks from '../components/RecentWorks'
import OurTeam from '../components/OurTeam'

const Home = () => {
  return (
    <>
    <RecentWorks/>
    <LeadingBrands/>
    <OurTeam/>
    <Faq/>
    </>
  )
}

export default Home