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
        'accent-color': '#FF7452',
        'secondary-color': '#009EEB',
        
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'] 
      },
    },
  },
  plugins: [],
}
