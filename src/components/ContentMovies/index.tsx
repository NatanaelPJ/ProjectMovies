import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
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
          <article key={ movie.id }>
            <Link to={`/filme/${ movie.id }`}>
              <img src={ movie.image } alt="" />
              <p>{ movie.title}</p>
           
            </Link>
          </article>
        ))}
      </Container>
    </>
  )
}
