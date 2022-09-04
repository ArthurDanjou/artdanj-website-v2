import { createI18n } from 'vue-i18n'
import fr from '../locales/fr-FR.json'
import en from '../locales/en-EN.json'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    globalInjection: true,
    messages: {
      fr,
      en,
    },

  })

  vueApp.use(i18n)
})
