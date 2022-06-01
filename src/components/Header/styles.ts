import styled from "styled-components";


export const Container = styled.header`
  background: #1A1F38;
  display: flex;
  justify-content: center;
  padding: 1em;


  @media (min-width: 800px) {
    justify-content: center;
  }
`

export const Content = styled.nav`
  max-width: 1120px;
  width: 100%;
  display: flex;
  align-items: center;
`


export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
`

export const Logo = styled.div`
  h1{
    color :yellow;
    text-align: left;
  }
`

export const WrapperInput =  styled.div`
  max-width: 18em;
  width: 100%;
  background: white;

  display: flex;
  align-items: center;
  padding:  0.5em 0.8em;

  border: 0;
  border-radius: 1em;
`