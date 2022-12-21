import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // extends: '@nuxt-themes/typography',
  // extends: '@sidebase/nuxt-prisma',
  
  srcDir: 'src',
  
  app: {
    pageTransition: {name: 'page', mode: 'out-in'},
  },
  
  modules: [
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxt/content',
    'nuxt-icon',
    '@nuxtjs/supabase',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/robots',
    '@nuxtjs/tailwindcss',
  ],
  
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classPrefix: '',
    classSuffix: '',
  },
  
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
  
  supabase: {
    client: {
      auth: {
        detectSessionInUrl: true,
      },
    },
  },
  
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts',
  },
  
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
