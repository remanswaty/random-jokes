/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    // screens: {
    //   'xl': {'max': '1400px'},
    //   'lg': {'max': '1200px'},
    //   'md': {'max': '992px'},
    //   'sm': {'max': '768px'},  
    //   'xs': {'max': '576px'}  
    // },
    extend: {
      colors: {
        black: '#171321',
        dkblue: "#0d314b",
        plum: "#4b0d49",
        hotmag: "#ff17e4",
        magenta:" #e310cb",
        aqua: "#86fbfb",
        white: "#f7f8fa",
      },
      fontFamily: {
      sans: ['Oxygen', 'sans-serif'],
      mono: ['Oxygen mono', 'monospace'],
      league: ['League Gothic'],
      kurale: ['kurale', 'sans-serif']

    },
    },
  },
  plugins: [],
}

