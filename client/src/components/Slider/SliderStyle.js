import styled, { keyframes } from 'styled-components'
import { mobile } from '../../resources/Responsive'

export const toRevalSlide = keyframes`
    0% { 
        transform: translateY(100px);
        opacity: 0;
    }
    100% { 
        transform: translateY(0);
    opacity: 1
    }
`
export const Container = styled.div`
    height: 90vh;
    background: black;
    display: flex;
    position: relative;
    align-items: center;
    overflow: hidden;
    .slide { 
        opacity: 0; 
        transition-duration: 2s ease 
    }
    .slide.active { 
        opacity: 1; 
        transition-duration: 2s; 
        transform: scale(1.08) 
    }
`
export const Gallery = styled.div`
    width: 100vw;
    display: flex;
    position: absolute;
    justify-content: center;
    text-align: center;
    color: white; 
    h1 {     
        position: absolute;
        left: 0;
        right: 0;
        bottom: 75%;    
        font-size: 35px 
    }
    p {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 20%;
        font-size: 25px;
    }
    animation: ${toRevalSlide} 2.5s ease-in-out;
`
export const Image = styled.img`
    width: 100vw;
    height: 100vh;
    border-radius: 20px;
    object-fit: cover;
`
export const Arrow = styled.a`
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    ${mobile({
    width: '30px',
    height: '30px'

})}
`