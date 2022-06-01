import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useContextMovie } from "../../contexts/MovieContext"


export default function MovieInfo(){
  const {movies, loadMovies} = useContextMovie()
  const {id} = useParams()
  
  useEffect(() => {
    async function loadMovie(){}
  })


  return{

  }
} 