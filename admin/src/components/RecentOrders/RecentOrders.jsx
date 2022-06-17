import React, { useState, useEffect } from 'react'
import {
  Container,
  Table,
  THead,
  TBody,
  THeadTR,
  TH,
  TBodyTR,
  TD
} from './RecentOrdersStyle'

import { userRequest } from "../../resources/requestMethods"
import { format } from "timeago.js"

export default function RecenteMessages() {

  const [orders, setOrders] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("orders")
        setOrders(res.data)
      } catch { }
    }
    getUsers()
  }, [])

  return (
    <Container>
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
          {orders.map((order) => {
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
