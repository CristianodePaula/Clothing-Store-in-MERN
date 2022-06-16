import React from 'react'
import styled from 'styled-components'
import imgUser from '../../img/imgUser.jpg'
import { FaBell, FaUserCog } from 'react-icons/fa'

const Container = styled.div`
  height: 2vh;
  width: 84vw;
  padding: 15px;
  border-bottom: 1px solid grey;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const BoxSettings = styled.div`
  display: flex;
  align-items: flex-end;
`
const ImageUser = styled.img`
  height: 30px;
  width: 30px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 15px;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1)
  }
`
const Icon = styled.a`
  font-size: 20px;
  margin-right: 15px;
  color: navy;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  &:hover {
    transform: scale(1.2)
  }
`
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
