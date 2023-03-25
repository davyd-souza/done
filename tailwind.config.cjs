/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
      colors: {
        primary: {
          900: '#172016',
          800: '#1e2a1e',
          700: '#263526',
          600: '#2e402d',
          500: '#3d553c', // light theme
          400: '#4c6a4b', // light theme
          300: '#70886f',
          200: '#94a693',
          100: '#b7c3b7',
        },
        secondary: {
          900: '#42475e',
          800: '#535976',
          700: '#646b8e',
          600: '#858ebd',
          500: '#a6b2ec',
          400: '#b8c1f0', // dark theme
          300: '#cad1f4', // dark theme
          200: '#d3d9f6',
          100: '#dbe0f7',
        },
        background: {
          900: '#121214',
          100: '#faf3ed',
        },
      },
    },
  },
  plugins: [],
}
