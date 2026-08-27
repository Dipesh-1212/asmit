/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        board: {
          950: '#081410',
          900: '#0C1D17',
          800: '#12271F',
          700: '#1B3A2E',
          600: '#265041',
        },
        copper: {
          400: '#E3966B',
          500: '#CD7C4C',
          600: '#B0623A',
        },
        gold: {
          400: '#E8C077',
          500: '#D4A343',
        },
        silk: {
          100: '#F3F1E7',
          200: '#E8E6DA',
          400: '#B9C2B9',
          600: '#7C8B82',
        },
      },
      fontFamily: {
        stencil: ['"Big Shoulders Stencil Display"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        sans: ['"IBM Plex Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'grid-lines':
          'linear-gradient(rgba(180,200,190,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(180,200,190,0.06) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
