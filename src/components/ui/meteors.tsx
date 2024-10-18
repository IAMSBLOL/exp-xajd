import React, { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

interface MeteorsProps {
  number?: number;
}
export const Meteors = ({ number = 20 }: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<React.CSSProperties[]>(
    []
  )

  useEffect(() => {
    const styles = Array.from({ length: number }).fill('').map(() => ({
      top: -5,
      left: Math.floor(Math.random() * window.innerWidth) + 'px',
      animationDelay: Math.random() * 1 + 0.2 + 's',
      animationDuration: Math.floor(Math.random() * 8 + 2) + 's'
    }))
    setMeteorStyles(styles)
  }, [number])

  return (
    <>
      {[...meteorStyles].map((style, idx) => (
        // Meteor Head
        <span
          key={idx}
          style={style}
          className={cn(
            'pointer-events-none absolute left-1/2 top-1/2 size-0.5 rotate-[45deg] animate-meteor rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]'
          )}
        >
          {/* Meteor Tail */}
          <div
            className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent"
          />
        </span>
      ))}
    </>
  )
}

export default Meteors
