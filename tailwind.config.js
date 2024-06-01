/** @type {import('tailwindcss').Config} */


// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         MochiyPopOne: "'Mochiy Pop One', sans-serif",
//         Poppins: "'Poppins', sans-serif;"
//        }
//     },
//   },
//   plugins: [require("daisyui")],
// }

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        MochiyPopOne: "'Mochiy Pop One', sans-serif",
        Poppins: "'Poppins', sans-serif;"
       }
    },
  },
  plugins: [require("tailgrids/plugin")],
};