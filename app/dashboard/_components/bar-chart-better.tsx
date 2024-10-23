"use client"

import * as React from "react"
import { Treemap, ResponsiveContainer, Tooltip } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const departmentData = [
  { name: "Human Resources", size: 75, color: "hsl(var(--chart-1))" },
  { name: "Finance", size: 60, color: "hsl(var(--chart-2))" },
  { name: "IT", size: 90, color: "hsl(var(--chart-3))" },
  { name: "Marketing", size: 45, color: "hsl(var(--chart-4))" },
  { name: "Operations", size: 80, color: "hsl(var(--chart-5))" },
]

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload
    return (
      <div className="bg-white p-2 border rounded shadow">
        <p className="font-bold">{data.name}</p>
        <p>Survey Coverage: {data.size}%</p>
      </div>
    )
  }
  return null
}

const CustomContent = ({ root, depth, x, y, width, height, index, payload, colors, rank, name, size }: any) => {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: payload?.color || 'hsl(var(--chart-2))',
          stroke: '#fff',
          strokeWidth: 2 / (depth + 1e-10),
          strokeOpacity: 1 / (depth + 1e-10),
        }}
      />
      {
        depth === 1 && (
          <text
            x={x + width / 2}
            y={y + height / 2}
            textAnchor="middle"
            fill="#fff"
            fontSize={14}
          >
            {name}
          </text>
        )
      }
      {
        depth === 1 && (
          <text
            x={x + width / 2}
            y={y + height / 2 + 20}
            textAnchor="middle"
            fill="#fff"
            fontSize={16}
            fontWeight="bold"
          >
            {`${size}%`}
          </text>
        )
      }
    </g>
  )
}

export function BarChartBetter() {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Department Survey Coverage</CardTitle>
        <CardDescription>
          Showing survey coverage percentage for each department
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <Treemap
            data={departmentData}
            dataKey="size"
            aspectRatio={4 / 3}
            stroke="#fff"
            fill="#8884d8"
            content={<CustomContent />}
          >
            <Tooltip content={<CustomTooltip />} />
          </Treemap>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
