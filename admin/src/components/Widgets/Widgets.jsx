import React, { useState, useEffect } from 'react'
import {
  Container,
  WidgetBox
} from './WidgetsStyle'
import { userRequest } from "../../resources/requestMethods"

export default function Widget() {

  const [income, setIncome] = useState([])
  const [perc, setPerc] = useState(0)

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/income")
        setIncome(res.data);
        setPerc((res.data[1].total * 100) / res.data[0].total - 100)
      } catch {}
    }
    getIncome()
  }, [])


  return (
    <Container>
        <WidgetBox>
        <span className="featuredMoney">${income[1]?.total}</span>
          <span className="featuredMoneyRate">
            %{Math.floor(perc)}{" "}
            {perc < 0 ? (
              <button className="featuredIcon negative" />
            ) : (
              <button className="featuredIcon" />
            )}
          </span>
        </WidgetBox>
        <WidgetBox>
          
        </WidgetBox>
        <WidgetBox>
          
        </WidgetBox>
    </Container>
  )
}
