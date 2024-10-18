import { NavLink } from 'react-router-dom'

import { COMPONENTS_PATHS } from '@/router'

const Navlinks = () => {
  return (
    <div
      className='flex items-center gap-5 text-sm leading-[unset] hover:opacity-70'
    >

      <NavLink
        to={COMPONENTS_PATHS.ISocket}

      >
        组件
      </NavLink>
    </div>
  )
}

export default Navlinks
