import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  width: 12vw;
  padding: 10px;
`
export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s ease-in-out;
  &:hover {
    transform: scale(0.8)
  }
`
export const LogoIcon = styled.a`
  color: black;
  font-size: 20px;
`
export const Logo = styled.h1`
  font-size: 15px;
  padding-left: 10px;
  color: white;
`
export const Box = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  transition: 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1)
  }
`
export const Icon = styled.a`
  font-size: 16px;
  color: navy;
  cursor: pointer;
`
export const Title = styled.h1`
  font-size: 16px;
  color: grey;
  margin-top: 20px;
`
export const Item = styled.span`
  font-size: 14px;
  margin-left: 12px;
  cursor: pointer;
`
