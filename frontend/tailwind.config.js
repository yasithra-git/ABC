/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'custom-dark-blue': '#0852a6',
      'light-blue': '#559ced',  // Custom light blue color
    },
    backgroundImage: {
      'custom-gradient': 'linear-gradient(to right, #E0F7FA, #0077B6)',  // Custom gradient
      'custom-gradient-top-to-bottom': 'linear-gradient(to bottom,#0077B6,#E0F7FA)',
      'custom-gradient-bottom-to-top': 'linear-gradient(to bottom,#E0F7FA,#0077B6)',
      'custom-gradient-right-to-left': 'linear-gradient(to right, #0077B6, #032b59)',
      'custom-gradient-left-to-right': 'linear-gradient(to right, #032b59,#0077B6)',
    },
    backgroundBlendMode: {
      'custom-blend': 'multiply',  // Custom blend mode
    },
  },
  plugins: [],
}