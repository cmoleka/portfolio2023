const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#46515D",
        },
        turquoise: {
          DEFAULT: "#4ECDC4",
          md: "#146660",
          dark: "#05332F",
          darker: "#227973",
        },
        bittersweet: {
          DEFAULT: "#FF6B6B",
          md: "#661414",
          dark: "#330505",
        },
      },
      fontFamily: {
        sans: ["var(--font-bitter)", ...fontFamily.sans],
        display: ["var(--font-dm-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
