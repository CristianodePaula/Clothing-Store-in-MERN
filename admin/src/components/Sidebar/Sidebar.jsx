import React from 'react'
import {
  Container, 
  LogoBox,
  LogoIcon,
  Logo,
  Title,
  Box,
  Icon,
  Item,

} from './SidebarStyle'

import {
  FaShopify,
  FaChalkboardTeacher,
  FaUser,
  FaStoreAlt,
  FaAddressCard,
  FaListAlt,
  FaChartBar,
  FaEnvelope,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <Container>
      <LogoBox>
        <LogoIcon >
          <FaShopify  style={{fill: "white"}} />
        </LogoIcon>
        <Logo>Capital Shop</Logo>
      </LogoBox>

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
          <Link to='/users'>
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
          <FaListAlt/>
        </Icon>
          <Link to='/categories'>
            <Item> Categorias </Item>
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

      <Box>
        <Icon>
          <FaEnvelope />
        </Icon>
        <Link to='/message'>
          <Item> Menssagens </Item>
        </Link>
      </Box>

      
      <Title> Recursos</Title>
      <Box>
        <Icon>
          <FaChartBar />
        </Icon>
        <Link to='/statistics'>
        <Item> Estatísticas </Item>
        </Link>
      </Box>

    

    </Container>
  )
}
