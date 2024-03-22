import React from 'react'
import aboutLogo from '../assets/about.png'

function About() {
  return (
    <div className='w-10/12 flex mx-auto justify-between items-center mt-[100px]'>
      <div className='w-[45%]'>
        <img src={aboutLogo}/>
      </div>
      <div className='w-[45%]'>
        <h1 className='text-[2rem] font-bold leading-10'>
            Discover a world where learning knows no bounds.  
        </h1>
        <p className='mt-3'>
            Welcome to our innovative study app, where learning meets limitless potential. Dive into a universe of knowledge, where curiosity fuels exploration and growth. With interactive lessons, personalized study plans, and a supportive community, we empower you to excel.
        </p>
        <p className='mt-3'>
            Join us in shaping a brighter, smarter tomorrow. Let's learn, thrive, and conquer together.
        </p>
      </div>
    </div>
  )
}

export default About
