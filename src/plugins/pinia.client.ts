import { createNuxtPersistedState } from 'pinia-plugin-persistedstate/dist/nuxt'
import { defineNuxtPlugin } from '#app'
import { useLocalStorage } from '#imports'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$pinia.use(createNuxtPersistedState(useLocalStorage))
})
