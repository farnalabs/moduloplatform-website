/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        ink: {
          50: '#E8EDF2',
          100: '#C5CDD8',
          200: '#9CA6B5',
          300: '#7B8794',
          400: '#5A6673',
          500: '#3D4852',
          600: '#262E38',
          700: '#1E2630',
          800: '#12171F',
          900: '#0B0E14',
          950: '#06080C',
        },
        teal: {
          50: '#E6FFFA',
          100: '#B3FFE8',
          200: '#80FFD9',
          300: '#4DFFCB',
          400: '#1AFFBD',
          500: '#00FFD1',
          600: '#00CCA8',
          700: '#009980',
          800: '#006658',
          900: '#003330',
        },
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
}
