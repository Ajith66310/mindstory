import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Faq from '../components/Faq'
import LeadingBrands from '../components/LeadingBrands'

const Home = () => {
  return (
    <>
    <Navbar/>
    <LeadingBrands/>
    <Faq/>
    <Footer/>
    </>
  )
}

export default Home