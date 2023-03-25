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
          900: '#804a65',
          800: '#995879',
          700: '#b3678d',
          600: '#cc76a2',
          500: '#e684b6',
          400: '#ff93ca', // dark theme
          300: '#ffa9d5', // dark theme
          200: '#ffbedf',
          100: '#ffd4ea',
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
