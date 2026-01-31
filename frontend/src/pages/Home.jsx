import React from 'react'
import Faq from '../components/Faq'
import LeadingBrands from '../components/LeadingBrands'
import RecentWorks from '../components/RecentWorks'
import OurTeam from '../components/OurTeam'
import Marquee from '../components/Marquee'
import SelectedCapabilities from '../components/SelectedCapabilities'
import MindStoryHero from '../components/MindStoryHero'

const Home = () => {
  return (
    <>
    <MindStoryHero/>
    <RecentWorks/>
    <Marquee/>
    <SelectedCapabilities/>
    <LeadingBrands/>
    <OurTeam/>
    <Faq/>
    </>
  )
}

export default Home