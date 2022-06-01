import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
 

  @media (max-width:1120px) {
    border-right: 1px solid gray;
  }

  ul{
    width: 100%;
    display: flex;
    align-items: left;
    justify-content: space-evenly;
    flex-flow: column wrap;
    flex: 1;
    gap: 1em;
    padding: 2em 1em;

    @media (max-width: 600px) {
      flex-direction: row;
      padding: 1em;
  }

    li {
      max-width: 6em;
      a{
        width: 100%;
        font-size: 1.2em;
        color: yellow;
      }
    }
  }
`