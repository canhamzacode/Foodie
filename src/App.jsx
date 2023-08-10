import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Display from './components/Display'
import FoodSection from './components/FoodSection'

function App() {

  return (
    <div className='w-full max-w-[1200px] mx-auto px-2'>
      <Navbar />
      <HeroSection />
      <Display />
      <FoodSection />
    </div>
  )
}

export default App
