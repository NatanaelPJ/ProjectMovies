import styled from "styled-components";


export const Container = styled.div`
  height: calc(100vh - 4.25em);
  display: flex;

  @media (max-width:600px) {
    flex-direction: column;
  }
`