import React from 'react'
import Card from './Card';
import MovieItem from './MovieItem';

function Movies(props) {
  return (
    <Card className='movies flex flex-wrap justify-center mx-auto mt-[3rem] gap-5 w-[90%]'>
      <MovieItem
        image = {props.movies[0].image}
        title = {props.movies[0].title}
        description = {props.movies[0].description}
      />
      <MovieItem
        image = {props.movies[1].image}
        title = {props.movies[1].title}
        description = {props.movies[1].description}
      />
      <MovieItem
        image = {props.movies[2].image}
        title = {props.movies[2].title}
        description = {props.movies[2].description}
      />
      <MovieItem
        image = {props.movies[3].image}
        title = {props.movies[3].title}
        description = {props.movies[3].description}
      />
    </Card>
  )
}

export default Movies
