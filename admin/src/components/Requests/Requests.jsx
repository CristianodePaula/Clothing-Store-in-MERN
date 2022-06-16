import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'
import Topbar from '../../components/Topbar/Topbar'
import axios from 'axios'
import { userRequest } from "../../resources/requestMethods"

import './Requests.css'

const Container = styled.div`
  display: flex;
  padding: 20px;
`
const TopContainer = styled.div`
  flex: 6;  
`
export default function UsersList() {

  const [orders, setOrders] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("orders")
        setOrders(res.data)
      } catch {}
    };
    getUsers()
  }, [])

  function deleteItem(id) {
    try {
  
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
              <th>UserID</th>
              <th>Preço</th>
              <th>País</th>
              <th>Status</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              return (
                <tr key={order.id}>
                  <td>{order.userId}</td>
                  <td>{order.amount}</td>
                  <td>{order.address}</td>
                  <td>{order.status}</td>
                  <div className='btn_read_create'>
                    <Link to={`/edit/${order._id}`}>
                      <button
                        type='button'
                        className='btnEdit'
                      > Editar </button>
                    </Link>
                    <button
                      onClick={() => deleteItem(order._id)}
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

