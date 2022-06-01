import styled from "styled-components";

// interface Props{
//   backdrop_path: string
// }
export const Container = styled.div`
  display: flex;
  
  flex: 1;

  ul{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 22.75em;
    position: relative;
    background: gray;

    li{
      color: yellow;
      text-align: center;
    }

    img{
      max-height: 100%;
      width: auto;
      object-fit: contain;
    }
  }
`
 