/* eslint-disable import-x/no-named-as-default-member */

import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import ChainedBackend from 'i18next-chained-backend'
import HttpBackend from 'i18next-http-backend'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next'

i18next
  .use(LanguageDetector)
  .use(ChainedBackend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: 'zh', // use en if detected lng is not available
    backend: {
      backends: [
        resourcesToBackend((lng: unknown, ns: unknown) => import(`../../locales/${lng}/${ns}.json`)),
        HttpBackend
      ],
      backendOptions: [{ loadPath: '/locales/{{lng}}/{{ns}}.json' }]
    }
  })
