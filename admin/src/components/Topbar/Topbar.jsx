import React from 'react'
import {
  Container,
  BoxLinks,
  Item,
  BoxSettings,
  ImageUser,
  Icon
} from './TopbarStyle'
import imgUser from '../../img/imgUser.jpg'
import { FaBell, FaUserCog } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Topbar() {
  return (
    <Container>
      <BoxLinks>
        <Link to='/'>
          <Item> Início </Item>
        </Link>
        <Link to='/users'>
          <Item> Usuários </Item>
        </Link>
        <Link to='/products'>
          <Item> Produtos </Item>
        </Link>
        <Link to='/categories'>
          <Item> Categorias </Item>
        </Link>
        <Link to='/requests'>
          <Item>  Pedidos</Item>
        </Link>
        <Link to='/message'>
          <Item>  Menssagens </Item>
        </Link>
        <Link to='/statistics'>
          <Item>  Estatísticas </Item>
        </Link>
      </BoxLinks>
      <BoxSettings>
        <ImageUser src={imgUser} />
        <Icon>
          <FaUserCog />
        </Icon>
        <Icon>
          <FaBell />
        </Icon>
      </BoxSettings>
    </Container>
  )
}
