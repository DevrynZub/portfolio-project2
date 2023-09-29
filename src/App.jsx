/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import Sidenav from './components/Sidenav.jsx'
import Main from './components/Main.jsx'
import Work from './components/Work.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Skills from './components/Skills.jsx'

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div >
      <Sidenav />
      <Main />
      <Work />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}


export default App
