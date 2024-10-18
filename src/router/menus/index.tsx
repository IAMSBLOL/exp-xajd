import { COMPONENTS_PATHS } from './paths'
import * as routes from './routes'

import type { RouteObject } from 'react-router-dom'

import MenuLayout from '@/layout/MenuLayout'
import ErrorPage from '@/views/errorPage'

export const components: RouteObject = {
  element: <MenuLayout />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: COMPONENTS_PATHS.ISocket,
      element: routes.ISocket
    }
  ]
}

export { COMPONENTS_PATHS } from './paths'
