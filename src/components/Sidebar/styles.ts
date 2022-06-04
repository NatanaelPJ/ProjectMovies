import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  background: #2e303c;

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
      padding: 1em;
      width:100%;
      background: #373945;
      display: flex;
      
      a{
        width: 100%;
        font-size: 1.2em;
        color: yellow;
        display: flex;
        justify-content: space-between;
      }
    }
  }
`