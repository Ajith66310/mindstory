import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Faq from '../components/Faq'
import LeadingBrands from '../components/LeadingBrands'
import RecentWorks from '../components/RecentWorks'

const Home = () => {
  return (
    <>
    <RecentWorks/>
    <Navbar/>
    <LeadingBrands/>
    <Faq/>
    <Footer/>
    </>
  )
}

export default Home