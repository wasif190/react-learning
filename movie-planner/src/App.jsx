import React, { useState } from 'react';
import data from './data';
import Movies from './components/Movies';

function App() {
  const [movies, setMovies] = useState(data);

  const removeHandler = (id) => {
    const newMovies = movies.filter((movie) => movie.id != id);
    setMovies(newMovies);
  }

  if (movies.length === 0) {
    return (
      <div className='text-center mt-[200px]'>
        <h1 className='text-2xl'>No Movies Left</h1>
        <button 
          onClick={() => setMovies(data)}
          className='bg-[#ccc] py-1 px-8 mt-3 rounded-sm hover:bg-[#e8e8e8]'
        >
          Refresh
        </button>
      </div>
    )
  }

  return (
    <div>
      <header className='text-center text-[2.4rem] py-4 font-semibold'>
        Movie Planner
      </header>
      <Movies movies={movies} removeHandler={removeHandler}/>
    </div>
  )
}

export default App
