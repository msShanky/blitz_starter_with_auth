// tailwind.config.js
module.exports = {
  darkMode: ["class", '[data-mantine-color-scheme="dark"]'],
  content: ["./{src,app,pages}/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins, sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}
