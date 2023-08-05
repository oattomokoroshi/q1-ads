/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xl': '1280px',
      },
      spacing: {
        '35': '8.75rem', // Customize the spacing value if needed
      },
      minWidth: {
        '678': '678px',
      },
      inset: {
        '35': '8.75rem', // Customize the inset value if needed
      },
      right: {
        '155': '155px',
      },
    },
  },
  plugins: [],
}