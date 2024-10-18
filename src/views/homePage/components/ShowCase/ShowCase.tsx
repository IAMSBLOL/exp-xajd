import { reviews } from './config'
import ReviewCard from './ReviewCard'

import { Marquee } from '@/components/ui'

const MarqueeDemo = () => {
  return (
    <div
      className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background"
    >
      <Marquee
        pauseOnHover
        className="[--duration:20s]"
      >
        {
          reviews.map((review, i) => (
            <ReviewCard
              key={review.username + i}
              {...review}
            />
          ))
        }
      </Marquee>

      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"
      > </div>

      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"
      > </div>
    </div>
  )
}

export default MarqueeDemo
