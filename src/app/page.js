import React from 'react'
import HeroSection from '@/Components/Pages/HeroSection/page'
import Tracks from '@/Components/Tracks/page'
import MainTrack from '@/Components/MainTrack/page'


function Home() {
  return (
    <div >
      <HeroSection />
      <Tracks/>

     
      <MainTrack />
   
    </div>
  )
}

export default Home