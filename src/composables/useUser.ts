import type { RouteParamValue } from 'vue-router'
import { useAsyncData } from '#build/imports'
import type { User } from '~/types/types'

interface UserUpdate {
  username?: string
  email?: string
  location?: string
  description?: string
}

export const useUser = async (username: string | RouteParamValue[]) => {
  const {
    data: getUserFromDB,
    refresh: refreshUser,
  } = await useAsyncData(`user:${username}`, async () => await $fetch<User>(`/api/user/${username}`))

  const updateUser = async (email: string | undefined, user: UserUpdate) => {
    if (!email)
      return
    await $fetch(`/api/user/${email}`, {
      method: 'PUT',
      body: {
        ...user,
      },
    })
    await refreshUser()
  }

  return {
    getUserFromDB,
    refreshUser,
    updateUser,
  }
}
