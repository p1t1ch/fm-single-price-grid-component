const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: {
        light: 'hsl(71, 73%, 54%)',
        hover: 'hsl(71, 73%, 48%)',
        DEFAULT: 'hsl(179, 62%, 43%)',
      },
      neutral: {
        light: 'hsl(205, 44%, 93%)',
        DEFAULT: 'hsl(0, 0%, 100%)',
        dark: 'hsl(218, 22%, 67%)',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Karla', ...defaultTheme.fontFamily.sans],
      },
      padding: {
        18: '4.5rem',
      },
      boxShadow: {
        grid: '0px 15px 30px rgba(0, 81, 171, 0.148847)',
        button: '0px 10px 10px rgba(0, 0, 0, 0.0973011)',
      },
      maxWidth: {
        lg: '39.6875rem',
      },
      fontSize: {
        '3xl': '2rem',
      },
      opacity: {
        85: '.85',
      },
      borderRadius: {
        button: '.3125rem',
      },
    },
  },
}
