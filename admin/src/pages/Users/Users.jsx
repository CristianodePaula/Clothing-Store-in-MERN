import React, { useState, useEffect } from 'react'
import {
  Container,
  TopContainer,
  Table,
  THead,
  TBody,
  THeadTR,
  TH,
  TBodyTR,
  TD,
  Img,
  Button
} from './UsersStyle'
import Sidebar from '../../components/Sidebar/Sidebar'
import Topbar from '../../components/Topbar/Topbar'
import { userRequest } from "../../resources/requestMethods"
import { useDispatch } from "react-redux"
import { deleteUser } from '../../redux/apiCalls'

export default function UsersList() {

  const [users, setUsers] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users")
        setUsers(res.data)
      } catch { }
    }
    getUsers()
  }, [])

  const handleDelete = (id) => {
    deleteUser(id, dispatch)
  }

  return (
    <Container>
      <Sidebar />
      <TopContainer>
        <Topbar />
        <Table>
          <THead>
            <THeadTR>
              <TH>UserID</TH>
              <TH>Preço</TH>
              <TH>País</TH>
              <TH>Status</TH>
              <TH>Data</TH>
            </THeadTR>
          </THead>
          <TBody>
            {users.map((user) => {
              return (
                <TBodyTR key={user.id}>
                  <Img src={user.profilePic
                    ||
                    "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
                  } />
                  <TD>{user.username}</TD>
                  <TD>{user.email}</TD>
                  <TD>{user._id}</TD>
                  <TD>
                    <Button
                      onClick={() => handleDelete(user._id)}
                      type="button"
                    > Excluir
                    </Button>
                  </TD>
                </TBodyTR>
              )
            })}
          </TBody>
        </Table>
      </TopContainer>
    </Container >
  )
}