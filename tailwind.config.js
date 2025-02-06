
/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: 'Lato',
        inter: 'Inter',
      },
      colors: {
        primary: '#9538E2',
      },
      backgroundImage: {
        banner: "url('./assets/banner.jpg')"
      },
    },
  },
  plugins: [daisyui],
}

