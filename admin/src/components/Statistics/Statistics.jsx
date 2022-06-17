import React from 'react'
import {
    Container,
    BoxCharts,
    H1
} from './StatisticsStyle'
import { 
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
 } from 'recharts'


export default function Charts({ title, data, dataKey, grid }) {

    return (
        <Container>
            <BoxCharts>
                <H1>{title}</H1> 
                <ResponsiveContainer width="100%" aspect={4 / 1}>
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
