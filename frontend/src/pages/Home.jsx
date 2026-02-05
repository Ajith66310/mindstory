import React from 'react'
import Faq from '../components/Faq'
import LeadingBrands from '../components/LeadingBrands'
import RecentWorks from '../components/RecentWorks'
import OurTeam from '../components/OurTeam'
import Marquee from '../components/Marquee'
import SelectedCapabilities from '../components/SelectedCapabilities'
import StatsSection from '../components/StatsSection'
import UserReviews from '../components/UserReviews'
import Hero from '../components/Hero'
import ProcessAnimation from '../components/TextAnimation'
import MindstoryHub from '../components/MindStoryHub'

const Home = () => {
  return (
    <>
    <MindstoryHub/>
      <Hero />
      <ProcessAnimation/>
      <SelectedCapabilities />
      <StatsSection />
      <RecentWorks />
      <Marquee />
      <LeadingBrands />
      <OurTeam />
      <UserReviews />
      <Faq />
    </>
  )
}

export default Home