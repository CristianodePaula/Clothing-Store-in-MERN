import React, { useState} from 'react'
import {
    Container,
    Title,
    Wrapper,
    BoxFilter,
    FilterText,
    Select,
    Option
} from './ProductFilteredStyle' 
import Annoucement  from '../Annoucement/Annoucement'
import ProductsSample  from '../ProductSample/ProductSample'
import Search from '../Search/Search'
import Footer from '../Footer/Footer'
import { useLocation } from 'react-router-dom'

const ProdutctList = () => {
    const location = useLocation()    
    const cat =location.pathname.split("/")[2] 
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
            <BoxFilter>
                <FilterText>Selecione</FilterText>
                <Select name="color" onChange={handleFilters}>
                    <Option disabled> Color </Option>
                        <Option>red</Option>
                        <Option>blue</Option>
                        <Option>black</Option>
                        <Option>green</Option>
                </Select>    
            </BoxFilter>
            <BoxFilter>
                <FilterText>Selecione</FilterText>
                <Select name="size" onChange={handleFilters}>
                    <Option disabled> Tamanho </Option>
                        <Option>p</Option>
                        <Option>m</Option>
                        <Option>g</Option>
                        <Option>gg</Option>
                </Select>    
            </BoxFilter>
            <BoxFilter>
                <FilterText>Selecione</FilterText>
                <Select onChange={(e) => setSort(e.target.value)}>
                    <Option value="newest">Recente</Option>
                    <Option value="asc">Preço (alto)</Option>
                    <Option value="desc">Preço (baixo)</Option>
                </Select>
            </BoxFilter>
          </Wrapper>      
            <ProductsSample cat={cat} filters={filters} sort={sort}/> 
            <Search />
            <Footer />
        </Container>
    )
}
export default ProdutctList