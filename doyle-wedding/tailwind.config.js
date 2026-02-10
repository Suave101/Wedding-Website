/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'wedding-scarlet': '#3B2C22', // Deep Bronze (desaturated)
        'wedding-ruby': '#781727',    // Antique Ruby
        'wedding-puce': '#AC5B67',    // Deep Puce
        'wedding-pearl': '#E2B3C2',   // Pink Pearl
        'wedding-almond': '#EFD4C4',  // Almond
      },
    },
  },
  plugins: [],
};
