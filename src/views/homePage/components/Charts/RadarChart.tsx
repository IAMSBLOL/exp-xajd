import { TrendingUp } from 'lucide-react'
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from 'recharts'

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

export const description = 'A radar chart with dots'

const chartData = [
  { month: 'January', desktop: 186 },
  { month: 'February', desktop: 305 },
  { month: 'March', desktop: 237 },
  { month: 'April', desktop: 273 },
  { month: 'May', desktop: 209 },
  { month: 'June', desktop: 214 }
]

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'hsl(var(--primary))'
  }
} satisfies ChartConfig

export function RadarChartComponent() {
  return (
    <Card>
      <CardHeader
        className="items-center"
      >
        <CardTitle>Radar Chart - Dots</CardTitle>

        <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>

      <CardContent
        className="pb-0"
      >
        <ChartContainer
          className="mx-auto aspect-square max-h-[250px]"
          config={chartConfig}
        >
          <RadarChart
            data={chartData}
          >
            <ChartTooltip
              content={<ChartTooltipContent />}
              cursor={false}
            />

            <PolarAngleAxis
              dataKey="month"
            />

            <PolarGrid />

            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
              dot={{
                r: 4,
                fillOpacity: 1
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>

      <CardFooter
        className="flex-col gap-2 text-sm"
      >
        <div
          className="flex items-center gap-2 font-medium leading-none"
        >
          Trending up by 5.2% this month
          {' '}

          <TrendingUp
            className="h-4 w-4"
          />
        </div>

        <div
          className="flex items-center gap-2 leading-none text-muted-foreground"
        >
          January - June 2024
        </div>
      </CardFooter>
    </Card>
  )
}
