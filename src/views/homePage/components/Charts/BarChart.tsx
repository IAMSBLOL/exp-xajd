import { TrendingUp } from 'lucide-react'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

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

export const description = 'A bar chart'

const chartData = [
  { month: 'January', desktop: 186 },
  { month: 'February', desktop: 305 },
  { month: 'March', desktop: 237 },
  { month: 'April', desktop: 73 },
  { month: 'May', desktop: 209 },
  { month: 'June', desktop: 214 }
]

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'hsl(var(--primary))'
  }
} satisfies ChartConfig

export function BarChartComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer
          config={chartConfig}
        >
          <BarChart
            accessibilityLayer
            data={chartData}
          >
            <CartesianGrid
              vertical={false}
            />

            <XAxis
              axisLine={false}
              dataKey="month"
              tickFormatter={(value) => value.slice(0, 3)}
              tickLine={false}
              tickMargin={10}
            />

            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  hideLabel
                />
              }
            />

            <Bar
              dataKey="desktop"
              fill="var(--color-desktop)"
              radius={8}
            />
          </BarChart>
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
