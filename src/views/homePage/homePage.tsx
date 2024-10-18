import { AnimatedBeamMultipleOutputDemo } from './components/Beam'
import Charts from './components/Charts'
import Hero from './components/Hero'
import ShowCase from './components/ShowCase'

import Header from '@/components/custom/Header'
import { NeonGradientBg, Meteors } from '@/components/ui'

const HomePage = () => {
  // const { t } = useTranslation()

  return (
    <div
      className='w-full h-full relative'
    >
      <Header />

      <div
        className='pt-14 relative overflow-hidden'
      >
        <Hero />
        <Meteors />

      </div>

      <NeonGradientBg
        className="max-w-lg absolute left-0 top-0 h-96 bg-transparent"
      />

      <ShowCase />
      <Charts />
      <AnimatedBeamMultipleOutputDemo />
    </div>
  )
}

export default HomePage
