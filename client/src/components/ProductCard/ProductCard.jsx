import React from 'react'
import {
    Container,
    Image,
    Info,
    Icon
} from './ProdutcCardStyle'
import { 
    FaShoppingCart, 
    FaSearchPlus, 
    FaHeart 
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ProductItem = ({ item }) => {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Icon>
                    <Link to='/cart'>
                        <FaShoppingCart />
                    </Link>
                </Icon>
                <Icon>
                    <Link to={`/product/${item._id}`}>
                        <FaSearchPlus />
                    </Link>
                </Icon>
                <Icon>
                    <Link to=''>
                        <FaHeart />
                    </Link>
                </Icon>
            </Info>
        </Container>
    )
}
export default ProductItem


