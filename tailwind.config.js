/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#020617',
          900: '#0A2540',
          800: '#0F2D4A',
          700: '#1a3a5c',
        },
        accent: {
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
