// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the path according to your project structure
  ],
  theme: {
    extend: {
      lineHeight: {
        '36': '36px', 
      },
fontFamily: {
  inter: ['Inter', 'sans-serif'],
  mulish: ['Mulish', 'sans-serif'],
},
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
