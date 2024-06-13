/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'customnb': '1020px',
      }
    },
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

        amarilloFuerte: '#F6BB42',
        amarillo: '#FFCE54',
        amarilloClaro: '',
        
        rosaFuerte:'#D770AD',
        rosa: '#EC87C0',
        rosaClaro:'#FFE9F6',

        mintFuerte: '#37BC9B',
        mint: '#48CFAD',
        mintClaro:'#D2F3EA',

        lilaFuerte: '#967ADC',
        lila: '#AC92EC',
        lilaClaro:'#E8DFFE',

        celesteFuerte: '#3BAFDA',
        celeste: '#4FC1E9',
        celesteClaro:'#DCF6FF',

        rojoFuerte: '#DA4453',
        rojo: '#ED5565',
        rojoClaro: '#FFD6DA',

        verde: '#3BC0A0',
        morado: '#763BC0',
        
        youtube: '#E81D1D',
        whatsapp: '#25D366',
        telegram: '#0088cc',
        facebook: '#1877F2',
        linkedin: '#0A66C2',
        twitter: '#1DA1F2',
        instagram: '#E1306C',
      },
      backgroundImage: {
        Hero: "url('assets/Hero.png')",
      },
    },
  },
}

