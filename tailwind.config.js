// const defaultTheme = require('tailwindcss/defaultTheme');
// fontFamily: {
//   sans: ['Inter var', ...defaultTheme.fontFamily.sans],
// },
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        quaternary: 'var(--color-quaternary)',
        textBtn: 'var(--color-text-btn)',
        rose: colors.rose,
      },
      fontFamily: {
        sans: ['Poppins'],
        poppins: ['Poppins'],
      },
      animation: {
        'bubble-translate': 'bubleTranslate 30s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
