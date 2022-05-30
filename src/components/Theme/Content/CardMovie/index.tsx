import React, {useState, useEffect} from 'react';

import { Container } from './styles';
import { api } from '../../../../services/api';

interface  PropsMovies {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}


export default function CardInfo(){
  const [results, setResults] = useState<PropsMovies[]>([]);


  
  useEffect(() => {
    async function loadApi(){
      let response = await api.get('/movie/popular')

      setResults(response.data.results)
    }


    loadApi()
  },[])


  
  
 

  results.map((results) =>  console.log('movie', results))
  console.log(results);
  


  return(
    <>
     <Container>
        {results.map((movie) => (
          <ul key={movie.id}>
            <li> {movie.title}</li>
            <img src="https://images.unsplash.com/photo-1653920981184-2793fb1f76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" alt="" />
          </ul>
        ))}
     </Container>
    </>
  )
}
