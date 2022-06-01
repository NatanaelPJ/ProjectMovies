import React, {useEffect} from 'react';
import { useContextMovie } from '../../contexts/MovieContext';

import { Container } from './styles';

export default function CardMovie(){
  const {movies, loadMovies} = useContextMovie()
  useEffect(() => {
    async function loadApi(){
      await loadMovies()
    }
    loadApi()
  },[])

  return(
    <>
      <Container>
        {movies.map((movie) => (
          <ul key={movie.id}>
            <li>{movie.title}</li>
            <img src={movie.image} alt="" />
          </ul>
        ))}
      </Container>
    </>
  )
}
