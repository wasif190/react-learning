import React from 'react'
import Template from '../components/Template'
import SignUpImage from '../assets/sign-up.png'

function SignUp({setIsLogedIn}) {
  return (
    <Template
        title='Join the millions learning to code with edu web for free'
        desc1='Build skills for today, tomorrow, and beyond.'
        desc2='Education to future-proof your career.'
        image={SignUpImage}
        setIsLogedIn={setIsLogedIn}
        formtype='signup'
    />
  )
}

export default SignUp
