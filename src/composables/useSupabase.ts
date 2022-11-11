import { useSupabaseClient } from '#imports'
import { useUserStore } from '~/store/user'
import type { User } from '~/types/types'

export const useSupabase = () => {
  const client = useSupabaseClient()
  const redirectTo = 'http://localhost:3000'
  const { getUser, setUser, resetUser, isLoggedIn, isAdmin, isBlocked, getRole } = useUserStore()

  const syncUser = async () => {
    setUser(await $fetch<User>('/api/auth/callback', { method: 'post' }))
  }

  const useGithubLogin = async (redirect: 'guestbook' | '' = 'guestbook') => {
    await client.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${redirectTo}/${redirect}`,
      },
    })
    await syncUser()
  }

  const useTwitterLogin = async (redirect: 'guestbook' | '' = 'guestbook') => {
    await client.auth.signInWithOAuth({
      provider: 'twitter',
      options: {
        redirectTo: `${redirectTo}/${redirect}`,
      },
    })
    await syncUser()
  }

  const useTwitchLogin = async (redirect: 'guestbook' | '' = 'guestbook') => {
    await client.auth.signInWithOAuth({
      provider: 'twitch',
      options: {
        redirectTo: `${redirectTo}/${redirect}`,
      },
    })
  }

  const useDiscordLogin = async (redirect: 'guestbook' | '' = 'guestbook') => {
    await client.auth.signInWithOAuth({
      provider: 'discord',
      options: {
        redirectTo: `${redirectTo}/${redirect}`,
      },
    })
    await syncUser()
  }

  const useGoogleLogin = async (redirect: 'guestbook' | '' = 'guestbook') => {
    await client.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${redirectTo}/${redirect}`,
      },
    })
    await syncUser()
  }

  const logout = async () => {
    await client.auth.signOut()
    resetUser()
  }

  return {
    useGithubLogin,
    useTwitchLogin,
    useTwitterLogin,
    useDiscordLogin,
    useGoogleLogin,
    logout,
    user: getUser,
    isAdmin,
    isBlocked,
    getRole,
    isLoggedIn,
  }
}
