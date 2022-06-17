import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 10px;
`
export const TopContainer = styled.div`
  flex: 6;  
  padding: 10px;
`
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  border-radius: 15px;
  overflow: hidden;
`
export const THead = styled.thead`
    position: sticky;
    z-index: 100;
`
export const THeadTR = styled.tr`
    background: grey;
`
export const TH = styled.th`
    font-weight: normal;
    padding: 10px;
    color: white;
    text-transform: capitalize;
    font-weight: 600;
    font-size: 14px;
    :not(:last-of-type) {
        border-right: 1px solid black;
    }
    :first-of-type {
        width: 1%;
        white-space: nowrap;
    }
`
export const TBody = styled.tbody``
export const TBodyTR = styled.tr`
    background: gainsboro;
`
export const TD = styled.td`
    padding: 10px;
    border: 1px solid grey;
    font-size: 14px;
`
export const Button = styled.button`
  background: red;
  width: 80px;
  padding: 5px;
  color: white;
  border: 1px solid grey;
  border-radius: 5px
`