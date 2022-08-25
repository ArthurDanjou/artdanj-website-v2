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
    '@nuxt/content',
  ],

  css: [
    '@/assets/css/style.scss',
  ],

  components: [
    '~/components',
    '~/components/icons',
    '~/components/cards',
  ],

  content: {
    highlight: {
      theme: 'dracula',
    },
  },

  colorMode: {
    preference: 'system',
    fallback: 'light',
    classPrefix: '',
    classSuffix: '',
  },
} as NuxtConfig)
