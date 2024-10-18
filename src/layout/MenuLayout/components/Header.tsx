import { UnorderedListOutlined, OpenAIOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useTranslation } from 'react-i18next'

import { useMenuState } from '../hooks'

import I18nButton from './I18nButton'
import UserMenu from './UserMenu'

interface Props {
  hasUser?: boolean;
}
const Header = (props: Props) => {
  const { hasUser = true } = props
  const { setMenuState } = useMenuState()
  const { t } = useTranslation()

  const handleClick = () => {
    setMenuState((s) => {
      s.drawerMenuOpen = true
    })
  }

  return (
    <div
      className="h-14 bg-opacity-80 bg-white backdrop-blur fixed w-full shadow z-[999]"
    >
      <div
        className="relative w-full h-full flex items-center px-4 justify-between"
      >
        <div
          className="flex items-center gap-x-3 cursor-pointer"
        >
          <Button
            className="h-[unset] leading-[0] max-xs:block xs:block md:hidden"
            onClick={handleClick}
          >
            <UnorderedListOutlined />
          </Button>

          <span
            className="text-2xl text-slate-700"
          >
            <OpenAIOutlined />
          </span>

          <div
            className="text-sm text-slate-700 font-semibold"
          >
            {t('应用名')}
          </div>
        </div>

        <div
          className="flex gap-x-3 items-center"
        >
          <I18nButton />

          {
            hasUser
              ? <UserMenu />
              : null
          }
        </div>
      </div>
    </div>
  )
}

export default Header
