import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'
import Topbar from '../../components/Topbar/Topbar'
import { userRequest } from "../../resources/requestMethods"
import { deleteUser } from '../../redux/apiCalls'
import { useDispatch } from "react-redux"

import './UserList.css'

const Container = styled.div`
  display: flex;
  padding: 20px;
`
const TopContainer = styled.div`
  flex: 6;  
`
export default function UsersList() {

  const [users, setUsers] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users")
        setUsers(res.data)
      } catch {}
    };
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
        <div className='box_read_delete'>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>ID</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user._id}</td>
                  <div className='btn_read_create'>
                    <Link to={`/edit/${user._id}`}>
                      <button
                        type='button'
                        className='btnEdit'
                      > Editar </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(user._id)}
                      type="button"
                    > Excluir </button>
                  </div>
                </tr>
              )
            })}
          </tbody>
        </table>
        </div>
      </TopContainer>
    </Container>
  )
}