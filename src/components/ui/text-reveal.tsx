import { motion, useScroll, useTransform } from 'framer-motion'
import React, { FC, ReactNode, useMemo, useRef } from 'react'

import { cn } from '@/lib/utils'

interface TextRevealByWordProps {
  text: string;
  className?: string;
  children: ReactNode
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
  children
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef
  })
  const words = text.split(' ')

  return (
    <div
      className={cn('relative z-0', className)}
      ref={targetRef}
    >
      <div
        className="sticky top-0 mx-auto flex justify-center max-w-5xl items-center bg-transparent px-[1rem]"
      >
        <p
          className="flex flex-wrap p-5 text-2xl font-bold text-black/20 dark:text-white/20 md:text-3xl lg:text-4xl xl:text-5xl"
        >
          {words.map((word, i) => {
            const start = i / words.length
            const end = start + 1 / words.length
            return (
              <Word
                key={i}
                progress={scrollYProgress}
                range={[start, end]}
              >
                {word}
              </Word>
            )
          })}
        </p>
      </div>

      {
        useMemo(() => {
          return (
            <>
              {children}
            </>
          )
        }, [children])
      }
    </div>
  )
}

interface WordProps {
  children: ReactNode;
  progress: any;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1])
  return (
    <span
      className="xl:lg-3 relative mx-1 lg:mx-2.5"
    >
      <span
        className="absolute opacity-30"
      >
        {children}
      </span>

      <motion.span
        className="text-black dark:text-white"
        style={{ opacity }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export default TextRevealByWord
