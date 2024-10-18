import { createBrowserRouter } from 'react-router-dom'

import { general } from './general'
import { components } from './menus'

const router = createBrowserRouter([
  components,

  ...general
])

export default router
