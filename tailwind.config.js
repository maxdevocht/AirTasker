/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#0A65FC',
        darkBlue: '#051357',
        lightBlue: '#e7f0ff',
        white: '#ffffff',
        beige: '#f9f3ee',
        gray: '#d3d4da'
      }
    },
  },
  plugins: [],
}