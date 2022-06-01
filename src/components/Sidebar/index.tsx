import { Container } from "./styles"

export default function Sidebar(){
  return(
    <>
     <Container>
        <ul>
          <li>
            <a href="#" aria-details="AAAA">Todos</a>
          </li>
          <li>
            <a href="#" aria-details="AAAA">Ação</a>
          </li>
          <li>
            <a href="#" aria-details="AAAA">Comedia</a>
          </li>
          <li>
            <a href="#" aria-details="AAAA">Desenho</a>
          </li>
          <li>
            <a href="#" aria-details="AAAA">Romance</a>
          </li>
          <li>
            <a href="#" aria-details="AAAA">Terror</a>
          </li>
        </ul>
     </Container>
    </>
  )
}