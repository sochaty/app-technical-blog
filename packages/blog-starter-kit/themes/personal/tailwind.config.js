/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  darkMode: 'class', // Keep this as 'class' so we can force it
  theme: {
    extend: {
      colors: {
        // The background of your main portfolio
        navy: {
          900: '#0f172a',
          950: '#020617',
        },
        // The blue accent for links and names
        accent: '#38bdf8', 
        primary: colors.blue,
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
