import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Contact from './pages/Contact'
import PrivateRoute from './components/PrivateRoute'

function App() {
  const [isLogedIn, setIsLogedIn] = useState(false);
  return (
    <div>
      <Navbar isLogedIn={isLogedIn} setIsLogedIn={setIsLogedIn}/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login setIsLogedIn={setIsLogedIn}/>}/>
        <Route path='/signup' element={<SignUp setIsLogedIn={setIsLogedIn}/>}/>
        {/* <Route path='/dashboard' element={<PrivateRoute isLogedIn={isLogedIn}><Dashboard/></PrivateRoute>}/> */}
        <Route path='/dashboard' element={isLogedIn ? <Dashboard/> : <Navigate to="/login" />}/>
      </Routes>
    </div>
  )
}

export default App
