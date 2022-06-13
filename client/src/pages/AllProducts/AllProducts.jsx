import React, { useState } from 'react'
import {
  Container,
  Title,
  Wrapper,
  Filter,
  FilterText,
  Select,
  Option
} from './AllProductsStyle'
import Annoucement from '../components/Annoucement'
import AllProducts from '../components/AllProducts'
import Newsletter from '../components/Newsletter'
import { useLocation } from 'react-router-dom'
import Footer from '../components/Footer'

const ProdutctList = () => {
  const location = useLocation()  
  const cat = location.pathname.split("/")[2] 
  const [filters, setFilters] = useState({}) 
  const [sort, setSort] = useState("newest") 

  const handleFilters = (e) => { 
    const value = e.target.value
    setFilters({
      ...filters, 
      [e.target.name]: value,
    })
  }
  console.log(filters)

  return (
    <Container>
      <Annoucement />
      <Title>{cat}</Title>
      <Wrapper>
        <Filter>
          <FilterText>Selecione</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled> Color </Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>black</Option>
            <Option>green</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Selecione</FilterText>
          <Select name="size" onChange={handleFilters}>
            <Option disabled> Tamanho </Option>
            <Option>p</Option>
            <Option>m</Option>
            <Option>g</Option>
            <Option>gg</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Selecione</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Recente</Option>
            <Option value="asc">Preço (alto)</Option>
            <Option value="desc">Preço (baixo)</Option>
          </Select>
        </Filter>
      </Wrapper>
      <AllProducts cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  )
}
export default ProdutctList
