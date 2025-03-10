
import React from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <main className='hero-section main'>
        <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className='heading-xl'>
            Explore the World, One <br /> country at a Time
          </h1>
          <p className='paragraph'> 
            Discover the history, culture, and beauty of every nation. sort, search and filter through countries to find the details you
          </p>
          <button className='arrow-icon'>Start Exploring         <FaArrowAltCircleRight /></button>
        </div>
        <div className="hero-img">
          <img src="/image/logo1.webp" alt="world is beauty" />
        </div>
        </div>
       </main>
  )
}

export default HeroSection
