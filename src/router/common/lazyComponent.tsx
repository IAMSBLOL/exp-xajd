import { Suspense, lazy } from 'react'

import type React from 'react'

export const lazyComponent = (
  load: () => Promise<{
    default: () => React.JSX.Element;
  }>
) => {
  const Node = lazy(load)
  return (
    <Suspense>
      <Node />
    </Suspense>
  )
}
