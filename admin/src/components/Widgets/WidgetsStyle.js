import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

`
export const WidgetBox = styled.div`
  height: 120px;
  width: 210px;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 10px 10px 5px #909090;
  margin: 10px;
  transition: 0.5s ease-in-out;
  &:hover {
    transform: scale(1.05)
  }
`