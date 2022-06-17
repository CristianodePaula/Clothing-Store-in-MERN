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
  ThemeStyle
} from './SidebarStyle'
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



export default function Sidebar() {
  return (
    <Container>
      <LogoBox>
        <LogoIcon>
          <FaShopify />
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
