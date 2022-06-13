import React from 'react'
import {
  Container,
  Image,
  BoxAbout,
  Title,
  Paragraph
} from './AboutStyle'

export default function About() {
  return (
    <Container>
        <Image src="https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <BoxAbout>
          <Title>Conheça a nossa história</Title>
          <Paragraph>
          Somos uma loja online que oferece o melhor para os nossos clientes, 
          onde podemos atender todas as expectativas sobre a moda feminina, mascula e infantil
          sempre de olho nas tendências e lançamentos.
          Nossa loja oferece o que há de mais moderno e atual em todas as categorias de produtos.
          Temos como preocupação oferecer os melhores produtos com os melhores preços aliado 
          a um ótimo atendimento a você cliente, que é a pessoa mais importante para nós.
          </Paragraph>
        </BoxAbout>
    </Container>
  )
}
