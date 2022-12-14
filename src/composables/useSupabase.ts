import { computed, useSupabaseAuthClient } from '#imports'
import { useUserStore } from '~/store/user'
import type { User } from '~/types/types'

export enum Providers {
  TWITTER = 'twitter',
  DISCORD = 'discord',
  GITHUB = 'github',
  GOOGLE = 'google',
  TWITCH = 'twitch',
}

export const useSupabase = () => {
  const { auth } = useSupabaseAuthClient()
  const redirectTo = 'http://localhost:3000'
  const { getUser, setUser, resetUser, isLoggedIn, isAdmin, isBlocked } = useUserStore()

  const syncUser = async () => {
    setUser(await $fetch<User>('/api/auth/callback', { method: 'post' }))
  }

  const login = async (provider: Providers, redirect = '') => {
    await auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${redirectTo}/${redirect}`,
      },
    })
    await syncUser()
  }

  const logout = async () => {
    await resetUser()
    await auth.signOut()
    await window.location.reload()
  }

  return {
    login,
    logout,
    user: computed(() => getUser),
    isAdmin: computed(() => isAdmin),
    isBlocked: computed(() => isBlocked),
    isLoggedIn: computed(() => isLoggedIn),
    Providers,
  }
}
