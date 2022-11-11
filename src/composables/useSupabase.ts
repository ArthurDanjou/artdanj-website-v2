import type { User } from '~/types/types'
import { useSupabaseClient } from '#imports'
import { useUserStore } from '~/store/user'

export const useSupabase = () => {
  const client = useSupabaseClient()
  const redirectTo = 'http://localhost:3000'
  const { getUser, setUser, isLoggedIn, isAdmin, isBlocked, getRole } = useUserStore()

  client.auth.onAuthStateChange(async (event) => {
    if (event === 'SIGNED_IN') {
      setUser(await $fetch<User>('/api/callback', {
        method: 'post',
      }))
    }
  })

  const useGithubLogin = async (redirect: 'guestbook' | '' = 'guestbook') => {
    await client.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${redirectTo}/${redirect}`,
      },
    })
  }

  const useTwitterLogin = async (redirect: 'guestbook' | '' = 'guestbook') => {
    await client.auth.signInWithOAuth({
      provider: 'twitter',
      options: {
        redirectTo: `${redirectTo}/${redirect}`,
      },
    })
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
  }

  const useGoogleLogin = async (redirect: 'guestbook' | '' = 'guestbook') => {
    await client.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${redirectTo}/${redirect}`,
      },
    })
  }

  const logout = async () => {
    await client.auth.signOut()
    setUser(null)
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
