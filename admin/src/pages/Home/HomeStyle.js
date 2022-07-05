import styled from 'styled-components'
import {mobile} from '../../resources/Responsive'

export const Container = styled.div`
  display: flex;  
  background-image: linear-gradient(to bottom right, black, grey, gainsboro, white);
  ${mobile({
    flexDirection: 'column',
    minHeight: '100vh',
  
  })}
`
export const Top = styled.div` 
  flex: 6;   
  ${mobile({
    flexDirection: 'column'
  })}
`
export const Center = styled.div`
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${mobile({
    flexDirection: 'column'
  })}
`
export const Bottom = styled.div`
  display: flex;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${mobile({
    flexDirection: 'column'
  })}
`