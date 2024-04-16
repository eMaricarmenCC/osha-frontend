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
        azulOscuro: '#197CAD',
        azulMedio: '#36A6D5',
        azulClaro: '#3BBBE6',
        secondary: '#DEA705',        
        grisOscuro: '#5C5E5D',
        grisMedio: '#B1B6B7',
        grisClaro: '#D8DDDD', 
        grisFondo: '#F5F5F5',
        verde: '#3BC0A0',
        rosa: '#C03BAB',
        morado: '#763BC0',
        
        red: '#F46060',
        green: '#5CB85C',
        yellow: '#F0C62F',

        whatsapp: '#25D366',
        telegram: '#0088cc',
        facebook: '#1877F2',
        linkedin: '#0A66C2',
        twitter: '#1DA1F2',
        instagram: '#E1306C',
      },
    },
  },
}

