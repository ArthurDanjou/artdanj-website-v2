import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        spotify: ['DynaPuff', 'sans-serif'],
      },
      textColor: {
        spotify: '#1db954',
      },
      backgroundColor: {
        spotify: '#1db954',
      },
      borderColor: {
        dark: 'hsla(0,0%,51.4%,.16)',
      },
      boxShadow: {
        'dark': 'hsla(0,0%,51.4%,.16) 0px 0px 0px 3px',
        'nav-dark': '0 20px 20px -3px rgba(0, 0, 0, 0.15), 0 0 8px -1px rgba(0, 0, 0, 0.06)',
        'nav-light': '0 20px 20px -3px rgba(255, 255, 255, 0.05), 0 0 8px -1px rgba(255, 255, 255, 0.06)',
      },
    },
  },
})
