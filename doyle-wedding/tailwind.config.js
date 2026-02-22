/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Add this if you are using a src/ folder!
  ],
  theme: {
    extend: {
      colors: {
        'wedding-scarlet': '#3B2C22', 
        'wedding-ruby': '#781727',    
        'wedding-puce': '#AC5B67',    
        'wedding-pearl': '#E2B3C2',   
        'wedding-almond': '#EFD4C4',  
      },
    },
  },
  plugins: [],
};