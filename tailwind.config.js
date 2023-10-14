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
    backgroundColor: {
      DEFAULT: '#F5DEB3',
      accent: '#5E2605',
      transparent: 'transparent',
    },
    colors: {accent: '#5E2605', white: 'white'},
    textColor: {
      DEFAULT: '#000000',
      accent: '#5E2605',
      button: '#FFFFFF',
    },
  },
  daisyui: {
    themes: [
      {
        main: {
          primary: '#5E2605',
          'primary-focus': '#5E2605',
          secondary: '#5E2605',
          accent: '#5E2605',
          neutral: '#f5deb3',
          'base-100': '#f5deb3',
          info: '#3abff8',
          success: '#36d399',
          warning: '#fbbd23',
          error: '#f87272',
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
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
          borderWidth: 2,
          borderColor: theme('colors.accent'),
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
