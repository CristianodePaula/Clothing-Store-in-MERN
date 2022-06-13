import styled from 'styled-components'
import {
    mobile
} from '../../resources/Responsive'

export const Container = styled.div `
    height: 30vh;
    display: grid;
    padding: 20px 0px 0px 60px;
    grid-template-columns: repeat(4, 1fr);
    background: linear-gradient(to bottom left, white, black);
    ${mobile({
        height: '60vh',
        gridTemplateColumns: 'repeat(2, 1fr)',
    })} 
`
export const SubCont = styled.div`
    flex: 1;
    width: 240px;    
    ${mobile({
        width: '150px'    
    })} 
`
export const Title = styled.h1 `
    color: darkred; 
    font-size: 22px; 
    margin-bottom: 10px; 
    cursor: pointer;
    &:hover { 
        color: brown;
    } 
    ${mobile({
    fontSize: '17px'
})}
`
export const Paragraph = styled.h1 `
    font-size: 15px; 
    margin-bottom: 10px;
    font-weight: 500;
    font-family: 'Quicksand', sans-serif;
    &:hover { 
        color: bronw;
    } 
    ${mobile({
        fontSize: '12px'
    })} 
`
export const Item = styled.p `
    font-size: 15px; 
    margin-bottom: 5px;
    cursor: pointer;
    font-weight: 500;
    font-family: 'Quicksand', sans-serif;
    &:hover { 
        color: darkred;
        transform: scale(1.02); 
        transition: all 0.3s ease;
    } 
    ${mobile({
        fontSize: '12px'
    })} 
`
export const Icon = styled.a `
    font-size: 25px;
    margin-right: 10px;
    cursor: pointer;
    ${mobile({
        fontSize: '20px'
    })} 
`