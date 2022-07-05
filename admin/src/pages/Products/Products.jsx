import React, { useEffect } from 'react'
import {
  Container,
  TopContainer,
  Wrapper,
  BtnCreate,
  Table,
  THead,
  TBody,
  THeadTR,
  TH,
  TBodyTR,
  TD,
  Img,
  BtnEdit,
  BtnDelete,
} from './ProductsStyle'
import { Link } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'
import Topbar from '../../components/Topbar/Topbar'
import { useDispatch, useSelector } from "react-redux"
import { deleteProduct, getProducts } from '../../redux/apiCalls'

export default function Products() {

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
        <Wrapper>
          <Link to={"/newproduct"}>
            <BtnCreate
              type='button'
              className='btnEdit'
            > Criar
            </BtnCreate>
          </Link>
          <Table>
            <THead>
              <THeadTR>
                <TH>Imagem</TH>
                <TH>Produto</TH>
                <TH>Descrição</TH>
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
                      <BtnEdit
                          type='button'
                          className='btnEdit'
                        > Editar
                        </BtnEdit>
                      </Link>
                      <BtnDelete
                        onClick={() => handleDelete(product._id)}
                        type="button"
                      > Excluir
                      </BtnDelete>
                    </TD>
                  </TBodyTR>
                )
              })}
            </TBody>
          </Table>
        </Wrapper>
      </TopContainer>
    </Container>
  )
}
