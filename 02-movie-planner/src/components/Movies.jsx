import React from 'react'
import Card from './Card'

function Movies({ movies, removeHandler }) {
  return (
    <div className='flex w-9/12 justify-center mx-auto flex-wrap gap-10 mb-[89px] mt-[30px]'>
      {
        movies.map((movie) => {
            return <Card key={movie.id} {...movie} removeHandler={removeHandler}/>
        })
      }
    </div>
  )
}

export default Movies
