import React from 'react'
import {
    Container,
    BoxCharts,
    H1
} from './ChartStyle'
import { 
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
 } from 'recharts'

export default function Chart({ data, dataKey, grid }) {

    return (
        <Container>
            <BoxCharts>
                <H1>Estatísticas</H1> 
                <ResponsiveContainer width="100%" aspect={4 / 2}>
                    <LineChart data={data}>
                        <XAxis dataKey="name" stroke="#5550bd" />
                        <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
                        <Tooltip />
                        {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                    </LineChart>
                </ResponsiveContainer>
            </BoxCharts>
        </Container>
    )
}
