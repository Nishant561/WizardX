/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '800px'},
      // => @media (max-width: 639px) { ... }

      '865' : {'max': '865px'},

      '800' :{'min' : '800px'},

      '1286' :{'max' : '1286px'},
      '944' :{'max' : '944px'},


      
    }

  },
  plugins: [],
}