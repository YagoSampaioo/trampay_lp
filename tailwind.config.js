/** @type {import('tailwindcss').Config} */
import aspectRatio from '@tailwindcss/aspect-ratio';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        trampay: '#28FA7B',    // Cor principal da marca
        objetivo: '#00D88A',   // Cor secundária para objetivos
        focal: '#DEF6EB',      // Cor de fundo focal
        offwhite: '#FFFCF2',   // Cor branca com tom suave
        bold: '#E2FA53',       // Cor de destaque
        sobrio: '#244549',     // Cor para textos secundários
        profundo: '#002711'    // Cor para textos principais e fundos escuros
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],           // Fonte para títulos
        'source-sans': ['"Source Sans 3"', 'sans-serif'] // Fonte para textos
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'float-slow 4s ease-in-out infinite',
        'float-slower': 'float-slower 5s ease-in-out infinite',
      }
    },
  },
  plugins: [
    aspectRatio,
  ],
};