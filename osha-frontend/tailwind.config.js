/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: '#0082C3',
        azulMedio: '#36A6D5',
        azulClaro: '#3CBDE8',
        secondary: '#DEA705',
        grisOscuro: '#5C5E5D',
        grisMedio: '#A3A8A9',
        grisClaro: '#CACECE',
        white: '#ffffff',
        black: '#000000',
      },
    },
  },
}

