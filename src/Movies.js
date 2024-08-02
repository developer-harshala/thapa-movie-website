import React from 'react'
import { useGlobalContext } from './context'

const Movies = () => {
  const { movie } = useGlobalContext()
  return (
    <>
      {movie.map((curMovie) => {
        return (
          <div>
            <h2>{curMovie.Title}</h2>
            <p>Movie</p>
          </div>
        )
      })}
    </>
  )
}

export default Movies
