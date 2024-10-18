import { GENERAL_PATHS } from './paths'
import * as routes from './routes'

import type { RouteObject } from 'react-router-dom'

import GeneralLayout from '@/layout/GeneralLayout'
import ErrorPage from '@/views/errorPage'

export const general: RouteObject[] = [
  {
    element: <GeneralLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: GENERAL_PATHS.home,
        element: routes.HomePage
      }
    ]
  },

  {
    path: '*',
    element: routes.NotFound
  }
]

export { GENERAL_PATHS } from './paths'
