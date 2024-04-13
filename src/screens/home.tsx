import React from 'react'
import HeroSection from '../widgets/hero'
import MainBodySection from '../widgets/center'
import BottomFooter from '../widgets/bottomfooter'

const HomePage = () => {
  return (
    <main className='w-screen h-screen overflow-y-auto'>
        <HeroSection/>
        <MainBodySection/>
        <BottomFooter/>
    </main>
  )
}

export default HomePage