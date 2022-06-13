import React, { useState, useEffect } from 'react'
import {
  Container,
  Title,
  Top,
  TopButton,
  Bottom,
  Info,
  Product,
  ProductInfo,
  Image,
  Details,
  ProductName,
  ProductId,
  ProductPrice,
  ProductColor,
  ProductSize,
  ProductAmount,
  Summary,
  STitle,
  Item,
  ItemText,
  ItemPrice,
  Button
} from './CartStyle'
import { useNavigate, Link } from "react-router-dom"
import Announcement from "../../components/Annoucement/Annoucement"
import Footer from "../../components/Footer/Footer"
import { useSelector } from "react-redux"
import { userRequest } from "../../resources/requestMethods"
import StripeCheckout from "react-stripe-checkout"

const KEY = process.env.REACT_APP_STRIPE

export default function Carts() {

  const cart = useSelector((state) => state.cart)
  const [stripeToken, setStripeToken] = useState(null)
  const navigate = useNavigate()

  const onToken = (token) => {
    setStripeToken(token)
  }

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        navigate("/success", {
          stripeData: res.data,
          products: cart,
        })
      } catch { }
    }
    stripeToken && makeRequest()
  }, [stripeToken, cart.total, navigate])

  return (
    <>
      <Announcement />
      <Container>
        <Title>Seu Carrinho</Title>
        <Top>
          <Link to='/all'>
            <TopButton>Continue comprando</TopButton>
          </Link>
          <TopButton type="filled">Desfazer</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product>
                <ProductInfo>
                  <Image src={product.img} />
                  <Details>
                    <ProductName> {product.title} </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductAmount>
                      <b>Quantidade:</b> {product.quantity}
                    </ProductAmount>
                    <ProductPrice>
                      <b>Preço: R$</b> {product.price * product.quantity}
                    </ProductPrice>
                    <ProductSize>
                      <b>Tamanho:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductInfo>
              </Product>
            ))}
          </Info>
          <Summary>
            <STitle>Ordem de compra</STitle>
            <Item>
              <ItemText>Subtotal</ItemText>
              <ItemPrice> R$ {cart.total}</ItemPrice>
            </Item>
            <Item>
              <ItemText>Frete</ItemText>
              <ItemPrice> R$ 7.90</ItemPrice>
            </Item>
            <Item>
              <ItemText>Desconto</ItemText>
              <ItemPrice> R$ -7.90</ItemPrice>
            </Item>
            <Item type="total">
              <ItemText>Total</ItemText>
              <ItemPrice> R$ {cart.total}</ItemPrice>
            </Item>
            <StripeCheckout
              name="Capital Shop"
              image="https://images.pexels.com/photos/5625123/pexels-photo-5625123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              billingAddress
              shippingAddress
              description={`O valor total é R$ ${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>Finalizar pedido</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Container>
      <Footer />
    </>
  )
}

