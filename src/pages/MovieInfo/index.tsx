import React from "react"
import { useEffect, useState } from "react"
import { useParams, useNavigate  } from "react-router-dom"
import { getMovieId } from "../../services/server/movie"
import { Movies } from "../../services/server/movie/types"
import { Container, Content, ContentMovie } from "./styles"



export default function MovieInfo(){

  const {id} = useParams()
  const navigate = useNavigate()

  const [movieInfo, setMovieInfo] = useState<Movies>({} as Movies)

  useEffect(() => {

    if(!id) return
    
    async function loadApi(){
      const response = await getMovieId(id)

      const data = {
          ...response,
          image: `https://image.tmdb.org/t/p/w500${response.backdrop_path}`
      }

      setMovieInfo(data)
      console.log('respotaFilme', data);  
    }

    loadApi()
  
  },[id])

  function returnHomepage(){
    return navigate('/')
  }

  console.log('var', movieInfo);
  
  return(
    <>
     <Container>
        <Content>
          <ContentMovie>
            <img src={movieInfo.image} alt="" />
          </ContentMovie>
          <button>
            <a target="blank" href={`https://youtube.com/results?search_query=${movieInfo.title} Trailer`}>
              Trailer
            </a>
          </button>
          <button onClick={returnHomepage}>Voltar</button>
        </Content>
      </Container>
    </>
  )
} 