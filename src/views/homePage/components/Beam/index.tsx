'use client'

import { ChevronRight } from 'lucide-react'
import React, { useRef } from 'react'

import { AnimatedBeam, cn, AnimatedGradientText, NeonGradientBg } from '@/components/ui'

const Circle = React.forwardRef<
  HTMLDivElement,
  { className?: string; src?: string }
>(({ className, src }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'z-10 flex items-center justify-center rounded-full p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]',
        className
      )}
    >
      <img
        alt=""
        className='w-24 h-auto rounded-3xl border border-card-foreground'
        src={src}
      />
    </div>
  )
})

Circle.displayName = 'Circle'

export function AnimatedBeamMultipleOutputDemo({
  className
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)
  const div4Ref = useRef<HTMLDivElement>(null)
  const div5Ref = useRef<HTMLDivElement>(null)
  const div6Ref = useRef<HTMLDivElement>(null)
  const div7Ref = useRef<HTMLDivElement>(null)

  return (

    <div
      className='py-10 relative'
    >
      <NeonGradientBg
        className="max-w-lg absolute right-1/2 translate-x-[50%] top-0 h-96 bg-transparent"
      />

      <AnimatedGradientText
        className='text-2xl mb-6'
      >
        🎉
        {' '}

        <hr
          className="mx-2 h-4 w-px shrink-0 bg-gray-300"
        />

        {' '}

        <span
          className={cn(
            'inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent'
          )}
        >
          Introducing Magic UI
        </span>

        <ChevronRight
          className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
        />
      </AnimatedGradientText>

      <div
        ref={containerRef}
        className={cn(
          'relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg bg-background px-10',
          className
        )}
      >
        <div
          className="flex size-full flex-row items-stretch justify-between gap-10 max-w-4xl"
        >
          <div
            className="flex flex-col justify-between gap-2"
          >
            <Circle
              ref={div1Ref}
              src={Icons.googleDrive}
            />

            <Circle
              ref={div2Ref}
              src={Icons.googleDocs}
            />

            <Circle
              ref={div3Ref}
              src={Icons.whatsapp}
            />

            <Circle
              ref={div4Ref}
              src={Icons.messenger}
            />

            <Circle
              ref={div5Ref}
              src={Icons.notion}
            />
          </div>

          <div
            className="flex flex-col justify-center"
          >
            <Circle
              ref={div6Ref}
              src={Icons.openai}
            />
          </div>

          <div
            className="flex flex-col justify-center"
          >
            <Circle
              ref={div7Ref}
              src={Icons.user}
            />
          </div>
        </div>

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div6Ref}
        />

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div6Ref}
        />

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div6Ref}
        />

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div4Ref}
          toRef={div6Ref}
        />

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div5Ref}
          toRef={div6Ref}
        />

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div6Ref}
          toRef={div7Ref}
        />
      </div>
    </div>
  )
}

const Icons = {
  notion: 'https://cn-imile-static.oss-accelerate.aliyuncs.com/work-order/attachment/default/2024/10/202410081267547585162440704.png',
  openai: 'https://cn-imile-static.oss-accelerate.aliyuncs.com/work-order/attachment/default/2024/10/202410081267547506028507137.png',
  googleDrive: 'https://cn-imile-static.oss-accelerate.aliyuncs.com/work-order/attachment/default/2024/10/202410081267547438051422208.png',
  whatsapp: 'https://cn-imile-static.oss-accelerate.aliyuncs.com/work-order/attachment/default/2024/10/202410081267547370795757569.png',
  googleDocs: 'https://cn-imile-static.oss-accelerate.aliyuncs.com/work-order/attachment/default/2024/10/202410081267547248905089025.png',
  zapier: 'https://cn-imile-static.oss-accelerate.aliyuncs.com/work-order/attachment/default/2024/10/202410081267547654980825089.png',
  messenger: 'https://cn-imile-static.oss-accelerate.aliyuncs.com/work-order/attachment/default/2024/10/202410081267547654980825089.png',
  user: 'https://cn-imile-static.oss-accelerate.aliyuncs.com/work-order/attachment/default/2024/10/202410081267547654980825089.png'
}
