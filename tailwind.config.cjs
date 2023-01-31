/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'inter':["Inter"]
      }
    },
    
    colors:{
      primary: '#23122b',
      secondary: '#1C1736',
      graph: '#F9F9F8',
      feedback:'#F6F0EE',
      color_left:'#c38cf2',
      color_middle:'#72a4da',
      color_right:'#66ffec',
      teal: "#52aed1",
      font_primary: "#5a5454",
      font_secondary:"#716969",
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
