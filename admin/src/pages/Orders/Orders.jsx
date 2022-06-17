import React, { useEffect } from 'react'
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
} from './OdersStyle'
import Sidebar from '../../components/Sidebar/Sidebar'
import Topbar from '../../components/Topbar/Topbar'
import { format } from "timeago.js"
import { useDispatch, useSelector } from "react-redux"
import { getOrders, deleteOrder } from '../../redux/apiCalls'

export default function Orders() {

  const orders = useSelector((state) => state.order.orders)
  const dispatch = useDispatch()

  useEffect(() => {
    getOrders(dispatch)
  }, [dispatch])

  const handleDelete = (id) => {
    deleteOrder(id, dispatch)
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
              <TH>Editar</TH>
            </THeadTR>
          </THead>
          <TBody>
            {orders.map((order) => {
              return (
                <TBodyTR key={order.id}>
                  <TD>{order.userId}</TD>
                  <TD>R${order.amount},00</TD>
                  <TD>{order.address}</TD>
                  <TD>{order.status}</TD>
                  <TD>{format(order.createdAt)}</TD>
                  <TD>
                    <Button
                      onClick={() => handleDelete(order._id)}
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

