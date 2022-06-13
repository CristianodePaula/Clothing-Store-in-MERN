import styled, { keyframes } from 'styled-components'
import { mobile } from '../../resources/Responsive'

export const topToBottomTitle = keyframes `
  0% { 
    transform: translateX(-70px); 
    opacity: 0
  }
  100% { 
    transform: translateX(o); 
    opacity: 1
  }
`
export const Title = styled.div `
  font-size :40px;
  margin-top: 40px; 
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Nanum Gothic', sans-serif;
  animation: ${topToBottomTitle} 2.5s ease-in-out;
  ${mobile({
    fontSize: '20px',
    margin: '20px 0px -20px 0'
})}
`
export const Slide = styled.div `
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  flex-wrap: wrap;
  justify-content: space-between;
  ${mobile({
    gridTemplateColumns: '1fr'
})}
`