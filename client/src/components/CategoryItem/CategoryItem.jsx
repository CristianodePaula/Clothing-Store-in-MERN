import React from 'react'
import {
    Container,
    Image,
    Info,
    Title,
    Button
} from './CategoryItemStyle'
import { Link } from 'react-router-dom'

export default function CategoryItem({ item }) {
    return (
        <Container>
            <Link to={`/products/${item.cat}`}>
                <Image src={item.img} />
                <Info>
                    <Title>{item.title}</Title>
                    <Button>COMPRE AGORA</Button>
                </Info>
            </Link>
        </Container>
    )
}