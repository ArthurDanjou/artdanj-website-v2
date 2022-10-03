export default defineNuxtConfig({
  srcDir: 'src',

  router: {
    trailingSlash: false,
  },

  modules: [
    'nuxt-windicss',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxt/content',
    'nuxt-icon',
    '@nuxtjs/supabase',
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
})
