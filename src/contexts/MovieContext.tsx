import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { getMovies } from "../services/server/movie";
import { Movies } from "../services/server/movie/types";

interface FilterProps {
  movieName: string
}

interface ContextProps {
  movies: Movies[]
  loadMovies: () => Promise<void>
  addFilter: (filterName: 'movieName', value: any) => void
}

type MovieProviderProps = {
  children: ReactNode
}

//create context
const MoviesContext = createContext({} as ContextProps) 
//Objeto é entendido com uma instancia da interface


//provider context
export function MovieProvider({children} : MovieProviderProps ){
  const [movies, setMovies] = useState<Movies[]>([]);
  const [originalMovies, setOriginalMovies] = useState<Movies[]>([]);
  const [filters, setFilters] = useState({} as FilterProps)

  useEffect(() => {
    if (!filters.movieName) {
      setMovies(originalMovies)
      return;
    }
    
    const newMovies = originalMovies.filter((item) => {
      const filterName = cleanString(filters.movieName)
      const title = cleanString(item.title)

      if (title.includes(filterName)) {
        return item;
      } 

      return false
    })

    setMovies(newMovies)
  }, [filters])

  function cleanString (value: string) {
    return value?.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  }

  async function loadMovies(){
    let result = await getMovies()
    
    const data: Movies[] = result.map((e : Movies) => {
      return { 
        ...e,
        image: `https://image.tmdb.org/t/p/w500${e.backdrop_path}`
      }
    })

    setMovies(data)
    setOriginalMovies(data)
  }

  function addFilter (filterName: 'movieName', value: any) {
    setFilters({
      ...filters,
      [filterName]: value ? value : ''
    })
  }

  return (
    <MoviesContext.Provider value={{ movies, loadMovies, addFilter, }}>
      {children}
    </MoviesContext.Provider>
  )
}


export function useContextMovie(){
  return useContext(MoviesContext)
}