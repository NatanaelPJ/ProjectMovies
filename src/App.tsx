import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import { api } from './services/api';

import { GlobalStyle } from './styles/global';


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


export default function App() {

  const [movies, setMovies] = useState<PropsMovies[]>([]);
  
  useEffect(() => {
    async function loadApi(){
      let response = await api.get('/popular')
  

      setMovies(response.data.results)
    }
    loadApi()
  },[])
 

  movies.map((movie) =>  console.log('movie', movie))


  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
      <Header/>
     
    </BrowserRouter>
    </>
  );
}

        //Exibir dados da Api = ok!

      /* <ul>
        {movies.map((movie) => (
              <li key={movie.id}> {movie.overview} </li>
        ))}
      </ul> */