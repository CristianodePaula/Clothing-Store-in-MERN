import styled,  {keyframes } from 'styled-components'
import { mobile } from '../../resources/Responsive'

export const bottomTopBox = keyframes`
  0% { 
    transform: translateY(100px);
    opacity: 0
  }
  100% { 
    transform: translateY(0); 
    opacity: 1
  }
`
export const Container = styled.div`
  height: 90vh;
  width: 100vw;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
    url("https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
    center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`
export const BoxLogin = styled.div`
  height: 300px;
  width: 420px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  font-family: 'Nanum Gothic', sans-serif;
  animation: ${bottomTopBox} 2s ease-in-out;
  ${mobile({ 
    height: '250px',
    width: '320px'
  })}
`
export const Title = styled.h1`
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ 
    fontSize: '20px',
  })}
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`
export const Input = styled.input`
  height: 35px;
  width: 300px;
  margin-bottom: 20px;
  padding-left: 5px; 
  ${mobile({ 
    height: '25px',
    width: '250px'
  })}
`
export const Button = styled.button`
  width: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
  background-color: lightseagreen;
  border: none;
  color: white;
  margin-bottom: 10px;
  cursor: pointer;  
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
  ${mobile({ 
    height: '25px',
    width: '100px',
    fontSize: '10px'
  })}
`
export const NavLink = styled.span`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  ${mobile({ 
    fontSize: '10px',
})}
`
export const Error = styled.span`
  color: red;
`