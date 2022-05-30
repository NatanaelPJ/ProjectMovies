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
      let response = await api.get('/')
      
      let results = response.data.results
      setResults(results)

      console.log(results);
      
    }


    loadApi()
  },[])


  
  
 

  results.map((result) =>  console.log('movie', result))
  console.log(results);
  


  return(
    <>
     <Container>
        {results.map((movie) => (
              <ul key={movie.id}>
                <li> {movie.title}</li>
              </ul>
        ))}
     </Container>
    </>
  )
}
