import React from 'react'
import Card from './Card'

function MovieItem(props) {
  return (
    <Card className='movie-item w-[300px] bg-[#4b4b4b] p-4 rounded h-min'>
      <div className='w-full'>
        <img src={props.image} className='aspect-square rounded'/>
      </div>
      <h1 className='my-2 text-2xl font-semibold text-white'>{props.title}</h1>
      <p className='text-[#ededed] text-[.9rem]'>
        {
            props.description.length > 100 ? (props.description.substr(0, 150) + '...') : (props.description)
        }
      </p>
    </Card>
  )
}

export default MovieItem
