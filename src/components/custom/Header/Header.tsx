import { GitHubLogoIcon } from '@radix-ui/react-icons'

import CustomerTheme from '../CustomerTheme'
import { ModeToggle } from '../ModeToggle'

import I18nButton from './I18nButton'
import Logo from './Logo'
import Navlinks from './Navlinks'

const Header = () => {
  return (
    <div
      className="h-14 bg-opacity-50 backdrop-blur fixed w-full z-[999]"
    >
      <div
        className="relative w-full h-full flex items-center px-10 justify-between"
      >
        <div
          className='flex-1 flex items-center gap-10'
        >
          <Logo />
          <Navlinks />
        </div>

        <div
          className="flex gap-x-3 items-center"
        >
          <div
            className="flex gap-x-1 items-center"
          >
            <CustomerTheme />
            <ModeToggle />

          </div>

          <GitHubLogoIcon />
          <I18nButton />

        </div>
      </div>
    </div>
  )
}

export default Header
