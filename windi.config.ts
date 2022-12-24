import { defineConfig } from 'vite-plugin-windicss'
import colors from 'windicss/colors'
export default defineConfig({
  extract: {
    include: [
      'app/views/**/*.{html,erb}',
      'app/helpers/**/*.rb',
      'app/javascript/**/*.{vue,js,ts,jsx,tsx}',
    ],
  },
  theme: {
    fontFamily: {
      'body': [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ],
      'sans': [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ]
    },
    extend: {
      colors: {
        primary: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a" },
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        red: colors.red,
        orange: colors.orange,
        yellow: colors.yellow,
        green: colors.green,
        gray: colors.slate,
        indigo: {
          100: '#e6e8ff',
          300: '#b2b7ff',
          400: '#7886d7',
          500: '#6574cd',
          600: '#5661b3',
          800: '#2f365f',
          900: '#191e38',
        },
      },
      borderColor: theme => ({
        DEFAULT: theme('colors.gray.200', 'currentColor'),
      }),
      boxShadow: theme => ({
        outline: `0 0 0 2px ${theme('colors.indigo.500')}`,
      }),
      fill: theme => theme('colors'),
    },
  },
})