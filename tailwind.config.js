import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'banner': 'url(\'/src/assets/images/banner.jpg\')'
      },
      fontFamily: {
        sans: ['Poppins', ...fontFamily.sans]
      },
      screens: {
        sm: '240px',
        md: '640px',
        lg: '800px',
        xl: '1024px',
        '2xl': '1280px',
      },
    },
  },
  plugins: [],
};
