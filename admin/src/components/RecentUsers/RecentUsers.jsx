import React, { useState, useEffect } from 'react'
import {
  Container,
  Table,
  H1,
  TBody,
  TBodyTR,
  TD,
  Img
} from './RecentUsersStyle'
import { userRequest } from "../../resources/requestMethods"

export default function RecenteUsers() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true")
        setUsers(res.data)
      } catch { }
    }
    getUsers()
  }, [])

  return (
    <Container>
      <Table>
        <TBody>
         <H1> Usuários recentes</H1>
          {users.slice(0, 4).map((user) => {
            return (
              <TBodyTR key={user.id}>
                <TD style={{width: '10px'}}>
                <Img src={user.profilePic
                  ||
                  "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
                } />
                </TD>
                <TD>{user.username}</TD>
                <TD>{user.email}</TD>
              </TBodyTR>
            )
          })}
        </TBody>
      </Table>
    </Container>
  )
}
