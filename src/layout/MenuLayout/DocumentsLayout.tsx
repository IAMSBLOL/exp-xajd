import { Outlet } from 'react-router-dom'

import Content from './components/Content'
import DrawerMenu from './components/DrawerMenu'
import Header from './components/Header'
import Memu from './components/Memu'

const AppLayout = () => {
  return (
    <div
      className="flex h-full font-sans"
    >
      <Header />
      <Memu />

      <Content>
        <Outlet />
      </Content>

      <DrawerMenu />
    </div>
  )
}

export default AppLayout
