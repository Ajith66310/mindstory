import React from 'react'
import Faq from '../components/Faq'
import LeadingBrands from '../components/LeadingBrands'
import RecentWorks from '../components/RecentWorks'
import OurTeam from '../components/OurTeam'
import Marquee from '../components/Marquee'
import SelectedCapabilities from '../components/SelectedCapabilities'

const Home = () => {
  return (
    <>
    <SelectedCapabilities/>
    <RecentWorks/>
    <Marquee/>
    <OurTeam/>
    <LeadingBrands/>
    <Faq/>
    </>
  )
}

export default Home