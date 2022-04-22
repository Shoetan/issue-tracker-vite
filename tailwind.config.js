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
        'black-color': '#767676',
        'primary-color': '#f3f2ef',
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
