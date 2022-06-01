import React from "react";

import { 
  Container, 
  Content, 
  WrapperContentMovies
} from "./styles";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import CardMovie from "../../components/CardMovie";
import Footer from "../../components/Footer";


export default function Home() {
  return (
    <>
      <Container>
        <Header/>
        <Content>
          <Sidebar />
          <WrapperContentMovies>
              <CardMovie/>
          </WrapperContentMovies>
        </Content>
        <Footer/>
      </Container>
    </>
  )
}