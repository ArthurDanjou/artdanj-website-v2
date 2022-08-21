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
        'nav-dark': '0 4px 6px -1px rgba(0, 0, 0, 0.15), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'nav-light': '0 2px 2px -1px rgba(255, 255, 255, 0.05), 0 2px 4px -1px rgba(255, 255, 255, 0.06)',
      },
    },
  },
})
