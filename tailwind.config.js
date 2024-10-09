/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/Images/Object.png')",
        'section-pattern': "url('/src/assets/Images/background.png')"
      },
      colors: {
        'primary': '#FF6565',
        'secondary': '#071629',
      },
      fontFamily: {
        'SourceReg': ['SourceReg', 'sans-serif'],
        'SourceBold': ['SourceBold', 'sans-serif'],
      },
      screens: {
        'mobile': '600px',
        'tablet': '850px',
        'laptop': '1024px',
      }
    },
    plugins: [],
  }
}