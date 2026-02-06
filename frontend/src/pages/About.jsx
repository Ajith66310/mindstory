import React from 'react'
import Timeline from '../components/Milestone'
import StatsSection from '../components/StatsSection'
import WhoWeAre from '../components/WhoWeAre'
import AboutPageBanner from '../components/AboutPageBanner'
import StatsGrid from '../components/StatsGrid'
const About = () => {
  return (
    <>
      <AboutPageBanner />
      <WhoWeAre />
      <StatsSection />
      <StatsGrid/>
      <Timeline />
    </>
  )
}

export default About