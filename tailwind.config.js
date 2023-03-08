/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
