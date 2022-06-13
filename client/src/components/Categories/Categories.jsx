import React from 'react'
import {
  Container,
  Title,
  CategorieBox
} from './CategoriesStyle'
import { dataCategories } from '../../resources/Data'
import CategoryItem from '../CategoryItem/CategoryItem'

export default function Categories() {
  return (
    <Container>
      <Title>Confira as tendências atuais</Title>
      <CategorieBox>
        {dataCategories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </CategorieBox>
    </Container>
  )
}