import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
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
export default config
