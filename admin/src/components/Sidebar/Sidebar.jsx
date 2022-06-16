import React from 'react'
import styled from 'styled-components'
import {
  FaShopify,
  FaChalkboardTeacher,
  FaUser,
  FaStoreAlt,
  FaAddressCard,
  FaChartBar,
  FaEnvelope,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Container = styled.div`
  height: 100vh;
  width: 12vw;
  border-right: 1px solid grey;
  padding: 10px;
  bakground: red;
`
const LogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s ease-in-out;
  &:hover {
    transform: scale(0.8)
  }
`
const LogoIcon = styled.a`
  color: black;
  font-size: 20px;
`
const Logo = styled.h1`
  font-size: 15px;
  padding-left: 10px
`
const Line = styled.div`
  border: 1px solid grey;
  margin: 5px 0 15px 0;
`
const Box = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  transition: 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1)
  }
`
const Icon = styled.a`
  font-size: 16px;
  color: navy;
  cursor: pointer;
`
const Title = styled.h1`
  font-size: 16px;
  color: grey;
  margin-top: 20px;
`
const Item = styled.span`
  font-size: 14px;
  margin-left: 12px;
  cursor: pointer;
`
const ThemeStyle = styled.div``

export default function Sidebar() {
  return (
    <Container>
      <LogoBox>
        <LogoIcon>
          <FaShopify />
        </LogoIcon>
        <Logo>Capital Shop</Logo>
      </LogoBox>
      <Line />
      <Title>Inicial</Title>
      <Box>
        <Icon>
          <FaChalkboardTeacher />
        </Icon>
        <Link to='/'>
          <Item> Início </Item>
        </Link>
      </Box>

      <Title>Listas</Title>
      <Box>
        <Icon>
          <FaUser />
        </Icon>
          <Link to='users'>
            <Item> Usuários </Item>
          </Link>
      </Box>
      <Box>
        <Icon>
          <FaStoreAlt />
        </Icon>
        <Link to='/products'>
          <Item> Produtos </Item>
        </Link>
      </Box>
      <Box>
        <Icon>
          <FaAddressCard />
        </Icon>
        <Link to='/requests'>
          <Item> Pedidos </Item>
        </Link>
      </Box>

      <Title> Recursos</Title>
      <Box>
        <Icon>
          <FaChartBar />
        </Icon>
        <Item> Estatísticas </Item>
      </Box>

      <Box>
        <Icon>
          <FaEnvelope />
        </Icon>
        <Link to='/message'>
          <Item> Menssagens </Item>
        </Link>
      </Box>

      <Title>Temas</Title>
        <ThemeStyle></ThemeStyle>
        <ThemeStyle></ThemeStyle>

    </Container>
  )
}
