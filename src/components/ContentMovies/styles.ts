import styled from "styled-components";

// interface Props{
//   backdrop_path: string
// }
export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4em;


  article{
    max-width: 14.31em;
    width: 100%;
    height: 24em;
    display: flex;
    flex-direction: column;
    align-items: center;  
    justify-content: center ;
    position: relative;
    
    img{
      flex: 1;
      height: 21.25em;
      width:100%;
      object-fit: cover;
      opacity: 0.5;
    }

    p{
      width: 100%;
      color: yellow;
      font-size: 1.2em;
      text-align: center;

      position: absolute;
      bottom:10%;

     
    }
  }
`
 