import React from "react";
import Content from "./Content";
import Sidebar from "./Sidebar";
import {Container} from './styles'
 

export default function Theme(){
  return(
    <>
      <Container>
        <Sidebar />
        <Content />
      </Container>
    </>
  )
}