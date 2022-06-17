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
  Button
} from './MessagesStyle'
import Sidebar from '../../components/Sidebar/Sidebar'
import Topbar from '../../components/Topbar/Topbar'
import { userRequest } from "../../resources/requestMethods"
import { useDispatch } from "react-redux"
import { deleteMessage } from '../../redux/apiCalls'

export default function Message() {

  const [messages, setMessages] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await userRequest.get("contacts")
        setMessages(res.data)
      } catch { }
    }
    getMessages()
  }, [])

  const handleDelete = (id) => {
    deleteMessage(id, dispatch)
  }

  return (
    <Container>
      <Sidebar />
      <TopContainer>
        <Topbar />
        <Table>
          <THead>
            <THeadTR>
              <TH>Nome</TH>
              <TH>Email</TH>
              <TH>Menssage</TH>
              <TH>Editar</TH>
            </THeadTR>
          </THead>
          <TBody>
            {messages.map((message) => {
              return (
                <TBodyTR key={message.id}>
                  <TD>{message.name}</TD>
                  <TD>{message.email}</TD>
                  <TD>{message.message}</TD>
                  <TD>
                    <Button
                      onClick={() => handleDelete(message._id)}
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
    </Container>
  )
}
