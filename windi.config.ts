import { defineConfig } from 'vite-plugin-windicss'
import typography from 'windicss/plugin/typography'

export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        spotify: ['DynaPuff', 'sans-serif'],
      },
      textColor: {
        spotify: '#1db954',
        nuxt: '#41b883',
      },
      fontSize: {
        xxs: '.65rem',
      },
      textDecorationColor: {
        'nuxt-light': '#71f5af',
        'nuxt-dark': '#205e47',
        'nuxt': '#41b883',
      },
      backgroundColor: {
        spotify: '#1db954',
      },
      borderColor: {
        dark: 'hsla(0,0%,51.4%,.16)',
      },
      boxShadow: {
        'card': '0 5px 20px 0 rgba(0,0,0,.05)',
        'card-dark': '0 5px 6px 0 rgba(0,0,0,.4)',
      },
    },
  },
  plugins: [
    typography({
      dark: true,
      modifiers: ['sm', 'lg'],
    }),
    require('@windicss/plugin-animations'),
    require('windicss/plugin/line-clamp'),
  ],
})
