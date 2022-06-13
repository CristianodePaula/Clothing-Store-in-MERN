import styled from 'styled-components'
import {
  mobile
} from '../../resources/Responsive'

export const Container = styled.div `
    background: #d3d3d3;
`
export const CategorieBox = styled.div `
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({
  padding: '0px',
  flexDirection: 'column'
})}
`
export const Title = styled.h1 ` 
    font-size :40px;  
    display: flex;
    padding: 30px;
    align-items: center;
    justify-content: center;
    font-family: 'Nanum Gothic', sans-serif;
    ${mobile({
      fontSize: '20px',
      margin: '-10px 0px -20px 0'
    })}
`