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
