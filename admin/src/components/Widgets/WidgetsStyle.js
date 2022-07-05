import styled, {
  keyframes
} from 'styled-components'

import {
  mobile
} from '../../resources/Responsive'
//${mobile({})}

export const topToBottomBox = keyframes `
0% { 
  transform: translateY(-40px); 
  opacity: 0
}
100% { 
  transform: translateY(0); 
  opacity: 1
}
`
export const Container = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  animation: ${topToBottomBox } 2s ease-in-out;
`
export const WidgetBox = styled.div `
  height: 120px;
  width: 210px;
  background: #B22222;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 10px 10px 10px #363636;
  margin: 10px;
  transition: 0.5s ease-in-out;
  &:hover {
    transform: scale(1.05)
  }
  ${mobile({
    height: '60px',
    width: '120px'
  })}
`
export const Box = styled.div `
  margin-top: 0;
  font-size: 20px;
  padding: 10px;
  ${mobile({
    padding: '2px'
  })}
`
export const H3 = styled.h3 `
  font-size: 20px;
  padding: 10px;
  margin-top: 0;
  ${mobile({
    fontSize: '10px',
    padding: '2px'
  })}
`
export const Span = styled.span `
  color: white;
  ${mobile({
    fontSize: '10px',
  })}
`