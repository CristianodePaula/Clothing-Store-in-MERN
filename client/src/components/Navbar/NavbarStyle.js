import styled from 'styled-components'
import { mobile } from '../../resources/Responsive'

export const Container = styled.div`
    height: 10vh;
    display: flex;
    align-items: center;
    padding: 30px;
`
export const BoxLeft = styled.div`
    flex: 1;
    display: flex;
    ${mobile({
    marginLeft: '-15px'
})} 
`
export const Title = styled.h1`
    font-size: 15px;
    text-align: center;
    ${mobile({
    display: 'none'
})} 
`
export const Logo = styled.a`    
    color: red;
    margin-right: 10px;
    font-size: 16px;
    ${mobile({
    marginRight: '0px'
})} 
`
export const BoxCenter = styled.div`
    flex: 1;
    display: flex;
    ${mobile({
    margin: '0px 20px 0px 20px'
})} 
`
export const Menu = styled.div`
    display: flex;
    top: 0;
    position sticky;
`
export const MenuLink = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
    font-size: 20px;
    font-family: 'Nanum Gothic', sans-serif;
    cursor: pointer;
    &:hover { 
        color: red;
        transform: scale(1.1); 
        transition: all 0.3s ease;
    }
    ${mobile({
    fontSize: '15px',
    margin: '10px'
})}  
`
export const BoxRight = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({
    flexDirection: 'column'
})}  
`
export const UserLink = styled.span`
    margin-right: 10px;
    font-family: 'Nanum Gothic', sans-serif;
    ${mobile({
    fontSize: '10px',
    margin: '2px',
})}  
`
export const Logout = styled.span`
    color: red;
    margin-top: 10px;
    font-size: 16px;
    cursor: pointer; 
    margin-left: 15px;
    font-family: 'Nanum Gothic', sans-serif;
    &:hover { 
        color: darkred;
        transform: scale(1.1); 
        transition: all 0.3s ease ;
    } 
    ${mobile({
    fontSize: '12px',
})} 
`