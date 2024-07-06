import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ["selector", "[data-theme*='dark']"],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        robotomono: ["Roboto Mono"],
        geist: ["Geist"]
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
