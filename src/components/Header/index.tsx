import React from  'react'

import {MdSearch} from 'react-icons/md'
import Sidebar from '../Sidebar'
import InputSearch from './InputSearch'
import {Container, Content, Wrapper ,Logo, WrapperInput} from './styles'

export default function Header(){
  return(
    <>
      <Container>
        <Content>
            <Wrapper>
              <Logo>
                <h1>Whatchlist Movies</h1>
              </Logo>
              <WrapperInput>
                <InputSearch/>
                <MdSearch size={20} opacity={0.5}/> 
              </WrapperInput>
            </Wrapper>
        </Content>
      </Container>
    </>
  )
}