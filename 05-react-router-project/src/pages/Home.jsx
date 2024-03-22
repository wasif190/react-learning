import React from 'react'
import home1 from '../assets/home1.png'
import home2 from '../assets/home2.png'
import { IoLogoGooglePlaystore } from "react-icons/io5";

function Home() {
  return (
    <div className='text-center mt-[100px] text-3xl w-9/12 mx-auto'>
      <section className='flex mx-auto justify-between items-center -mt-[50px] -ml-[50px]'>
        <div>
            <img src={home1} />
        </div>
        <div className='flex flex-col items-end'>
            <h1 className='font-bold text-[3rem]'>Download Now</h1>
            <h2 className='mt-2 text-[2.4rem] font-semibold'>Edu Web</h2>
            <button className='flex items-center gap-2 text-base mt-5 bg-[#ff543e] py-2 px-3 rounded text-white'>
                <IoLogoGooglePlaystore />
                Download now
            </button>
        </div>
      </section>
      <section className='flex flex-col items-center mb-[100px]'>
        <img src={home2}/>
        <h1 className='text-[3rem] font-bold -mt-2'>Ignite your mind</h1>
      </section>
    </div>
  )
}

export default Home
