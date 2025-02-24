'use client'

import { TrendingUp } from 'lucide-react'
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
  ,
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui'

export const description = 'A line chart with a label'

const chartData = [
  { month: 'January', desktop: 186, mobile: 80 },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 237, mobile: 120 },
  { month: 'April', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'June', desktop: 214, mobile: 140 }
]

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'hsl(var(--primary))'
  },
  mobile: {
    label: 'Mobile',
    color: 'hsl(var(--primary))'
  }
} satisfies ChartConfig

export function LineChartComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Line Chart - Label</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer
          config={chartConfig}
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              left: 12,
              right: 12
            }}
          >
            <CartesianGrid
              vertical={false}
            />

            <XAxis
              axisLine={false}
              dataKey="month"
              tickFormatter={(value) => value.slice(0, 3)}
              tickLine={false}
              tickMargin={8}
            />

            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="line"
                />
              }
            />

            <Line
              dataKey="desktop"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              type="natural"
              activeDot={{
                r: 6
              }}
              dot={{
                fill: 'var(--color-desktop)'
              }}
            >
              <LabelList
                className="fill-foreground"
                fontSize={12}
                offset={12}
                position="top"
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>

      <CardFooter
        className="flex-col items-start gap-2 text-sm"
      >
        <div
          className="flex gap-2 font-medium leading-none"
        >
          Trending up by 5.2% this month
          {' '}

          <TrendingUp
            className="h-4 w-4"
          />
        </div>

        <div
          className="leading-none text-muted-foreground"
        >
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
