import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  TopContainer,
  BtnCreate,
  Wrapper,
  Table,
  THead,
  TBody,
  THeadTR,
  TH,
  TBodyTR,
  TD,
  Img,
  BtnEdit,
} from './CategoriesStyle'
import Sidebar from '../../components/Sidebar/Sidebar'
import Topbar from '../../components/Topbar/Topbar'
import { userRequest } from "../../resources/requestMethods"
import { useDispatch } from "react-redux"
import { deleteCategorie } from '../../redux/apiCalls'

export default function Categories() {

  const [categories, setCategories] = useState([])
  const dispatch = useDispatch()


  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await userRequest.get("categories")
        setCategories(res.data)
      } catch { }
    }
    getCategories()
  }, [])

  const handleDelete = (id) => {
    deleteCategorie(id, dispatch)
  }

  return (
    <Container>
      <Sidebar />
      <TopContainer>
        <Topbar />
        <Wrapper>
          <Link to={"/newcategorie"}>
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
                <TH>Nome</TH>
                <TH>Excluir</TH>
              </THeadTR>
            </THead>
            <TBody>
              {categories.map((categorie) => {
                return (
                  <TBodyTR key={categorie.id}>
                    <TD>
                      <Img src={categorie.img
                        ||
                        "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
                      } />
                    </TD>
                    <TD>{categorie.categorie}</TD>
                    <TD>
                      <BtnEdit
                        onClick={() => handleDelete(categorie._id)}
                        type="button"
                      > Excluir
                      </BtnEdit>
                    </TD>
                  </TBodyTR>
                )
              })}
            </TBody>
          </Table>
        </Wrapper>
      </TopContainer>
    </Container >
  )
}