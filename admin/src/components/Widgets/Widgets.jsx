import React, { useState, useEffect } from 'react'
import {
  Container,
  WidgetBox,
  H3,
  Box,
  Span
} from './WidgetsStyle'
import { userRequest } from "../../resources/requestMethods"
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

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
          <H3>Saldo</H3>
          <Box>
          <Span>${income[1]?.total}</Span>
          <Span>
          %{Math.floor(perc)}{" "}
            {perc < 0 ? (
              <ArrowDownward className="featuredIcon negative" />
            ) : (
              <ArrowUpward className="featuredIcon" />
            )}
          </Span>
          </Box>
        </WidgetBox>

        <WidgetBox>
        </WidgetBox>

        <WidgetBox>
        </WidgetBox>
    </Container>
  )
}
