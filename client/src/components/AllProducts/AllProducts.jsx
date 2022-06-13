import React, { useState, useEffect } from 'react'
import { Title, Slide } from './AllProductsStyle'
import ProductCard from "../ProductCard/ProductCard"
import axios from 'axios'

const Products = ({ cat, filters, sort }) => {

    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    cat
                        ? `http://localhost:5000/api/products?category=${cat}`
                        : "http://localhost:5000/api/products"
                )
                setProducts(res.data)
            } catch (err) { }
        }
        getProducts()
    }, [cat])

    useEffect(() => {
        cat &&
            setFilteredProducts(
                products.filter((item) =>
                    Object.entries(filters).every(([key, value]) =>
                        item[key].includes(value)
                    )
                )
            )
    }, [products, cat, filters])

    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            )
        } else if (sort === "asc") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
            )
        } else {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            )
        }
    }, [sort])

    return (
        <div>
            <Title>Todos os produtos</Title>
            <Slide>
                {cat
                    ? filteredProducts.map((item) => <ProductCard item={item} key={item.id} />)
                    : products
                        .map((item) => <ProductCard item={item} key={item.id} />)}
            </Slide>
        </div>
    )
}
export default Products