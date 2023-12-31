module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./node_modules/tw-elements/dist/js/**/*.js"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Poppins', 'sans-serif'],
      body: ['Poppins', 'sans-serif'],
    },
    extend: {
      fontSize: {
        14: '14px',
      },
      backgroundColor: {
        'main-bg': 'var(--bg-slate-200)', // Updated value
        'main-dark-bg': '#1B1B29',
        'secondary-dark-bg': '#101321',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.8)',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
      },
      colors: {
        greyBlue: "#36527c",
        darkBlue: "#2f476a",
        flourecentBlue: "#0098DC",
        turquoise: "#27b0cc"
      },
    },
  },
  plugins:[require("tw-elements/dist/plugin.cjs")],
};