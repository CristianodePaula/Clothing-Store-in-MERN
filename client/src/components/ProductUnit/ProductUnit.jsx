import React, { useState, useEffect } from 'react'
import {
  Container,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
  Price,
  Filter,
  FilterContainer,
  FilterColor,
  FilterSize,
  FilterTitle,
  FilterSizeOption,
  AddContainer,
  AmountCont,
  Amount,
  Button
} from './ProductUnitStyle'
import Announcement from '../Annoucement/Annoucement'
import Footer from '../Footer/Footer'
import { IoIosAdd, IoIosRemove } from "react-icons/io"
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../../resources/requestMethods'
import { addProduct } from "../../redux/cartRedux"
import { useDispatch } from "react-redux"

const Product = () => {
  const location = useLocation()
  const id = location.pathname.split("/")[2]
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)
  const [color, setColor] = useState("")
  const [size, setSize] = useState("")
  const dispatch = useDispatch()

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id)
        setProduct(res.data)
      } catch { }
    }
    getProduct()
  }, [id])

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1)
    } else {
      setQuantity(quantity + 1)
    }
  }

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }))
  }

  return (
    <>
      <Announcement />
      <Container>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>

          <Price>R$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Cor</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Tamanho </FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountCont>
              <IoIosRemove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <IoIosAdd onClick={() => handleQuantity("inc")} />
            </AmountCont>
            <Button onClick={handleClick}>ADICIONE AO CARRINHO</Button>
          </AddContainer>
          <Desc>
            {product.desc}
          </Desc>
        </InfoContainer>
      </Container>
      <Footer />
    </>
  )
}

export default Product

