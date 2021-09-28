const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      "1/10": "10%",
    },
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
      colors: {
        primary: "#6e83b7",
        primaryDark: "#485d91",
        secondary: "#ffe352",
        secondaryLight: "#ffef9f",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
