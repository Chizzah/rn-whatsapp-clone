/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          100: "#ece5dd",
          200: "#34b7f1",
          300: "#dcf8c6",
          400: "#25d366",
          500: "#128c7e",
          600: "#075e54",
        },
      },
    },
  },
  plugins: [],
};
