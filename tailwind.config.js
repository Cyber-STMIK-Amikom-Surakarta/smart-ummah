import { fontFamily } from 'tailwindcss/defaultTheme';

const defaultFonts = ['Poppins', ...fontFamily.sans];

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'banner': 'url(\'/src/assets/images/banner.jpg\')',
        'banner-e-learning': 'url(\'/src/assets/images/e-learning-banner.jpg\')',
        'banner-podcast': 'radial-gradient(345.16% 343.52% at 51.82% -159.87%, #8ADAB2 0%, rgba(138, 218, 178, 0.40) 100%)',
      },
      fontFamily: {
        sans: defaultFonts,
        'vietnam-pro': ['Be Vietnam Pro', ...defaultFonts],
      },
      screens: {
        sm: '240px',
        md: '640px',
        lg: '800px',
        xl: '1024px',
        '2xl': '1280px',
      },
      boxShadow: {
        '3d': '0px 2px 5px -2px rgba(0, 0, 0, 0.25);',
      },
    },
  },
  plugins: [],
};
