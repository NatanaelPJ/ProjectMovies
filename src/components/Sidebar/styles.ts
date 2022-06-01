import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 0;

  @media (max-width:601px) {
    border-right: 1px solid gray;
  }

  ul{
    max-width: 40em;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: column wrap;
    flex: 1;
    gap: 1em;
    padding: 0 1em;

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