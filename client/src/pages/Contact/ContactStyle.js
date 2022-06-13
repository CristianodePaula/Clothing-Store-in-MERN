
import styled, { keyframes } from 'styled-components'
import { mobile } from '../../resources/Responsive'

export const topBottomImage = keyframes`
0% { 
  transform: translateX(-100px); 
  opacity: 0
}
100% { 
  transform: translateY(0); 
  opacity: 1
}
`
export const topBottomBox = keyframes`
0% { 
  transform: translate(50%, 50%) rotate(90deg);
  opacity: 0
}
100% { 
  transform: translateY(0); 
  opacity: 1
}
`
export const Container = styled.div`
  height: 100vh;
  background: url("https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-around;
  padding: 100px;
  align-items: center;
  overflow: hidden;
  ${mobile({
    flexDirection: 'column'
})} 
`
export const Image = styled.img`
  height: 480px;
  width: 400px;
  object-fit: cover;
  animation: ${topBottomImage} 2.5s ease-in-out;
  ${mobile({
    height: '200px',
    marginBottom: '20px'
})} 
`
export const BoxContact = styled.form`
  height: 400px;
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid grey;
  border-radius: 10px;
  object-fit: cover;
  padding: 20px;
  animation: ${topBottomBox} 2s ease-in-out;
  ${mobile({
    height: '300px',
    width: '350px'
})} 
`
export const Input = styled.input`
  height: 30px;
  width: 320px;
  opacity: 0.5;
  border-radius: 5px;
  border: none;
  padding: 10px;
  margin-bottom: 25px;
  outline: 0px;
  ::placeholder {
    font-size: 15px;
}
${mobile({
  height: '25px',
  width: '280px'
})} 
`
export const TextArea = styled.textarea`
  height: 150px;
  width: 320px;
  opacity : 0.5;
  border: none;
  padding: 10px;
  resize: none;
  outline: 0px;
  ::placeholder {
    font-size: 15px;
  }
  ${mobile({
    width: '280px'
  })} 
`
export const Button = styled.button`
  background: lightseagreen;
  border: none;
  padding: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  height: 30px;
  width: 120px;
  cursor: pointer;
  &:hover {
    background: red;
    color: white;
    transform: scale(1.05); 
    transition: all 0.5s ease;
  }
  ${mobile({
    padding: '15px',
    width: '80px'
  })} 
`