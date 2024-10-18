import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

import { BaseColor } from '@/config/shadcn/registry-base-colors'

interface Config {
  theme: BaseColor['name']
  radius: number
}

const configAtom = atomWithStorage<Config>('config', {
  theme: 'red',
  radius: 0.5
})

export function useConfig() {
  return useAtom(configAtom)
}
