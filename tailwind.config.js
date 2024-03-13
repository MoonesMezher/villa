/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "__orange": "#f35525",
        "__pink": "#fbd9cf",
        "__white_pink": "#ffeee9",
        "__dark_pink": "#ee626b",
        "__blue": "#0d6efd",
        '__white_orange': 'rgb(243, 85, 37, 50%)',
        '__gray': '#fafafa'
      }
    },
  },
  plugins: [],
}

