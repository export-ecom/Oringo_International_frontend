/*
src/pages/AdminDashboard/ChartsPanel.jsx
Uses Recharts to show trends and top products.
*/
import React, { useMemo } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, CartesianGrid } from 'recharts'

export default function ChartsPanel({ items }) {
    // small aggregation: inquiries per day (last 15 days) and top products
    const byDay = useMemo(() => {
        const days = {}
        const now = Date.now()
        for (let i = 0; i < 15; i++) {
            const d = new Date(now - i * 24 * 60 * 60 * 1000).toISOString().slice(0, 10)
            days[d] = 0
        }
        items.forEach((it) => {
            const d = it.createdAt.slice(0, 10)
            if (days[d] !== undefined) days[d]++
        })
        return Object.entries(days).reverse().map(([date, count]) => ({ date, count }))
    }, [items])

    const topProducts = useMemo(() => {
        const m = {}
        items.forEach((it) => { m[it.product] = (m[it.product] || 0) + 1 })
        return Object.entries(m).map(([product, count]) => ({ product, count })).sort((a, b) => b.count - a.count).slice(0, 5)
    }, [items])

    return (
        <div className="row g-3 mb-3">
            <div className="col-md-8">
                <div className="card p-3">
                    <h6>Inquiries (last 15 days)</h6>
                    <div style={{ height: 220 }}>
                        <ResponsiveContainer>
                            <LineChart data={byDay}>
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="count" stroke="#8884d8" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card p-3">
                    <h6>Top Products</h6>
                    <div style={{ height: 220 }}>
                        <ResponsiveContainer>
                            <BarChart data={topProducts} layout="vertical">
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis type="number" />
                                <YAxis dataKey="product" type="category" />
                                <Tooltip />
                                <Bar dataKey="count" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}