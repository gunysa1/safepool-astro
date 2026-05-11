/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0a1f44',
        brand: {
          red: '#e8212e',
          blue: '#3b82f6',
          'light-blue': '#f0f7ff',
        },
      },
      fontFamily: {
        assistant: ['Assistant', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
