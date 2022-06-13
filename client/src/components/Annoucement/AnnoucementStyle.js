import styled from 'styled-components'
import { mobile} from '../../resources/Responsive'

export const Container = styled.div `
    height: 30px;
    background: black;
    color: white;
    display: flex;
    justify-content: center;
    font-size: 15px;
    color: red;
    align-items: center;
    font-family: 'Quicksand', sans-serif;
    ${mobile({
        height: '25px',
        fontSize: '10px'
        
    })} 
`