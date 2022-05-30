import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  gap: 1em;
  padding: 2em 0;
 
 
 ul{
   display: flex;
   align-items: center;
   justify-content: center;


   background: gray;
   width: 14.75em;
   height: 22.75em;
   position: relative;

  li{
    color: yellow;
    text-align: center;
    position: absolute;
    z-index: 10;
  }

   img{
     width: 100%;
     height: 100%;
     opacity: 0.8;
   }
 }
`