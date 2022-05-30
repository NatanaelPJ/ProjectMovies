import React from  'react'

import {MdSearch} from 'react-icons/md'
import InputSearch from './InputSearch'
import {Container, Content, Logo, WrapperInput} from './styles'

export default function Header(){
  return(
    <>
      <Container>
        <Content>
            <Logo>
              <h1>Whatchlist Movies</h1>
            </Logo>
            <WrapperInput>
              <InputSearch/>
              <MdSearch size={20} opacity={0.5}/> 
            </WrapperInput>
        </Content>
      </Container>
    </>
  )
}