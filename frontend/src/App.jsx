import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Learn from './pages/Learn'
import Services from './pages/Services'
import Works from './pages/Works'
import Error from './pages/Error'
import CustomCursor from './components/CustomCursor'
import Layout from './components/Layout'
import SmoothScroll from './components/SmoothScroll'
import OurApproach from './pages/OurApproach'

const App = () => {
  return (
    <>
      <SmoothScroll />
      <CustomCursor />
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/learn' element={<Learn />} />
          <Route path='/services' element={<Services />} />
          <Route path='/works' element={<Works />} />
          <Route path='/about/our-approach' element={<OurApproach />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </>
  )
}

export default App