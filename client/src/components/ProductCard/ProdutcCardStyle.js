
import styled, {keyframes} from 'styled-components'

export const toRevalProduct = keyframes`
    0% { 
        transform: scale(0.8); 
        opacity: 0
    }
    100% { 
        transform: scale(1); 
        opacity: 1
    }
`
export const Info = styled.div`
    opacity: 0.3;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    display: flex;
    border-radius: 5px;
    align-items: center;
    justify-content: center; 
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    cursor: pointer;
    z-index: 2;
`
export const Container = styled.div`
    flex: 1;
    margin: 20px;
    min-width: 260px;
    min-height: 340px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: aliceblue;
    position: relative;
    border: 1px solid  gainsboro; 
    border-radius: 10px;
    animation: ${toRevalProduct} 2.5s ease-in-out;
    &:hover ${Info} { 
        opacity: 1 
    }
`
export const Image = styled.img`
    height: 300px;
    width: 200px;
    z-index: 2;
    border-radius: 5px;
    object-fit: cover;
`
export const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover { 
        background-color: #e9f5f5; 
        transform: scale(1.2) 
    }
`