/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        merriweather : ['Merriweather','serif']
      },
      fontFamily: {
        crimsonpro : ["Crimson Pro", "serif"]
      },
      fontFamily: {
        opensans: [ "Open Sans", "sans-serif" ]
      }
    },
  },
  plugins: [],
}

