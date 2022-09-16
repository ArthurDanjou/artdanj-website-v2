import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'url'
import type { NuxtConfig } from 'nuxt'
import { defineNuxtConfig } from 'nuxt'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

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
    '@nuxt/content',
    'nuxt-icon',
  ],

  css: [
    '@/assets/css/style.scss',
    '@/assets/css/scrollbar.scss',
  ],

  components: [
    '~/components',
    '~/components/icons',
    '~/components/logos',
    '~/components/cards',
  ],

  content: {
    markdown: {
      remarkPlugins: {
        'remark-emoji': {
          emoticon: true,
        },
      },
    },
    highlight: {
      theme: 'dracula',
    },
    locales: [
      'fr',
      'en',
    ],
  },

  colorMode: {
    preference: 'system',
    fallback: 'light',
    classPrefix: '',
    classSuffix: '',
  },

  vite: {
    plugins: [
      VueI18nVitePlugin({
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json'),
        ],
      }),
    ],
  },
} as NuxtConfig)
