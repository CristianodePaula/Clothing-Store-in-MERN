import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'
import Topbar from '../../components/Topbar/Topbar'
import { useDispatch, useSelector } from "react-redux"
import {deleteProduct, getProducts} from '../../redux/apiCalls'

import './Products.css'

const Container = styled.div`
  display: flex;
  padding: 20px;
`
const TopContainer = styled.div`
  flex: 6;  
`
export default function UsersList() {

  const dispatch = useDispatch()
  const products = useSelector((state) => state.product.products)

  useEffect(() => {
    getProducts(dispatch)
  }, [dispatch])

  const handleDelete = (id) => {
    deleteProduct(id, dispatch)
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
              <th>Produto</th>
              <th>Categoria</th>
              <th>ID</th>
              <th>Tamanho</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>{product.desc}</td>
                  <td>{product.categories}</td>
                  <td>{product.size}</td>
                  <div className='btn_read_create'>
                    <Link to={`/edit/${product._id}`}>
                      <button
                        type='button'
                        className='btnEdit'
                      > Editar </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(product._id)}
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

/*
import { userRequest } from "../../resources/requestMethods"

  const [products, setProducts] = useState([])
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("products")
        setProducts(res.data)
      } catch {}
    };
    getUsers()
  }, [])
*/
