/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      padding: {
        4.5: '1.125rem',
        7.5: '1.875rem',
      },
      lineHeight: {
        normal: 'normal',
      },
    },
    screens: {
      mobile: '375px',
      desktop: '1440px',
    },
  },
  plugins: [],
};
