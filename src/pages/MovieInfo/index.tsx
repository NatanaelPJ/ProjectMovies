import React from "react"
import { useEffect, useState } from "react"
import { useParams, useNavigate  } from "react-router-dom"
import { getMovieId } from "../../services/server/movie"
import { Movies } from "../../services/server/movie/types"
import { Container, Content, ContentMovie } from "./styles"


export default function MovieInfo(){

  const {id} = useParams()
  const navigate = useNavigate()

  const [movieInfo, setMovieInfo] = useState<Movies[]>([])
  
  useEffect(() => {
    async function loadApi(){
      let response = await getMovieId(id)
      if(response.length === 0){
         return navigate('/')
      }
      setMovieInfo(response)
      console.log('Item', response.length);
    }
    loadApi()
    return () => {
      console.log('Componente desmontado')
    }
  },[])


  console.log('var', movieInfo);
  
  return(
    <>
     <Container>
        <Content>
          <ContentMovie>
          </ContentMovie>
          <button>
            <a target="blank" href={`https://youtube.com/results?search_query=${''} Trailer`}>
              Trailer
            </a>
          </button>
        </Content>
      </Container>
    </>
  )
} 