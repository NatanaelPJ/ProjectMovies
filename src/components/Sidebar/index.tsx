import { Container } from "./styles"
import * as icon from 'react-icons/md'

export default function Sidebar(){



  return(
    <>
     <Container>
        <ul>
          <li>
            <a href="#" aria-details="AAAA"><span>icone</span> Todos</a>
          </li>
          <li>
            <a href="#" aria-details="AAAA"><span>icone</span> Ação</a>
          </li>
          <li>
            <a href="#" aria-details="AAAA"><span>icone</span>Comedia</a>
          </li>
          <li>
            <a href="#" aria-details="AAAA"><span>icone</span> Desenho</a>
          </li>
          <li>
            <a href="#" aria-details="AAAA"><span>icone</span> Romance</a>
          </li>
          <li>
            <a href="#" aria-details="AAAA"><span>icone</span> Terror</a>
          </li>
        </ul>
     </Container>
    </>
  )
}