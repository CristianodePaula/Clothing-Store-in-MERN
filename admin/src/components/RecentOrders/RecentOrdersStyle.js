import styled, { keyframes } from 'styled-components'
import {
    mobile
} from '../../resources/Responsive'
//${mobile({})}

export const scaleBox = keyframes`
    0% { 
        transform: scale(0.7);
        opacity: 0
    }
    100% { 
        transform: scale(1);
        opacity: 1
    }
`

export const Container = styled.div`
    width: 550px;
    padding: 20px;
    box-shadow: 10px 10px 10px #909090;
    border: 1px solid black;
    border-radius: 10px;
    transition: 0.5s ease-in-out;
    &:hover {
        transform: scale(1.05)
    }
    animation: ${scaleBox} 2s ease-in-out;
    ${mobile({
    width: '330px',
})}
`
export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-radius: 5px;
    overflow: hidden;
    ${mobile({
    width: '50%'
})}
`
export const H1 = styled.p`
    font-size: 18px;
    align-items: flex-start;
    ${mobile({
    fontSize: '10px'
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
    color: #fff;
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
    fontSize: '10px'
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