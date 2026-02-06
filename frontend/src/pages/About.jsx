import React from 'react'
import Timeline from '../components/Milestone'
import StatsSection from '../components/StatsSection'
import WhoWeAre from '../components/WhoWeAre'
import AboutPageBanner from '../components/AboutPageBanner'
const About = () => {
  return (
    <>
    <AboutPageBanner/>
      <WhoWeAre/>
      <StatsSection />
      <Timeline />
    </>
  )
}

export default About