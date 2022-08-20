import { useThemeStore } from '~/store/theme'
import { getThemeBackgroundColor, getThemeTextColor } from '~/types/themes'

export function useTheme() {
  const themeStore = useThemeStore()
  const getTextColor = () => {
    return getThemeTextColor(themeStore.theme)
  }
  const getBackgroundColor = () => {
    return getThemeBackgroundColor(themeStore.theme)
  }
  return {
    getTextColor,
    getBackgroundColor,
  }
}
