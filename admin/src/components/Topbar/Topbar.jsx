import React from 'react'

import {
  Container,
  BoxSettings,
  ImageUser,
  Icon
} from './TopbarStyle'

import imgUser from '../../img/imgUser.jpg'
import { FaBell, FaUserCog } from 'react-icons/fa'

export default function Topbar() {
  return (
    <Container>
      <BoxSettings>
        <ImageUser src={imgUser}/>
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
