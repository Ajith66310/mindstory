import React from 'react'
import Faq from '../components/Faq'
import LeadingBrands from '../components/LeadingBrands'
import RecentWorks from '../components/RecentWorks'
import OurTeam from '../components/OurTeam'
import Marquee from '../components/Marquee'
import SelectedCapabilities from '../components/SelectedCapabilities'
import MindStoryHero from '../components/MindStoryHero'
import StatsSection from '../components/StatsSection'
import UserReviews from '../components/UserReviews'

const Home = () => {
  return (
    <>
      <MindStoryHero />
      <StatsSection />
      <RecentWorks />
      <Marquee />
      <SelectedCapabilities />
      <LeadingBrands />
      <OurTeam />
      <UserReviews/>
      <Faq />
    </>
  )
}

export default Home