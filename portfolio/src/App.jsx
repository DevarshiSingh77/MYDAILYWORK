import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Project'
import Achievements from './components/Achievments'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Education from './components/Education'
import DownloadResume from './components/DownloadResume'

const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Achievements />
     
      <Projects />
      
      <Contact />
      <DownloadResume />
      <Footer />
      
      
    </div>
  )
}

export default App
