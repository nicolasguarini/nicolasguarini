/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        robotomono: ["Roboto Mono"]
      }
    },
    colors: {
      'black': '#0F0F0F',
      'white': '#EDEDED',
      'gray': '#CCCCCC',
      'lightgray': '#808080'
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
