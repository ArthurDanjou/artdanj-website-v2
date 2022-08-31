import type { NuxtConfig } from 'nuxt'
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  srcDir: 'src',

  router: {
    trailingSlash: false,
  },

  modules: [
    ['@pinia/nuxt'],
    'nuxt-windicss',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
  ],

  css: [
    '@/assets/css/style.scss',
  ],

  components: [
    '~/components',
    '~/components/icons',
    '~/components/cards',
  ],

  colorMode: {
    preference: 'system',
    fallback: 'light',
    classPrefix: '',
    classSuffix: '',
  },

  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        iso: 'en-EN',
        file: 'en-EN.json',
      },
      {
        code: 'fr',
        name: 'Français',
        iso: 'fr-FR',
        file: 'fr-FR.json',
      },
    ],
    strategy: 'no_prefix',
    defaultLocale: 'en',
    langDir: 'locales/',
    lazy: true,
    seo: true,
    vueI18n: {
      fallbackLocale: 'en',
    },
  },
} as NuxtConfig)
