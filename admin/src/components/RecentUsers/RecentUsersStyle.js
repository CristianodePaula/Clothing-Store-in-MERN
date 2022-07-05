import styled, {
  keyframes
} from 'styled-components'
import {
  mobile
} from '../../resources/Responsive'

export const rightToLeftBox = keyframes `
0% { 
  transform: translateY(40px); 
  opacity: 0
}
100% { 
  transform: translateY(0); 
  opacity: 1
}
`
export const Container = styled.div `
  padding: 20px;
  box-shadow: 10px 10px 5px #909090;
  border: 1px solid black;
  border-radius: 20px;
  transition: 0.5s ease-in-out; 
  &:hover {
    transform: scale(1.05)
  }
  margin: 10px;
  animation: ${rightToLeftBox } 2s ease-in-out;
  ${mobile({
  })}

`
export const Table = styled.table `
  width: 100%;
  border-collapse: collapse;
  border-radius: 5px;
  overflow: hidden;
  ${mobile({
    width: '50%'
  })}

`
export const H1 = styled.p`
  font-size: 18px;
  ${mobile({
    fontSize: '10px'
  })}
`
export const TBody = styled.tbody`
`
export const TBodyTR = styled.tr`
  background: darkgrey;
`
export const TD = styled.td `
  padding: 5px;
  font-size: 13px;
  color: white;
  ${mobile({
    fontSize: '8px'
  })}
`
export const Img = styled.img `
  height: 30px;
  width: 30px;
  object-fit:cover;
  border-radius: 50%;
`