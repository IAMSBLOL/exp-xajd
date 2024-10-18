import React from 'react'

import { useConfig } from '@/hooks'
import { cn } from '@/lib'

interface ThemeWrapperProps extends React.ComponentProps<'div'> {
  defaultTheme?: string
}

const ThemeWrapper = ({
  defaultTheme,
  children,
  className
}: ThemeWrapperProps) => {
  const [config] = useConfig()

  return (
    <div
      className={cn(
        `theme-${defaultTheme || config.theme}`,
        'w-full',
        className
      )}
      style={
        {
          '--radius': `${defaultTheme ? 0.5 : config.radius}rem`
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  )
}

export default ThemeWrapper
