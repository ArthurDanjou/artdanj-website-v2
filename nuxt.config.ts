import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // extends: '@nuxt-themes/typography',

  srcDir: 'src',

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  modules: [
    ['@nuxtjs/color-mode', {
      preference: 'system',
      fallback: 'light',
      classPrefix: '',
      classSuffix: '',
    }],
    '@vueuse/nuxt',
    ['@nuxt/content', {
      markdown: {
        remarkPlugins: {
          'remark-emoji': {
            emoticon: true,
          },
        },
      },
      highlight: {
        theme: {
          default: 'one-dark-pro',
        },
      },
      locales: [
        'en',
      ],
    }],
    'nuxt-icon',
    ['@nuxtjs/supabase', {
      client: {
        auth: {
          detectSessionInUrl: true,
        },
      },
    }],
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    ['@nuxtjs/robots', {
      UserAgent: '*', Disallow: '',
    }],
    'nuxt-windicss',
  ],

  css: [
    '@/assets/css/main.scss',
    '@/assets/css/scrollbar.scss',
  ],

  components: [
    '~/components',
    '~/components/icons',
    '~/components/logos',
    '~/components/cards',
    '~/components/resume',
    '~/components/modals',
    '~/components/forms',
    '~/components/buttons',
  ],
})
