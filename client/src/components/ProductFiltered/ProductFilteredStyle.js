import styled from 'styled-components'
import { mobile } from '../../resources/Responsive'

export const Container = styled.div``
export const Title = styled.h1``

export const Wrapper = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    margin: 50px 80px 0 80px;
`
export const BoxFilter = styled.div``
export const FilterText = styled.span`
    margin: 20px;
`
export const Select = styled.select`
  padding: 10px; 
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`
export const Option = styled.option``