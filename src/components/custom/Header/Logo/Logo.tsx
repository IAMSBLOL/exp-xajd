import { UnorderedListOutlined, OpenAIOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useTranslation } from 'react-i18next'

import { useMenuState } from '../hooks'
const Logo = () => {
  const { setMenuState } = useMenuState()
  const { t } = useTranslation()

  const handleClick = () => {
    setMenuState((s) => {
      s.drawerMenuOpen = true
    })
  }
  return (
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
        className="text-2xl leading-[0]"
      >
        <OpenAIOutlined />
      </span>

      <div
        className="text-sm font-semibold leading-[0]"
      >
        {t('应用名')}
      </div>
    </div>
  )
}

export default Logo
