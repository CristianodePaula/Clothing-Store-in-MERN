import styled from 'styled-components'
import { mobile } from '../../resources/Responsive'

export const Container = styled.div `
  display: flex;
  background-image: linear-gradient(to bottom right, black, grey, gainsboro, white);
  ${mobile({
    minHeight:'100vh'
  })}
`
export const TopContainer = styled.div `
  flex: 6;  
`
export const Wrapper = styled.div `
`
export const Title = styled.h1 `
  font-size: 25px;
  margin-top: 50px;
  margin-left: 50px;
  color: blue;
  text-shadow: 5px 5px 5px #000;
`
export const CProduct = styled.div `
  height: 500px;
  width: 800px;
  border-radius: 20px;
  background: silver;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 50px;
`
export const Image = styled.img `
  height: 360px;
  width: 300px;
  object-fit: cover;
`
export const CDesc = styled.form `
  display: flex;
  flex-direction: column;
`
export const Desc = styled.input `
  font-size: 15px;
  margin-bottom: 20px;
`
export const Button = styled.button `
  margin-top: 20px;
  text-align: center;
  background-color: darkgreen;
  color: white;
  padding: 10px;
  font-size: 15px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1)
  }
`
export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`
export const FileInput = styled.input`
  display: none;
  outline: 0px;
`
export const Label = styled.label` 
  display: flex;
  text-align: center;
  justify-content: center;
  margin: 10px 0;
  font-size: 15px;
  font-weight: 400;
  color: white;
  text-shadow: 3px 3px 4px black;
`
export const Input = styled.input`
  padding: 8px;
  background-color: white;
  border: none;
  border-radius: 10px;
  outline: none;
`
