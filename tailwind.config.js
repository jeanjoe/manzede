// tailwind.config.js
const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    fontFamily: {
      display: ["K2D", "sans-serif"],
      body: ["K2D", "sans-serif"]
    },
    extend: {
      colors: {
        blue: {
          ...colors.blue,
          "500": "#0652DD"
        }
      }
    }
  },
  variants: {},
  plugins: []
};
