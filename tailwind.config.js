/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-black': '0px 4px 4px 0px #00000069',
      },
      // backgroundImage: {
      //   herosection: "url('/herosectionbg.png')",
      // },
    },
  },
  plugins: [],
};
