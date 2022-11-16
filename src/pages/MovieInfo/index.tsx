import { useEffect, useState } from "react"
import { useParams, useNavigate  } from "react-router-dom"
import { getMovieId } from "../../services/server/movie"
import { Movies } from "../../services/server/movie/types"
import { Container, Content, ContentMovie,Presentation } from "./styles"
import {MdKeyboardBackspace} from 'react-icons/md' 


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
 
  return(
    <>
     <Container>
        <Content>
          <ContentMovie>
            <img src={ movieInfo.image } alt="" />
            <div className="wrapperInfo">
              <span>Lançamento: { movieInfo.release_date } </span>
              <span>Views: { movieInfo.popularity } </span>
            </div>
          </ContentMovie>
          <Presentation>
            <h1> { movieInfo.title } </h1>
            <p> { movieInfo.overview } </p>
            <div className="wrapperBtn">
              <button onClick={returnHomepage}> <MdKeyboardBackspace size={15} /> Voltar</button>
              <button>
                <a target="blank" href={`https://youtube.com/results?search_query=${movieInfo.title} Trailer`}>
                  Trailer
                </a>
              </button>
            </div>
          </Presentation>
        </Content>
      </Container>
    </>
  )
} 