import React from "react";

import { 
  Content,
  WrapperContentMovies
} from "./styles";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import CardMovie from "../../components/ContentMovies";


export default function Home() {
  return (
    <>
      <Header/>
      <Content>
        <WrapperContentMovies>
            <CardMovie/>
        </WrapperContentMovies>
      </Content>
    </>
  )
}