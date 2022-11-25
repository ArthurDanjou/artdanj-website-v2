import { defineNuxtRouteMiddleware } from '#app'
import { navigateTo, useSupabase } from '#imports'

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { isLoggedIn } = useSupabase()

  // Prevent oauth
  if (to.hash.includes('token') || from.hash.includes('token'))
    return

  if (to.path === '/login' && isLoggedIn) {
    return navigateTo('/', {
      redirectCode: 301,
      replace: true,
    })
  }
})
