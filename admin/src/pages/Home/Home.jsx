import { useState, useEffect, useMemo } from 'react'
import {
  Container,
  Top,
  Center,
  Bottom
} from './HomeStyle'
import Sidebar from '../../components/Sidebar/Sidebar'
import Topbar from '../../components/Topbar/Topbar'
import Widgets from '../../components/Widgets/Widgets'
import Chart from '../../components/Chart/Chart'
import RecentUsers from '../../components/RecentUsers/RecentUsers'
import RecentOrders from '../../components/RecentOrders/RecentOrders'
import { userRequest } from "../../resources/requestMethods"

export default function Home() {

  const [userStats, setUserStats] = useState([])

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  )

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats")
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        )
      } catch { }
    }
    getStats()
  }, [MONTHS])

  return (

    <Container>
        <Sidebar />
      <Top>
      <Topbar />
        <Center>
          <Widgets />
          <Chart
            data={userStats}
            title="User Analytics"
            grid
            dataKey="Active User"
          />
        </Center>
        <Bottom>
          <RecentOrders />
          <RecentUsers />
        </Bottom>
      </Top>
    </Container>

  )
}
