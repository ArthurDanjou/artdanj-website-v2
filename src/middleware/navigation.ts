import { defineNuxtRouteMiddleware } from '#app'
import { navigateTo, useSupabase } from '#imports'

export default defineNuxtRouteMiddleware(async (to) => {
  const { isAdmin, isLoggedIn } = useSupabase()

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
