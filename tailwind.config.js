/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}', "./node_modules/flowbite/**/*.js",],
  theme: {
    extend: {
      fontFamily: {
        sans: ['poppins', 'sans-serif'],
        italic: ['playfair display', 'serif'],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
}

