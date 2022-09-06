import { useCookie } from '#app'

export function useLang() {
  const cookie = useCookie('lang', {
    path: '/',
    default: () => 'en',
    sameSite: 'lax',
    secure: true,
  })

  const setLang = (lang: string) => {
    cookie.value = lang
  }

  const getLang = () => {
    return cookie.value
  }

  return {
    getLang,
    setLang,
  }
}
