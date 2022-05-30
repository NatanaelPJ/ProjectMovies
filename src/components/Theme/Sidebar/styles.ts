import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: calc(100vh - 4.25em);
  flex: 1;
  background: black;

  ul{
    width: 100%;
    padding: 1em 2em;

    display: flex;
    align-items: right;
    justify-content: space-evenly;
    flex-flow:column wrap;
    flex: 1;
    gap: 1em;


    @media (max-width:600px) {
      flex-flow:row wrap;
    }

    li {
      a{
        font-size: 1.2em;
        color: yellow;
      }
    }
  }
`