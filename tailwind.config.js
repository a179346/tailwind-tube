/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: "0.1rem"
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
    screens: {
      sm: "657px",
      md: "792px"
    },
    extend: {
      spacing: {
        18: '4.5rem',
      },
    }
  },
  plugins: [
  ]
}
