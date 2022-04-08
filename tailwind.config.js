// const defaultTheme = require('tailwindcss/defaultTheme');
// fontFamily: {
//   sans: ['Inter var', ...defaultTheme.fontFamily.sans],
// },

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        quaternary: "var(--color-quaternary)",
      },
    },
  },
  plugins: [],
};
