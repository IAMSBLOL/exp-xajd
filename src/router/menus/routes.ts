import { lazyComponent } from '../common'

export const ISocket = lazyComponent(() => import('@/views/testList'))
