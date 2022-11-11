import { createNuxtPersistedState } from 'pinia-plugin-persistedstate/nuxt'
import { defineNuxtPlugin, useCookie } from '#imports'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$pinia.use(createNuxtPersistedState(useCookie, {
    cookieOptions: {
      httpOnly: true,
      maxAge: 3600,
      sameSite: 'lax',
      path: '/auth',
    },
  }))
})
