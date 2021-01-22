const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: {
        light: 'hsl(71, 73%, 54%)',
        DEFAULT: 'hsl(179, 62%, 43%)',
      },
      neutral: {
        light: 'hsl(205, 44%, 93%)',
        DEFAULT: 'hsl(0, 0, 100%)',
        dark: 'hsl(218, 22%, 67%)',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Karla', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
