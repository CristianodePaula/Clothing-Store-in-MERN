import React from 'react'
import {
  Container,
  Title,
  Advertisings
} from './AllCategoriesStyle'
import { dataCategories } from '../../resources/Data'
import CategoryItem from '../../components/CategoryItem/CategoryItem'

export default function Categories() {
  return (
    <Container>
      <Title>Confira tendências atuais</Title>
      <Advertisings>
        {dataCategories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Advertisings>
    </Container>
  )
}