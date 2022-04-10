module.exports = {
  content: [

    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#3f3cbb',
        'secondary-color': '#121063',
        'accent-color': '#ecebff',
        'dark-color': '#ff77e9',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'] 
      },
    },
  },
  plugins: [],
}
