/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        oceanic: {
          50: '#f0f7fc',
          100: '#e0eff9',
          200: '#b9ddf2',
          300: '#7cc3e8',
          400: '#38a5dc',
          500: '#0f87c4',
          600: '#066aa3',
          700: '#075584',
          800: '#0a486e',
          900: '#0a2540', // Deep Oceanic Navy
          950: '#061729',
        },
        glacier: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0284c7', // Pristine Alpine Blue
          600: '#0369a1',
          700: '#075985',
        },
        copper: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#c25e19', // Warm Ayurvedic Copper
          700: '#b45309',
          800: '#99300c',
          900: '#7c2d12',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
