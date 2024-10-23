"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, Rectangle, XAxis, YAxis, Legend } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Updated data for the bar chart with 5 categories and 3 quarters
const chartData = [
  { category: "Data Quality", Q1: 65, Q2: 75, Q3: 80 },
  { category: "Data Security", Q1: 70, Q2: 80, Q3: 85 },
  { category: "Data Integration", Q1: 55, Q2: 60, Q3: 70 },
  { category: "Data Governance", Q1: 50, Q2: 65, Q3: 75 },
  { category: "Data Analytics", Q1: 60, Q2: 70, Q3: 80 },
]

// Updated chart configuration
const chartConfig = {
  Q1: {
    label: "Q1 2024",
    color: "hsl(var(--chart-1))",
  },
  Q2: {
    label: "Q2 2024",
    color: "hsl(var(--chart-2))",
  },
  Q3: {
    label: "Q3 2024",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

// Updated main functional component
export function BarChartComponent() {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Data Management Progress</CardTitle>
        <CardDescription>Q1 - Q3 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart width={600} height={300} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Legend />
            <Bar dataKey="Q1" fill={chartConfig.Q1.color} />
            <Bar dataKey="Q2" fill={chartConfig.Q2.color} />
            <Bar dataKey="Q3" fill={chartConfig.Q3.color} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Overall improvement of 15% across categories <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing progress in data management areas for Q1-Q3 2024
        </div>
      </CardFooter>
    </Card>
  )
}
