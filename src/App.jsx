import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import {About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas} from "./components"

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar/>
          <Hero/>
        </div>
        <About></About>
        <Experience></Experience>
        <Tech></Tech>
        <Works></Works>
        <div className='relative z-0'>
          <Contact></Contact>
          <StarsCanvas></StarsCanvas>
        </div>
      </div>
    </BrowserRouter>
  )  
}

export default App
