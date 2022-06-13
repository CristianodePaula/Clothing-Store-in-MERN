import styled, {
    keyframes
} from 'styled-components'
import {
    mobile
} from '../../resources/Responsive'

export const topToBottomTitle = keyframes `
  0% { 
    transform: scale(0.5); 
    opacity: 0
  }
  100% { 
    transform: scale(1); 
    opacity: 1
  }
`
export const Container = styled.div `
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Nanum Gothic', sans-serif;
    animation: ${topToBottomTitle} 1s ease-in-out;
    transition: all .4s ease-in-out;
    &:hover { 
        transform: scale(1.05); 
    }
`
export const Image = styled.img `
    width: 380px;
    height: 380px;
    border-radius: 50%;
    object-fit: cover;
    transition: all .4s ease-in-out;
    &:hover { 
        transform: scale(1.05);
    }
    ${mobile({
        width: '300px',
        height: '300px',
        margin: '10px'
    })}
`
export const Info = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const Title = styled.h1 `
    color: white;
    margin-bottom: 20px;
    &:hover{
        color: darkred;
        transform: scale(0.9); 
        transition: all 1s ease-in-out;
    } 

    ${mobile({
        fontSize: '15px'
    })}
`
export const Button = styled.button `
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
    &:hover { 
        color: darkred;
        transform: scale(1.2); 
        transition: all 0.8s ease; 
    } 
    ${mobile({
        padding: '8px',
        fontSize: '10px'
    })}
`