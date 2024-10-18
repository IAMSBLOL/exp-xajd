import { Menu } from 'antd'
import {
  useEffect, useRef, useState
} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { useMenuList } from '../hooks'

import type { MenuProps } from 'antd'

const Memu = () => {
  const [collapsed, setCollapsed] = useState(false)
  const divIns = useRef<HTMLDivElement>(null)
  const items = useMenuList()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const resizeFn = () => {
      if (window.document.body.clientWidth <= 1024) {
        setCollapsed(true)
      } else {
        setCollapsed(false)
      }
    }

    if (divIns.current) {
      resizeFn()
      window.addEventListener('resize', resizeFn)
    }

    return () => {
      window.removeEventListener('resize', resizeFn)
    }
  }, [])

  const onClick: MenuProps['onClick'] = (data) => {
    navigate(data.key)
  }

  return (
    <div
      className="xs:hidden md:block md:w-16 lg:w-60 flex-shrink-0 h-full"
    >
      <div
        className="max-xs:hidden xs:hidden md:block md:w-16 lg:w-60 flex-shrink-0 fixed top-14 py-1 h-[calc(100vh-56px)] overflow-y-auto"
        ref={divIns}
      >
        <Menu
          inlineCollapsed={collapsed}
          items={items}
          mode="inline"
          selectedKeys={[location.pathname]}
          style={{ width: '100%', height: '100%' }}
          onClick={onClick}
        />
      </div>
    </div>
  )
}

export default Memu
