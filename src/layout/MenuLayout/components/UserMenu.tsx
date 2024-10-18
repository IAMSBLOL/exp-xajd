import { UserOutlined } from '@ant-design/icons'
import { Avatar, Dropdown } from 'antd'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import type { MenuProps } from 'antd'

import { GENERAL_PATHS } from '@/router'

const UserMenu = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const items: MenuProps['items'] = [
    {
      key: 'LoginOut',
      danger: true,
      label: t('退出')
    }
  ]

  const onClick: MenuProps['onClick'] = (data) => {
    console.log(data)
    if (data.key === 'LoginOut') {
      localStorage.removeItem('user')
      navigate(GENERAL_PATHS.login)
    }
  }

  return (
    <div>
      <Dropdown
        menu={{ items, onClick }}
      >
        <Avatar
          size={24}
          style={{ backgroundColor: '#666' }}
          icon={
            <UserOutlined />
          }
        />
      </Dropdown>

    </div>
  )
}

export default UserMenu
