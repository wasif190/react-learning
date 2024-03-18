import React from 'react';
// import './Spinner.css';

function Spinner() {
  return (
    <div className='flex flex-col items-center gap-4 mt-[120px]'>
      <div className='spinner'></div>
      <p className='text-[1.2rem]'>Loading...</p>
    </div>
  )
}

export default Spinner
