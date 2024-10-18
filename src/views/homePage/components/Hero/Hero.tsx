import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap/all'
import { useRef } from 'react'

import { RainbowButton } from '@/components/ui'

const Hero = () => {
  const container = useRef<HTMLDivElement | null>(null)
  useGSAP(() => {
    gsap.from(container.current, { opacity: 0, y: 50, duration: 1, stagger: 0.1 })
  }, { scope: container })
  return (
    <div
      className="bg-base-200 min-h-[70vh] grid place-items-center relative"
    >
      <div
        className="relative flex h-[500px] text-center w-full flex-col items-center justify-center overflow-hidden"
      >

        <div
          className="w-full flex justify-center items-center flex-col gap-5 "
          ref={container}
        >

          <h1
            className="text-7xl font-bold pointer-events-none z-10 h-full whitespace-pre-wrap text-center leading-none tracking-tighter dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]"
          >
            iMlie & Shadcn
          </h1>

          <p
            className="py-6 max-w-md"
          >
            欢迎来到iMlie前端实验室，这里是创新与技术交融的前沿阵地。我们致力于探索和优化前端开发的每一个环节，为开发者提供一个充满活力的工作环境。

          </p>

          <RainbowButton>
            <span
              className='text-background'
            >
              Get Started
            </span>
          </RainbowButton>
        </div>

      </div>

    </div>
  )
}

export default Hero
