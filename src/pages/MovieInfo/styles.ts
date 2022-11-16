import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  color: white;
  
`

export const Content = styled.article`
  width: 100%;
  display: flex;
  padding: 2em;


  @media (max-width: 767px) {
    flex-direction: column;
  }
`

export const ContentMovie = styled.figure`
  flex: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;

  img{
    width: 100%;
    max-height: 30em;
    height: 100%;
    object-fit: cover;
  }

  .wrapperInfo{
    margin-top: 1em;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const Presentation = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1em;
  line-height: 150%;
   

  h1{
    font-size: 1.5em;
    text-align:center;
  }

  p{
    font-size: 1em;
    margin-top: 2em;
    text-align:justify;
  }

  .wrapperBtn{
    width: 100%;
    margin-top: 3em;
    display: flex;
    justify-content: space-between;
    padding: 0 2em;
    gap: 2em;

    button{
      width: 100%;
      padding: 1em 1.5em;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.2em;

      border: none;
      border-radius: 0.5em;
    }
  }
`