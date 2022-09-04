import { defineNuxtRouteMiddleware, navigateTo } from '#app'

export default defineNuxtRouteMiddleware(async (to) => {
  const isMaintenance = false // todo change

  /*
  const data = await $fetch<{ isMaintenance: boolean }>('https://api.arthurdanjou.fr/maintenance', {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  })
  if (data)
    isMaintenance = data.isMaintenance
  */

  if (isMaintenance && to.name !== 'maintenance') {
    return navigateTo('/maintenance', {
      redirectCode: 301,
      replace: true,
    })
  }

  if (!isMaintenance && to.path === '/maintenance')
    return navigateTo('/')
})
