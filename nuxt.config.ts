import type { NuxtConfig } from 'nuxt'
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  srcDir: 'src',

  head: {
    link: [
      { rel: 'stylesheet', href: 'https://api.mapbox.com/mapbox-gl-js/v1.12.1/mapbox-gl.css' },
    ],
  },

  router: {
    trailingSlash: false,
  },

  runtimeConfig: {
    mapToken: process.env.NUXT_MAP_TOKEN,
  },

  modules: [
    ['@pinia/nuxt'],
    'nuxt-windicss',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
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
} as NuxtConfig)
