import { RouterProvider } from 'react-router-dom'

import router from './router'

import { ModeProvider } from '@/components/custom/ModeProvider'
import ThemeWrapper from '@/components/custom/ThemeWrapper'

const App = () => {
  return (
    <ModeProvider>
      <ThemeWrapper>
        <RouterProvider
          fallbackElement={<div>loading...</div>}
          router={router}
        />
      </ThemeWrapper>
    </ModeProvider>

  )
}

export default App
