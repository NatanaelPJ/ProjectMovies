import styled from "styled-components";

export const Content = styled.main`
  height: calc(100vh - 4.25em);
  width: 100%;
  display: flex;
  flex: 1;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

export const WrapperContentMovies = styled.div`
  padding: 4em 2em;
  width: 100%; 
  display: flex;
  flex: 4;
  
  overflow-y: auto;

  &::-webkit-scrollbar{
    display: none;
  }
`