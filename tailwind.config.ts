import type {Config} from 'tailwindcss'
import tailwindTypography from '@tailwindcss/typography'

export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        spotify: ['DynaPuff', 'sans-serif'],
      },
      colors: {
        dark: {
          50: '#4a4a4a',
          100: '#3c3c3c',
          200: '#323232',
          300: '#2d2d2d',
          400: '#222222',
          500: '#1f1f1f',
          600: '#1c1c1e',
          700: '#1b1b1b',
          800: '#181818',
          900: '#0f0f0f',
        },
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
    tailwindTypography,
  ],
}
