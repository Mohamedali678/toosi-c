/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#FB5A01",
        secondaryColor: "#0F1641",
        thirdColor: "white"
      }
    },
  },
  plugins: [],
}

