/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colori personalizzati per il marketplace
        amazon: {
          orange: '#FF9900',
          blue: '#232F3E',
          light: '#F3F3F3'
        }
      },
      fontFamily: {
        'amazon': ['Amazon Ember', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}