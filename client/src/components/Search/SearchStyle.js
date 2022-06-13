
import styled from 'styled-components'
import { mobile } from '../../resources/Responsive'

export const Container = styled.div`
    height: 70vh;
    background-image: url("https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const Title = styled.h1`
    font-size: 45px;
    margin-bottom: 60px;
    display: flex;
    text-align: center;
    font-family: 'Nanum Gothic', sans-serif;
    ${mobile({ 
      fontSize: '30px' 
    })}
`
export const BoxInput = styled.div`
    width: 60%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray; 
    ${mobile({ 
      height: '30px'
    })}
`
export const Input = styled.input`
    flex: 8;
    border: none;
    padding-left: 20px;
    outline: none;
`
export const Button = styled.button`
    flex: 1;
    border: none;
    background-color: red;
    color: white;
    cursor: pointer;
`