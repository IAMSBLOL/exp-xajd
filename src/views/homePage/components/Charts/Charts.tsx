import { BarChartComponent } from './BarChart'
import { LineChartComponent } from './LineChart'
import { RadarChartComponent } from './RadarChart'

import { TextRevealByWord } from '@/components/ui'

const Charts = () => {
  return (
    <div
      className='pt-20'
    >
      <div>
        <TextRevealByWord
          text="Let`s Fuck Shadcn~Charts"
        >
          <div
            className='text-primary grid lg:grid-cols-3 sm:grid-cols-1 pb-16 py-7 px-20 gap-4'
          >
            <LineChartComponent />
            <BarChartComponent />
            <RadarChartComponent />

          </div>
        </TextRevealByWord>
      </div>

    </div>
  )
}

export default Charts
