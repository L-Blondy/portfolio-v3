const plugins = require('./src/styles/plugins');


module.exports = {
  // mode: 'jit',
  purge: [ './src/**/*.{js,ts,jsx,tsx}' ],
  darkMode: false, // or 'media' or 'class'

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '4rem',
        md: '2rem',
        lg: '5rem',
        xl: '11rem',
        '2xl': '18rem',
      },
    },
    extend: {
      animation: {
        'fadeout': 'fadeout 1000ms forwards',
        'fadeout-fast': 'fadeout 300ms forwards',
        'fadein': 'fadein 1000ms forwards',
        'fadein-fast': 'fadein 300ms forwards',
        'fadein-xfast': 'fadein 150ms forwards',
        'scalein': 'scalein 1000ms forwards',
        'scalein-fast': 'scalein 150ms forwards',
        'scalein-full': 'scalein-full 1000ms forwards',
        'from-left': 'from-left 1000ms forwards',
        'from-right': 'from-right 1000ms forwards',
        'from-top': 'from-top 1000ms forwards',
        'from-bottom': 'from-bottom 1000ms forwards',
        'from-left-sm': 'from-left-sm 1000ms forwards',
        'from-right-sm': 'from-right-sm 1000ms forwards',
        'from-top-sm': 'from-top-sm 1000ms forwards',
        'from-bottom-sm': 'from-bottom-sm 1000ms forwards',
      },
      colors: {
        dark: {
          font: '#c4cad0',
          primary: '#67ECDC',
          bg: '#002138',
          'bg-darker': '#001223',
        },
        light: {
          primary: '#27B4A3',
          bg: '#ffffff',
        },
      },
      boxShadow: {
        'outline-primary': '0 0 0 1px #27B4A3',
        'inset-primary': 'inset 0 0 0 1px #27B4A3',
      },
      padding: {
        '1.75': '0.4375rem'
      },
      fontSize: {
        '2xs': '0.625rem',
        'md': '1.0625rem',
      },
      lineHeight: {
        '2': '0.625rem',
      },
      opacity: {
        '15': '0.15',
        '85': '0.85',
      },
      maxWidth: {
        '2xs': '16rem',
        '1/2': '50%',
        '3/4': '75%',
      },
      translate: {
      },
      spacing: {
        '2/5': '40%',
      },
      transitionDuration: {
        '1500': '1500ms',
        '2000': '2000ms',
        '2500': '2500ms',
        '3000': '3000ms',
      },
      transitionDelay: {
        '400': '400ms',
        '1500': '1500ms',
        '2000': '2000ms',
        '2500': '2500ms',
        '3000': '3000ms',
      },
      scale: {
        '10': '0.1',
        '25': '0.25',
        '60': '0.6',
        '65': '0.65',
        '70': '0.7',
        '80': '0.8',
        '85': '0.85',
        '98': '0.98',
      },
      strokeWidth: {
        '3': '3',
      }
    },
    screens: {
      '2xs': '400px',
      'xs': '500px',
      'sm': '640px',
      'md': '768.1px',
      'lg': '1024.1px',
      'xl': '1280.1px',
      '2xl': '1536.1px',
    },
  },
  variants: {
    extend: {
    },
  },
  variants: {
    extend: {
      borderRadius: [ 'focus' ],
      brightness: [ 'hover', 'focus' ],
      filter: [ 'hover' ],
      backgroundColor: [ 'focus-visible' ],
    }
  },
  plugins: [
    ...plugins.utils,
    ...plugins.variants,
  ],
};
