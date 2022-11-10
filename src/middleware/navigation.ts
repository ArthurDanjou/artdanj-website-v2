import { defineNuxtRouteMiddleware } from '#app'
import { navigateTo, useSupabase } from '#imports'

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { isAdmin, isLoggedIn } = useSupabase()

  // Prevent oauth
  if (to.hash.includes('token') || from.hash.includes('token'))
    return

  if (to.path === '/dashboard' && !isAdmin.value) {
    return navigateTo('/user', {
      redirectCode: 500,
      replace: true,
    })
  }

  if (to.path === '/user' && !isLoggedIn.value) {
    return navigateTo('/', {
      redirectCode: 401,
      replace: true,
    })
  }

  if (to.path === '/login' && isLoggedIn.value) {
    return navigateTo('/', {
      redirectCode: 301,
      replace: true,
    })
  }
})
