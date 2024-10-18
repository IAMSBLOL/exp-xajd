import type React from 'react'

const Content = (properties: { children: React.ReactNode, }) => {
  const { children } = properties

  return (
    <div
      className="flex-1 h-full overflow-x-hidden"
    >
      <div
        className="h-14 w-full"
      />

      <div
        className="w-full"
      >
        {children}
      </div>
    </div>
  )
}

export default Content
