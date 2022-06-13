
import styled, { keyframes } from 'styled-components'
import {mobile} from '../../resources/Responsive'

const topBottomImage = keyframes`
  0% { 
    transform: translateY(-30px); 
    opacity: 0
  }
  100% { 
    transform: translateY(0); 
    opacity: 1  
  }
`
const leftRightTitle = keyframes`
  0% { 
    transform: translateX(60px); 
    opacity: 0
  }
  100% { 
    transform: translateX(0); 
    opacity: 1
  }
`
export const rightLeftParagraph = keyframes`
  0% { 
    transform: scale(0.9); 
    opacity: 0
  }
  100% { 
    transform: scale(1); 
    opacity: 1
  }
`
export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  overflow: hidden;
  background: url("https://images.pexels.com/photos/911738/pexels-photo-911738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; 
`
export const Image = styled.img`
  top: 0;
  height: 30vh;
  width: 100%;
  object-fit: cover;
  animation: ${topBottomImage} 1.5s ease-in-out;
`
export const BoxAbout = styled.div`
  height: 30vh;
  width: 55vw;
  ${mobile({
    width: '75vw'
})} 
`
export const Title = styled.h1`
  text-align: center;
  margin: 35px;
  font-size: 45px;
  font-family: 'Nanum Gothic', sans-serif;
  animation: ${leftRightTitle} 2.3s ease-in-out;
  ${mobile({
    fontSize: '25px'
})} 
`
export const Paragraph = styled.p`
  font-size: 22px;
  margin: 40px;
  font-family: 'Quicksand', sans-serif;
  animation: ${rightLeftParagraph} 2s linear;
${mobile({
  fontSize: '15px'
})} 
`