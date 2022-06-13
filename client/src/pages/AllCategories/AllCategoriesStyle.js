import styled, { keyframes } from 'styled-components'
import { mobile } from '../../resources/Responsive'

export const topBottomTitle = keyframes`
0% { 
  transform: translateY(40px); 
  opacity: 0
}
100% { 
  transform: translateY(0); 
  opacity: 1
}
`
export const Container = styled.div`
    background: #d3d3d3;
`
export const Advertisings = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({
  padding: '0px',
  flexDirection: 'column'
})}
`
export const Title = styled.div` 
    font-size :40px;  
    display: flex;
    padding: 30px;
    align-items: center;
    justify-content: center;
    font-family: 'Nanum Gothic', sans-serif;
    animation: ${topBottomTitle} 2s ease-in-out;
    ${mobile({
  fontSize: '20px'
})}
`