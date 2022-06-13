import styled from "styled-components"
import { mobile } from '../../resources/Responsive'

export const Container = styled.div`
  padding: 20px;
`
export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`
export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`
export const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => 
    props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => 
    props.type === "filled" && "white"};
`
export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection: 'column'
})} 
`
export const Info = styled.div`
  flex: 3;
`
export const Product = styled.div`
  margin-bottom: 20px;
`
export const ProductInfo = styled.div`
  display: flex;
  ${mobile({
    flexDirection: 'column' 
})} 
`
export const Image = styled.img`
  height: 340px;
  width: 250px;
  object-fit: cover;
  ${mobile({
    height: '300px',
    width: '200px',
    marginLeft: 'auto',
    marginRight: 'auto',
})}
`
export const Details = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 15px;

  ${mobile({
    justifyContent: "center",
    textAlign: "center"
})}
`
export const ProductName = styled.span`
  margin-bottom: 10px;
`
export const ProductId = styled.span`
  margin-bottom: 10px;
`
export const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`
export const ProductSize = styled.span`
  margin-bottom: 10px;
`
export const ProductAmount = styled.div`
  margin-bottom: 10px;
`
export const ProductPrice = styled.div`
  margin-bottom: 10px;
`
export const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 60vh;
  ${mobile({
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '350px',
})}
`
export const STitle = styled.h1`
  font-weight: 200;
`
export const Item = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "25px"};
`
export const ItemText = styled.span``
export const ItemPrice = styled.span``

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;

`
