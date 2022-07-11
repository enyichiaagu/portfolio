/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#700670",
          dark: "#580558"
        },
        bgGray: {
          DEFAULT: "#f9f9f9",
          dark: "#d4d3d3"
        },
        textGray: {
          DEFAULT: "#666666",
          dark: "#585757"
        }
      },
      fontFamily: {
        russo: ['Russo One', 'sans-serif']
      }
    },
  },
  plugins: [],
}
