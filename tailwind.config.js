/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#e6f1f9',
          100: '#cce3f3',
          200: '#99c7e6',
          300: '#66abd9',
          400: '#338fcc',
          500: '#0077B6', // primary
          600: '#006da4',
          700: '#005d8d',
          800: '#004e76',
          900: '#003f5f',
        },
        teal: {
          50: '#e6f9fb',
          100: '#ccf3f7',
          200: '#99e6ef',
          300: '#66dae7',
          400: '#33cddf',
          500: '#00B4D8', // secondary
          600: '#00a2c2',
          700: '#008da8',
          800: '#00778e',
          900: '#006174',
        },
        purple: {
          50: '#f3e6f9',
          100: '#e7ccf3',
          200: '#cf99e6',
          300: '#b766d9',
          400: '#9f33cc',
          500: '#7209B7', // accent
          600: '#6708a5',
          700: '#58078e',
          800: '#490676',
          900: '#3b055f',
        },
        green: {
          50: '#e8f7e8',
          100: '#d1eed1',
          200: '#a3dda3',
          300: '#75cc75',
          400: '#47bb47',
          500: '#38b000', // success
          600: '#329e00',
          700: '#2b8700',
          800: '#247000',
          900: '#1e5c00',
        },
        amber: {
          50: '#fff8e6',
          100: '#fff1cc',
          200: '#ffe299',
          300: '#ffd466',
          400: '#ffc533',
          500: '#ffb700', // warning
          600: '#e6a500',
          700: '#cc9100',
          800: '#b37e00',
          900: '#996800',
        },
        red: {
          50: '#f9e6e6',
          100: '#f3cccc',
          200: '#e69999',
          300: '#d96666',
          400: '#cc3333',
          500: '#d00000', // error
          600: '#bb0000',
          700: '#a10000',
          800: '#870000',
          900: '#6d0000',
        },
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              lineHeight: 1.2,
            },
            h2: {
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              lineHeight: 1.2,
            },
            h3: {
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 600,
              lineHeight: 1.3,
            },
            h4: {
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 600,
              lineHeight: 1.3,
            },
            body: {
              fontFamily: 'Open Sans, sans-serif',
              lineHeight: 1.5,
            },
          },
        },
      },
    },
  },
  plugins: [],
};