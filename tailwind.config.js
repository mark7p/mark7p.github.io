/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
        },
      },
      colors: {
        'custom-teal': {
          50: '#c5d1cb',
          100: '#9ec8b9',
          200: '#5c8374',
          300: '#1b4242',
          400: '#092635',
          500: '#020d1b',
        }
      }
    },
    plugins: [],
  }