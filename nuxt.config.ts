export default defineNuxtConfig({
  srcDir: 'src',

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  modules: [
    'nuxt-windicss',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxt/content',
    'nuxt-icon',
    '@nuxtjs/supabase',
    '@pinia/nuxt',
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
      theme: {
        default: 'one-dark-pro',
      },
    },
    locales: [
      'en',
    ],
  },

  colorMode: {
    preference: 'system',
    fallback: 'light',
    classPrefix: '',
    classSuffix: '',
  },

  supabase: {
    client: {
      auth: {
        detectSessionInUrl: true,
      },
    },
  },
})
