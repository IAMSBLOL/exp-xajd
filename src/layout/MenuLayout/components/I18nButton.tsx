import { Button, Dropdown } from 'antd'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import Language from './icons/language.svg?react'

import type { MenuProps } from 'antd'

const I18nButton = () => {
  const { t, i18n } = useTranslation()
  const [text, setI18nText] = useState('zh')

  useEffect(() => {
    //
    const i18nText = localStorage.getItem('i18n')

    if (i18nText) {
      setI18nText(i18nText)
    }
  }, [])

  const items: MenuProps['items'] = [
    {
      key: 'ch',
      label: t('ch')
    },
    {
      key: 'en',
      label: t('en')
    }
  ]

  const onClick: MenuProps['onClick'] = (data) => {
    i18n.changeLanguage(data.key)
    setI18nText(t(data.key))
    localStorage.setItem('i18n', t(data.key))
  }

  return (

    <Dropdown
      menu={{ items, onClick }}
    >
      <Button
        className="flex items-center"
        type="text"
        icon={(
          <Language
            width={24}
          />
        )}
      >
        {text}
      </Button>
    </Dropdown>
  )
}

export default I18nButton
