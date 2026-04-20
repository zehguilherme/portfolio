import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#f9f9f9',
        foreground: '#2d3435',
        primary: {
          DEFAULT: '#0f172a',
          foreground: '#faf7fb',
        },
        secondary: {
          DEFAULT: '#f4f4f5',
          foreground: '#2d3435',
        },
        muted: {
          DEFAULT: '#f2f4f4',
          foreground: '#596061',
        },
        accent: {
          DEFAULT: '#f2f4f4',
          foreground: '#2d3435',
        },
        destructive: {
          DEFAULT: '#9f403d',
          foreground: '#fff7f6',
        },
        border: '#dde4e5',
        input: '#dde4e5',
        ring: '#0f172a',
        card: {
          DEFAULT: '#ffffff',
          foreground: '#2d3435',
        },
        popover: {
          DEFAULT: '#ffffff',
          foreground: '#2d3435',
        },
        tertiary: {
          DEFAULT: '#605c78',
          foreground: '#fcf7ff',
        },
      },
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
