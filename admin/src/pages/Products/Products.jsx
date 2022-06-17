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
  Img,
  Button
} from './ProductsStyle'
import { Link } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'
import Topbar from '../../components/Topbar/Topbar'
import { useDispatch, useSelector } from "react-redux"
import { deleteProduct, getProducts } from '../../redux/apiCalls'

export default function UsersList() {

  const products = useSelector((state) => state.product.products)
  const dispatch = useDispatch()

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
        <Table>
          <THead>
            <THeadTR>
              <TH>Imagem</TH>
              <TH>Produto</TH>
              <TH>Produto</TH>
              <TH>Categoria</TH>
              <TH>Tamanho</TH>
              <TH>Editar</TH>
            </THeadTR>
          </THead>
          <TBody>
            {products.map((product) => {
              return (
                <TBodyTR key={product.id}>
                  <TD>
                    <Img src={product.img} />
                  </TD>
                  <TD>{product.title}</TD>
                  <TD>{product.desc}</TD>
                  <TD>{product.categories}</TD>
                  <TD>{product.size}</TD>
                  <TD>
                    <Link to={`/product/${product._id}`}>
                      <Button
                        type='button'
                        className='btnEdit'
                      > Editar
                      </Button>
                    </Link>
                    <button
                      onClick={() => handleDelete(product._id)}
                      type="button"
                    > Excluir
                    </button>
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