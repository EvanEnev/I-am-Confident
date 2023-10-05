const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    backgroundColor: {DEFAULT: '#F5DEB3'},
    textColor: {
      DEFAULT: '#000000',
      accent: '#5E2605',
    },
  },
  plugins: [
    plugin(function ({addComponents, theme}) {
      addComponents({
        '.typeface': {
          fontSize: '25px',
          lineHeight: '25px',
          color: theme('textColor.DEFAULT'),
        },
        '.button': {
          backgroundColor: '#5E2605',
          borderRadius: '10px',
          padding: 10,
          color: '#FFFFFF',
        },
        '.card': {
          borderRadius: '10px',
          borderWidth: '2px',
          padding: '10px',
        },
      });
    }),
  ],
};
export default config;
