import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 180px;
  width: 86vw;
  border-bottom: 1px solid black;
`
const WidgetBox = styled.div`
  height: 140px;
  width: 250px;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 10px 10px 5px #909090;
  margin: 10px;
  transition: 0.5s ease-in-out;
  &:hover {
    transform: scale(1.05)
  }
`

export default function Widget() {
  return (
    <Container>
        <WidgetBox>

        </WidgetBox>
        <WidgetBox>
          
        </WidgetBox>
        <WidgetBox>
          
        </WidgetBox>
        <WidgetBox>
          
        </WidgetBox>
    </Container>
  )
}
