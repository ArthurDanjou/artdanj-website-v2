import { createNuxtPersistedState } from 'pinia-plugin-persistedstate/dist/nuxt'
import { defineNuxtPlugin, useCookie } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$pinia.use(createNuxtPersistedState(useCookie, {
    cookieOptions: {
      maxAge: 3600,
      path: '/',
    },
  }))
})
