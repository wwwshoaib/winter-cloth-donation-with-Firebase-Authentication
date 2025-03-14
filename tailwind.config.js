import daisyui from 'daisyui';


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: [ "Poppins", "sans-serif"],
        caveat: ["Caveat", ],
        indie: ["Indie Flower"],
      },
    },
  },
  plugins: [
    daisyui,
  
  ],
};

