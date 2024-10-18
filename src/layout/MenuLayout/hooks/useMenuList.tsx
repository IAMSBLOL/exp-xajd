import {
  MailOutlined, HeatMapOutlined
} from '@ant-design/icons'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import type { MenuProps } from 'antd'

import { GENERAL_PATHS } from '@/router'

type MenuItem = Required<MenuProps>['items'][number];

export const useMenuList = () => {
  const { t } = useTranslation()
  const items: MenuItem[] = useMemo(() => {
    return [
      {
        key: 'app',
        label: t('menu.menu'),
        type: 'group',
        children: [
          {
            key: GENERAL_PATHS.home, label: t('menu.home'), icon: <HeatMapOutlined />
          }
        ]
      },
      { type: 'divider' },
      {
        key: 'audio',
        label: t('menu.audio.audio'),
        icon: <MailOutlined />,
        children: [
          {
            key: '1',
            label: t('menu.audio.audioVisualizationCanvas')

          },
          {
            key: '2',
            label: t('menu.audio.audioVisualizationThree')

          }
        ]
      }
    ]
  }, [t])

  return items
}
