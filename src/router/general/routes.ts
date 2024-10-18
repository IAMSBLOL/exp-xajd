import { lazyComponent } from '../common'

export const NotFound = lazyComponent(() => import('@/views/notFound'))

export const HomePage = lazyComponent(() => import('@/views/homePage'))
