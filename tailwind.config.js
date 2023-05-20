/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "mulish" : ["Mulish", "sans-serif"],
      "palanquin-dark" : ["Palanquin Dark", "sans-serif"]
    },
    extend: {},
  },
  plugins: [],
}

