import styled, { keyframes } from 'styled-components'
import { mobile } from '../../resources/Responsive'

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
export const scaleBox = keyframes`
    0% { 
        transform: scale(0.2);
        opacity: 0
    }
    100% { 
        transform: scale(1);
        opacity: 1
    }
`
export const Container = styled.div`
  display: flex;
  background-image: linear-gradient(to bottom right, black, grey, gainsboro, white);
  ${mobile({
    minHeight:'100vh',
  })}
`
export const TopContainer = styled.div`
  flex: 6;  
`
export const Wrapper = styled.div`
  padding: 50px;
  animation: ${topToBottomBox } 2s ease-in-out;
`
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  border-radius: 15px;
  overflow: hidden;
  ${mobile({
    width: '50%'
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
    fontSize: '7px',
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
    fontSize: '7px',
  })}
`
export const Img = styled.img`
  height: 200px;
  width: 160px;
  object-fit:cover;
  ${mobile({
    height: '50px',
    width: '40px'
  })}
`
export const BtnCreate = styled.button`
  background: green;
  width: 80px;
  padding: 5px;
  color: white;
  border: 1px solid grey;
  border-radius: 5px;
  margin-bottom: 40px;
  transition: 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1)
  }
  animation: ${ scaleBox } 2s ease-in-out; 
  ${mobile({
    width: '40px',
    height: '20px',
    fontSize: '8px',
  })}
`
export const BtnEdit = styled.button`
  background: blue;
  width: 80px;
  padding: 5px;
  color: white;
  border: 1px solid grey;
  border-radius: 5px;
  margin-bottom: 20px;
  transition: 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1)
  }
  ${mobile({
    width: '40px',
    height: '20px',
    fontSize: '8px',
  })}
`
export const BtnDelete = styled.button`
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
    width: '40px',
    height: '20px',
    fontSize: '8px',
  })}
`