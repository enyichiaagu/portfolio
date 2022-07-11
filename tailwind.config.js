/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#700670",
        bgGray: "#f9f9f9",
        textGray: "#666666" 
      },
      fontFamily: {
        russo: ['Russo One', 'sans-serif']
      }
    },
  },
  plugins: [],
}
