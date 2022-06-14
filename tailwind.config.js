module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   screens:{
    'lg': '820px',
    'sm':[{'max':'640px'}]
   },
    extend: {
      fontFamily:{
        'montserrat': ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}
