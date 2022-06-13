
import styled from 'styled-components'
import { mobile } from '../../resources/Responsive'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
${mobile({ 
  display: 'flex',
  flexDirection: 'column'
})}
`
export const ImgContainer = styled.div`
  flex: 1;
`
export const Image = styled.img`
  height: 500px; 
  width: 400px;
  object-fit: cover;
  ${mobile({ 
    height: '350px', 
    width: '250px'
  })}
`
export const InfoContainer = styled.div`
  flex: 1;
  ${mobile({ 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px'
  })}
`
export const Title = styled.h1`
  font-weight: 200;
  text-transform: uppercase;
  margin-bottom: 20px;
  ${mobile({ 
    fontSize: '20px'
  })}
`
export const Price = styled.span`
  font-weight: 100;
  font-size: 30px;
  ${mobile({ 
    fontSize: '20px'
  })}
`
export const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`
export const Filter = styled.div`
  display: flex;
  align-items: center;
`
export const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  ${mobile({ 
    fontSize: '15px'
  })}
`
export const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`
export const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`
export const FilterSizeOption = styled.option``

export const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const AmountCont = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`
export const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  ${mobile({ 
    fontSize: '10px'
  })}
`
export const Button = styled.button`
  padding: 10px;
  border: 1px solid black;
  border-radius: 20px;
  background-color: green;
  color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: darkgreen;
  }
  ${mobile({ 
    fontSize: '10px',
    padding: '5px',
    width: '300px',
    marginLeft: '20px'
  })}
`
export const Desc = styled.p`
  margin: 40px 0px 0px 0px;
  font-size: 18px;
  width: 400px;
  ${mobile({ 
    fontSize: '15px',
    display: 'flex',
    width: '300px',
    textAlign: 'center'
  })}

`