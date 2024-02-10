import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#95A2B6',
        accent: '#0E1424',
        border: '#1F2939',
        background: '#020510'
      }
    }
  },
  plugins: []
}
export default config
