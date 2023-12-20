/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#f9f2e7',
          100: '#f2e5cc',
          200: '#e0cbb1',
          250: '#F5DEB3', //wheat
          300: '#EADDCA', //almond
          400: '#CD7F32', //bronze
          500: '#C19A6B', //camel
          600: '#6F4E37', //coffee
          700: '#5C4033', //dark brown
          800: '#966919', //golden brown
          900: '#C4A484', //light brown
          925: '#967969', //mocha
          950: '#F2D2BD', //nude
          975: '#D2B48C', //tan

          // Add more shades as needed
        },
        tan: {
          25: '#faf7f3',
          50: '#f6f0e8',
          75: '#f1e8dc',
          100: '#ede1d1',
          125: '#e8d9c5',
          150: '#e4d2ba'
        }
      },
    },
  },
  plugins: [],
}

