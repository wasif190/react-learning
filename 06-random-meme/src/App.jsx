import React from 'react'
import Random from './components/Random'
import Tag from './components/Tag'

function App() {
  return (
    <div className='w-full h-screen'>
      <h1 
        className='uppercase text-3xl font-semibold text-center border-b py-4 bg-white sticky top-0'
      >
        Random gifs
      </h1>
      <div className='flex flex-col w-full items-center gap-y-6 mt-10'>
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}

export default App
