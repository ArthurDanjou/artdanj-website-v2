import type { Maintenance } from '~/types/types'
import { defineNuxtRouteMiddleware, navigateTo } from '#app'

export default defineNuxtRouteMiddleware(async (to) => {
  const today = new Date()

  const maintenance = await $fetch<Maintenance>('/api/maintenance', {
    method: 'GET',
  })
  const isMaintenance = maintenance && new Date(maintenance.beginAt).getTime() < today.getTime() && new Date(maintenance.endAt).getTime() > today.getTime()

  if (isMaintenance && to.name !== 'maintenance') {
    return navigateTo('/maintenance', {
      redirectCode: 301,
      replace: true,
    })
  }

  if (!isMaintenance && to.path === '/maintenance')
    return navigateTo('/')
})
