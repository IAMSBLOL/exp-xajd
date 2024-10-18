import {
  CheckIcon,
  MoonIcon,
  ResetIcon,
  SunIcon
} from '@radix-ui/react-icons'
import React from 'react'

import { useTheme } from '../ModeProvider'
import ThemeWrapper from '../ThemeWrapper'

import { Button, cn } from '@/components/ui'
import { baseColors } from '@/config/shadcn/registry-base-colors'
import { useConfig } from '@/hooks'

function Customizer() {
  const { setTheme: setMode, theme: mode } = useTheme()
  const [config, setConfig] = useConfig()

  return (
    <ThemeWrapper>
      <div
        className="flex items-start pt-4 md:pt-0"
      >
        <div
          className="space-y-1 pr-2"
        >
          <div
            className="font-semibold leading-none tracking-tight"
          >
            Customize
          </div>

        </div>

        <Button
          className="ml-auto rounded-[0.5rem]"
          size="icon"
          variant="ghost"
          onClick={() => {
            setConfig({
              ...config,
              theme: 'zinc',
              radius: 0.5
            })
          }}
        >
          <ResetIcon />

          <span
            className="sr-only"
          >
            Reset
          </span>
        </Button>
      </div>

      <div
        className="flex flex-1 flex-col space-y-4 md:space-y-6"
      >
        <div
          className="space-y-1.5"
        >

          <div
            className="grid grid-cols-3 gap-2"
          >
            <Button
              size="sm"
              variant="outline"
              onClick={() => setConfig({ ...config })}
            >
              Default
            </Button>

            <Button
              size="sm"
              variant="outline"
              onClick={() => setConfig({ ...config })}
            >
              New York
            </Button>
          </div>
        </div>

        <div
          className="space-y-1.5"
        >
          <div
            className="text-xs"
          >
            Color
          </div>

          <div
            className="grid grid-cols-3 gap-2"
          >
            {baseColors.map((theme) => {
              const isActive = config.theme === theme.name

              return (
                <Button
                  key={theme.name}
                  size="sm"
                  variant="outline"
                  className={cn(
                    'justify-start',
                    isActive && 'border-2 border-primary'
                  )}
                  style={
                    {
                      '--theme-primary': `hsl(${theme?.activeColor[mode === 'dark' ? 'dark' : 'light']})`
                    } as React.CSSProperties
                  }
                  onClick={() => {
                    setConfig({
                      ...config,
                      theme: theme.name
                    })
                  }}
                >
                  <span
                    className={cn(
                      'mr-1 flex h-5 w-5 shrink-0 -translate-x-1 items-center justify-center rounded-full bg-[--theme-primary]'
                    )}
                  >
                    {
                      isActive && (
                        <CheckIcon
                          className="h-4 w-4 text-white"
                        />
                      )
                    }
                  </span>

                  {theme.label}
                </Button>
              )
            })}
          </div>
        </div>

        <div
          className="space-y-1.5"
        >
          <div
            className="text-xs"
          >
            Radius
          </div>

          <div
            className="grid grid-cols-5 gap-2"
          >
            {['0', '0.3', '0.5', '0.75', '1.0'].map((value) => {
              return (
                <Button
                  key={value}
                  size="sm"
                  variant="outline"
                  className={cn(
                    config.radius === Number.parseFloat(value) &&
                    'border-2 border-primary'
                  )}
                  onClick={() => {
                    setConfig({
                      ...config,
                      radius: Number.parseFloat(value)
                    })
                  }}
                >
                  {value}
                </Button>
              )
            })}
          </div>
        </div>

        <div
          className="space-y-1.5"
        >
          <div
            className="text-xs"
          >
            Mode
          </div>

          <div
            className="grid grid-cols-3 gap-2"
          >
            <Button
              size="sm"
              variant="outline"
              onClick={() => setMode('light')}
            >
              <SunIcon
                className="mr-1 -translate-x-1"
              />
              Light
            </Button>

            <Button
              size="sm"
              variant="outline"
              onClick={() => setMode('dark')}
            >
              <MoonIcon
                className="mr-1 -translate-x-1"
              />
              Dark
            </Button>
          </div>
        </div>
      </div>
    </ThemeWrapper>
  )
}

export default Customizer
