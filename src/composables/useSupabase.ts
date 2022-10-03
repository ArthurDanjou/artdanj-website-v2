import { useSupabaseClient } from '#imports'

export const useSupabase = () => {
  const client = useSupabaseClient()
  const redirectTo = 'http://localhost:3000/guestbook'

  const useGithubLogin = () => {
    return client.auth.signIn({
      provider: 'github',
    }, {
      redirectTo,
    })
  }

  const useTwitterLogin = () => {
    return client.auth.signIn({
      provider: 'twitter',
    }, {
      redirectTo,
    })
  }

  const useTwitchLogin = () => {
    return client.auth.signIn({
      provider: 'twitch',
    }, {
      redirectTo,
    })
  }

  const useDiscordLogin = () => {
    return client.auth.signIn({
      provider: 'discord',
    }, {
      redirectTo,
    })
  }

  const useGoogleLogin = () => {
    return client.auth.signIn({
      provider: 'google',
    }, {
      redirectTo,
    })
  }

  return {
    useGithubLogin,
    useTwitchLogin,
    useTwitterLogin,
    useDiscordLogin,
    useGoogleLogin,
  }
}
