import React, { useState, useEffect } from 'react'
import {
  Container,
  Table,
  H1,
  THead,
  TBody,
  THeadTR,
  TH,
  TBodyTR,
  TD
} from './RecentOrdersStyle'

import { userRequest } from "../../resources/requestMethods"
import { format } from "timeago.js"

export default function RecenteOrders() {

  const [orders, setOrders] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("orders/?new=true")
        setOrders(res.data)
      } catch { }
    }
    getUsers()
  }, [])

  return (
    <Container>
          <H1>Pedidos recentes</H1>
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
          {orders.slice(0, 3).map((order) => {
            return (
              <TBodyTR key={order.id}>
                <TD>{order.userId}</TD>
                <TD>{order.amount}</TD>
                <TD>{order.address}</TD>
                <TD>{order.status}</TD>
                <TD>{format(order.createdAt)}</TD>
              </TBodyTR>
            )
          })}
        </TBody>
      </Table>
    </Container>
  )
}
