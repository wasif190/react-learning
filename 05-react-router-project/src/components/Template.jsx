import React from 'react'
import { FcGoogle } from "react-icons/fc"
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

function Template({title, desc1, desc2, image, formtype, setIsLogedIn}) {
  return (
    <main className='flex w-11/12 items-center max-w-[1160px] py-12 mx-auto gap-x-[10%]'>
      <section className='w-[45%]'>
        <h1 className="font-semibold text-[1.875rem] leading-[2.375rem]">{title}</h1>
        <p className="text-[1.125rem] mt-4">
            <span>{desc1}</span>
            <span className="text-blue-500 italic ml-1">{desc2}</span>
        </p>

        {formtype === 'signup' ? (<SignUpForm setIsLogedIn={setIsLogedIn}/>) : (<LoginForm setIsLogedIn={setIsLogedIn}/>)}

        <div className="flex w-full items-center my-4 gap-x-2">
            <div className="h-[1px] w-full bg-[#b8b8b8]"></div>
            <p className="text-richblack-700 font-medium leading-[1.375rem]">OR</p>
            <div className="h-[1px] w-full bg-[#b8b8b8]"></div>
        </div>

        <button className="w-full flex items-center justify-center rounded-[5px] font-medium text-richblack-100 border border-[#b8b8b8] px-[12px] py-[8px] gap-x-2 mt-6">
            <FcGoogle />
            <p>Sign in with Google</p>
        </button>
      </section>

      <section className='w-[45%]'>
        <img src={image}
          className='w-full'
          loading='lazy'
        />
      </section>
    </main>
  )
}

export default Template
