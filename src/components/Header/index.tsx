import React from  'react'
import {Container, Content, Logo, WrapperInput} from './styles'

export default function Header(){
  return(
    <>
      <Container>
        <Content>
            <Logo>
              <h1>logo</h1>
            </Logo>
            <WrapperInput>
              <input type="text" />
            </WrapperInput>
        </Content>
      </Container>
    </>
  )
}