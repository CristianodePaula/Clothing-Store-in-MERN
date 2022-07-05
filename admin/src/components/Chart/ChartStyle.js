import styled, {
  keyframes
} from "styled-components"
import {
  mobile
} from '../../resources/Responsive'
//${mobile({})}

export const rightToLeftBox = keyframes `
0% { 
  transform: translateX(40px); 
  opacity: 0
}
100% { 
  transform: translateX(0); 
  opacity: 1
}
`
export const Container = styled.div ` 
    font-size: 20px;
`
export const BoxCharts = styled.div `
  height: 160px;
  width: 280px;
  padding: 20px;
  box-shadow: 10px 10px 5px #909090;
  border: 1px solid black;
  border-radius: 10px;
  transition: 0.5s ease-in-out;
  &:hover {
    transform: scale(1.05)
  }
  animation: ${rightToLeftBox } 2s ease-in-out;
  ${mobile({
    height: '100px',
    width: '180px'
  })}
`
export const H1 = styled.div `
${mobile({
   fontSize: '10px'
})}
`