import type { Maintenance } from '~/types/types'
import { defineNuxtRouteMiddleware, navigateTo, useAsyncData } from '#app'

export default defineNuxtRouteMiddleware(async (to) => {
  const today = new Date()

  const { data: maintenance } = await useAsyncData<Maintenance>('maintenance', () => {
    return $fetch('/api/maintenance', {
      method: 'GET',
    })
  })
  const isMaintenance = maintenance.value && new Date(maintenance.value.beginAt).getTime() < today.getTime() && new Date(maintenance.value.endAt).getTime() > today.getTime()

  if (isMaintenance && to.name !== 'maintenance') {
    return navigateTo('/maintenance', {
      redirectCode: 301,
      replace: true,
    })
  }

  if (!isMaintenance && to.path === '/maintenance')
    return navigateTo('/')
})
