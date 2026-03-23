import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest:       '#2b5c47',
        'forest-dk':  '#1e4234',
        'forest-lt':  '#3d7a60',
        mist:         '#d8eef7',
        sand:         '#f7e0af',
        moss:         '#a7c15e',
        ink:          '#1a2d25',
      },
      fontFamily: {
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
