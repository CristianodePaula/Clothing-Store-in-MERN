import styled from 'styled-components'

export const Container = styled.div`
    height: 240px;
    width: 640px;
    padding: 20px;
    box-shadow: 10px 10px 5px #909090;
    border: 1px solid black;
    border-radius: 10px;
    transition: 0.5s ease-in-out;
    &:hover {
        transform: scale(1.05)
    }
`
export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    text-align: center;
    border-radius: 5px;
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
    color: #fff;
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