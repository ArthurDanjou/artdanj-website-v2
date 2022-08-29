import { useThemeStore } from '~/store/theme'
import { getThemeBackgroundColor, getThemeHoverBackgroundColor, getThemeTextColor } from '~/types/themes'

export function useTheme() {
  const getTheme = computed(() => useThemeStore().theme)
  const getTextColor = () => {
    return getThemeTextColor(getTheme.value)
  }
  const getBackgroundColor = () => {
    return getThemeBackgroundColor(getTheme.value)
  }
  const getBackgroundHoverColor = () => {
    return getThemeHoverBackgroundColor(getTheme.value)
  }
  return {
    getTheme,
    getTextColor,
    getBackgroundColor,
    getBackgroundHoverColor,
  }
}
