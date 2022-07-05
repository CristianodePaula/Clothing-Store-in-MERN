import styled, { keyframes } from 'styled-components'
import { mobile } from '../../resources/Responsive'

export const topToBottomBox = keyframes `
0% { 
  transform: translateX(-40px); 
  opacity: 0
}
100% { 
  transform: translateX(0); 
  opacity: 1
}
`
export const Container = styled.div`
  display: flex;
  background-image: linear-gradient(to bottom right, black, grey, gainsboro, white);
  ${mobile({
    minHeight:'100vh'
  })}
`
export const TopContainer = styled.div`
  flex: 6;  
`
export const Wrapper = styled.div`
  padding: 40px;
  margin-top: 80px;
  display: flex;
  fkex-direction: column;
  align-items: center;
  justify-content: center;
  
  animation: ${topToBottomBox } 2s ease-in-out;
  ${mobile({
    marginTop: '60px'
  })}
`
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  border-radius: 15px;
  overflow: hidden;
  ${mobile({
    width: '80%'
  })}
`
export const THead = styled.thead`
    position: sticky;
    z-index: 100;
`
export const THeadTR = styled.tr`
    background: grey;
`
export const TH = styled.th`
    font-weight: normal;
    padding: 10px;
    color: white;
    text-transform: capitalize;
    font-weight: 600;
    font-size: 14px;
    :not(:last-of-type) {
        border-right: 1px solid black;
    }
    :first-of-type {
        width: 1%;
        white-space: nowrap;
    }
    ${mobile({
      fontSize: '8px'
    })}
`
export const TBody = styled.tbody``
export const TBodyTR = styled.tr`
    background: gainsboro;
`
export const TD = styled.td`
    padding: 10px;
    border: 1px solid grey;
    font-size: 14px;
    ${mobile({
      fontSize: '8px'
    })}
`
export const Button = styled.button`
  background: red;
  width: 80px;
  padding: 5px;
  color: white;
  border: 1px solid grey;
  border-radius: 5px
  transition: 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1)
  }
  ${mobile({
    width: '50px'
  })}
`