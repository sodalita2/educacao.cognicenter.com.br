/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xsm': '400px',
        'xsm': '500px',
        ...defaultTheme.screens,
      },
      colors: {
        "orange-rgba": 'rgba(255, 219, 174, 0.41)',
        "orange-rgba-lighter": 'rgba(255, 219, 174, 0.10)',
      },
      animation: {
        'NavHoverShow': 'NavHoverShow 0.4s',
        'NavHoverHide': 'NavHoverHide 0.4s',
      },
      fontFamily: {
        lexend: ['Lexend Deca', 'sans-serif'],
        nunito: ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
