import styled from 'styled-components'
import { mobile } from '../../resources/Responsive'

export const Container = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({
    justifyContent: "space-between",
    maxWidth: '100vw'
  })}
`
export const BoxSettings = styled.div`
  display: flex;
  align-items: flex-end;
  text-align: center;
`
export const BoxLinks = styled.div`
  display: flex;
  align-items: flex-end;
  display: none;
  ${mobile({
    display: 'inline',
  })}
`
export const Item = styled.span`
  color: white;
  margin-left: 10px;
  font-size: 10px;
` 
export const ImageUser = styled.img`
  height: 30px;
  width: 30px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 15px;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1)
  }
  ${mobile({
    height: '20px',
    width: '20px;',
    marginRight: '7px'
  })}
`
export const Icon = styled.a`
  font-size: 20px;
  margin-right: 15px;
  color: navy;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  &:hover {
    transform: scale(1.2)
  }
  ${mobile({
    fontSize: '15px',
    marginRight: '7px'
  })}
`
/* --- ORIGINAL
import styled from 'styled-components'

export const Container = styled.div`
  height: 2vh;
  width: 84vw;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
export const BoxSettings = styled.div`
  display: flex;
  align-items: flex-end;
`
export const ImageUser = styled.img`
  height: 30px;
  width: 30px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 15px;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1)
  }
`
export const Icon = styled.a`
  font-size: 20px;
  margin-right: 15px;
  color: navy;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  &:hover {
    transform: scale(1.2)
  }
`

*/