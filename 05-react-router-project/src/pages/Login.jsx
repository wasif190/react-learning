import React from 'react'
import Template from '../components/Template'
import LoginImage from '../assets/login.png'

function Login({setIsLogedIn}) {
  return (
    <Template
        title='Welcome Back'
        desc1='Build skills for today, tomorrow, and beyond.'
        desc2='Education to future-proof your career.'
        image={LoginImage}
        setIsLogedIn={setIsLogedIn}
        formtype='login'
    />
  )
}

export default Login
