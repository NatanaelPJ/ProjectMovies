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


  ul{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 22.75em;
    position: relative;

    li{
      margin-top: 1em;
      color: white;
      text-align: center;
    }

    img{
      max-width: 20em;
      height: 20em;
      width:100%;
      object-fit: cover;
    }
  }
`
 