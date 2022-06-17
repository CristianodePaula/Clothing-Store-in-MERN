import React, { useState, useEffect } from 'react'
import {
  Container,
  Table,
  THead,
  TBody,
  THeadTR,
  TBodyTR,
  TD,
  Img
} from './RecentUsersStyle'
import { userRequest } from "../../resources/requestMethods"


export default function RecenteMessages() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users")
        setUsers(res.data)
      } catch { }
    }
    getUsers()
  }, [])

  return (
    <Container>
      <Table>
        <THead>
          <THeadTR>

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
              </TBodyTR>
            )
          })}
        </TBody>
      </Table>
    </Container>
  )
}
