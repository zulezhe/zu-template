import en from '../lang/en-US.js'
import zh from '../lang/zh-CN.js'

export const API_ROOT = 'https://jsonplaceholder.typicode.com/'

export const I18N = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
    },
    {
      code: 'zh',
      iso: 'zh-CN',
      name: '简体中文',
    },
  ],
  defaultLocale: 'en',
  routes: {
    about: {
      fr: '/a-propos',
      en: '/about-us',
    },
    posts: {
      fr: '/articles',
    },
    'post/_id': {
      fr: '/article/:id?',
      es: '/articulo/:id?',
    },
    'dynamicNested/_category': {
      fr: 'imbrication-dynamique/:category',
    },
  },
  vueI18n: {
    fallbackLocale: 'en',
    silentTranslationWarn: true,
    messages: { en, zh },
  },
}
