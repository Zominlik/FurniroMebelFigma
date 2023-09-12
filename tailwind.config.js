/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-BgImg': "url('./assets/Img/scandinavian-interior-mockup-wall-decal-background 1.png')",
      }
    },
  },
  plugins: [],
}

