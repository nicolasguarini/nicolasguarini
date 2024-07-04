import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ["selector", "[data-theme*='dark']"],
  theme: {
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
