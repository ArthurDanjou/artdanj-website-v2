import { useThemeStore } from '~/store/theme'
import { getThemeBackgroundColor, getThemeTextColor } from '~/types/themes'

export function useTheme() {
  const getTheme = computed(() => useThemeStore().theme)
  const getTextColor = () => {
    return getThemeTextColor(getTheme.value)
  }
  const getBackgroundColor = () => {
    return getThemeBackgroundColor(getTheme.value)
  }
  return {
    getTheme,
    getTextColor,
    getBackgroundColor,
  }
}
