import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 
  width: 100%;
  height: 100%;

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a{
    text-decoration: none;
  }

  ul,
  li{
    list-style: none;
  }

  input{
    outline: none;
  }

  body{
    width: 100%;
    height: 100%;
    background: #1A1F38;
  }
`



