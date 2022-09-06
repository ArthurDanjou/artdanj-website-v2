import { createI18n } from 'vue-i18n'
import fr from '../locales/fr-FR.json'
import en from '../locales/en-EN.json'
import {defineNuxtPlugin} from '#app'
import {useLang} from "~/composables/useLang";

export default defineNuxtPlugin(({ vueApp }) => {
  const { getLang } = useLang()
  const i18n = createI18n({
    legacy: false,
    fallbackLocale: 'en',
    locale: getLang(),
    globalInjection: true,
    messages: {
      fr,
      en,
    },
  })

  vueApp.use(i18n)
})
