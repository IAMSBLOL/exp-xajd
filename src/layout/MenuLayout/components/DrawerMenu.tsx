import { Drawer, Menu } from 'antd'
import React from 'react'

import { useMenuList, useMenuState } from '../hooks'

import type { DrawerStyles } from 'antd/es/drawer/DrawerPanel'

const DrawerMenu: React.FC = () => {
  const { menuState, setMenuState } = useMenuState()
  const items = useMenuList()

  const onClose = () => {
    setMenuState((s) => {
      s.drawerMenuOpen = false
    })
  }

  const onClick = (e: unknown) => {
    console.log('click', e)
  }

  const drawerStyles: DrawerStyles = {

    header: { display: 'none' },
    body: { padding: 0 },
    footer: { display: 'none' }
  }

  return (
    <Drawer
      open={menuState.drawerMenuOpen}
      placement="left"
      styles={drawerStyles}
      width={240}
      onClose={onClose}
    >
      <Menu
        items={items}
        mode="inline"
        style={{ width: '240px', height: '100%' }}
        onClick={onClick}
      />
    </Drawer>
  )
}

export default DrawerMenu
