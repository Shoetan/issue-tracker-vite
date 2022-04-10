module.exports = {
  content: [

    "./**/*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      colors: {
        'white-color': '#FFFFFF',
        'black-color': '#010101',
        'primary-color': '#B1D4E0',
        'secondary-color': '#2E8BC0',
        'accent-color': '#145DA0',
        
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'] 
      },
    },
  },
  plugins: [],
}
