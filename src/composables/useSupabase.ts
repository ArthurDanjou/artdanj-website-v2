import { computed, useSupabaseClient, useSupabaseUser } from '#imports'

export const useSupabase = () => {
  const client = useSupabaseClient()
  const user = useSupabaseUser()
  const redirectTo = 'http://localhost:3000'

  const isAdmin = computed(() => user.value?.role === 'admin')

  const getRole = computed(() => {
    return user.value?.role
  })

  const useGithubLogin = (redirect: 'guestbook' | '' = 'guestbook') => {
    return client.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${redirectTo}/${redirect}`,
      },
    })
  }

  const useTwitterLogin = (redirect: 'guestbook' | '' = 'guestbook') => {
    return client.auth.signInWithOAuth({
      provider: 'twitter',
      options: {
        redirectTo: `${redirectTo}/${redirect}`,
      },
    })
  }

  const useTwitchLogin = (redirect: 'guestbook' | '' = 'guestbook') => {
    return client.auth.signInWithOAuth({
      provider: 'twitch',
      options: {
        redirectTo: `${redirectTo}/${redirect}`,
      },
    })
  }

  const useDiscordLogin = (redirect: 'guestbook' | '' = 'guestbook') => {
    return client.auth.signInWithOAuth({
      provider: 'discord',
      options: {
        redirectTo: `${redirectTo}/${redirect}`,
      },
    })
  }

  const useGoogleLogin = (redirect: 'guestbook' | '' = 'guestbook') => {
    return client.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${redirectTo}/${redirect}`,
      },
    })
  }

  const logout = async () => {
    await client.auth.signOut()
  }

  const isLoggedIn = computed(() => {
    return user.value !== null
  })

  return {
    user,
    useGithubLogin,
    useTwitchLogin,
    useTwitterLogin,
    useDiscordLogin,
    useGoogleLogin,
    isAdmin,
    getRole,
    logout,
    isLoggedIn,
  }
}
