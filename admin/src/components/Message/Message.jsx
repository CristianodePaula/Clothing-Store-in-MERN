import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'
import Topbar from '../../components/Topbar/Topbar'
import axios from 'axios'
import { userRequest } from "../../resources/requestMethods"

import './Message.css'

const Container = styled.div`
  display: flex;
  padding: 20px;
`
const TopContainer = styled.div`
  flex: 6;  
`
export default function UsersList() {

  const [contact, setContact] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("contacts")
        setContact(res.data)
      } catch {}
    };
    getUsers()
  }, [])

  function deleteItem(id) {
    try {
      axios.delete("contacts" + id)
    } catch (err) { }
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
              <th>Menssagem</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {contact.map((message) => {
              return (
                <tr key={message.id}>
                  <td>{message.name}</td>
                  <td>{message.email}</td>
                  <td>{message.message}</td>
                  <div className='btn_read_create'>
                    <Link to={`/edit/${message._id}`}>
                      <button
                        type='button'
                        className='btnEdit'
                      > Editar </button>
                    </Link>
                    <button
                      onClick={() => deleteItem(message._id)}
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

