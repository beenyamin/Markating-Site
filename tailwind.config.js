/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(10px)',
      },
      fontFamily: {
        MochiyPopOne: "'Mochiy Pop One', sans-serif",
        Poppins: "'Poppins', sans-serif;"
       }
    },
  },
  plugins: [require("tailgrids/plugin")  ],
  
};