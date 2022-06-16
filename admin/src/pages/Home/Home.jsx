import React from 'react'
import styled from 'styled-components'
import Sidebar from '../../components/Sidebar/Sidebar'
import Topbar from '../../components/Topbar/Topbar'
import Widgets from '../../components/Widgets/Widgets'
import Statistics from '../../components/Statistics/Statistics'

const Container = styled.div`
  display: flex;
`
const TopContainer = styled.div`
  flex: 6;
`
export default function Home() {
  return (
    <Container>
      <Sidebar />
      <TopContainer>
        <Topbar />
        <Widgets />
        <Statistics />
      </TopContainer>
    </Container>
  )
}
