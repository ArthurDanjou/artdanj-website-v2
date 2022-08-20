import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    theme: 'sky',
  }),
  actions: {
    setTheme(theme) {
      this.theme = theme
    },
  },
  getters: {
    getTheme(state) {
      return state.theme
    },
  },
  persist: true,
})
