/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './components/**/*.{html,js,vue}'
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './components/**/*.{html,js,vue}'
  ],
  safelist: [
    {
      pattern: /^(.*?)/,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
         sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xtiny: '10px',
        tiny: '11px',
        xxs: '0.75rem',
        xs: '0.8125rem',
        huge: '1.375rem',
        xhuge: '1.625rem',
      },
      colors: {
        pink: {
          10: '#fff7fb',
          50: '#ffeff8',
          100: '#ffdff1',
          200: '#ffbfe2',
          300: '#ff7fc5',
          400: '#ff3fa7',
          500: '#ff008b',
        },
        blue: {
          50: '#eff3ff',
          100: '#dfe5fd',
          200: '#bfccfc',
          300: '#7f9af9',
          400: '#3f68f6',
          500: '#0137f3',
          600: '#0731c3',
          700: '#0f2a92',
        },
        orange: {
          50: '#fffaef',
          100: '#fff4e0',
          200: '#ffe9c1',
          300: '#ffd483',
          400: '#ffbe45',
          500: '#ffa908',
        },
        gray: {
          10: '#f5f5f5',
          50: '#f5f6f8',
          100: '#f1f1f2',
          200: '#e3e3e5',
          300: '#c6c6cb',
          400: '#8e8f99',
          500: '#555665',
          600: '#1d1e32',
        },
        error: '#ff2508',
        warning: '#ffa908',
        success: '#1aa73f',
        black: '#000000',
        muted: '#CED0DA',
        gotham: '#434343',
        body: '#f5f6f8',
      },
      borderWidth: {
        5: '5px',
      },
      spacing: {
        1.25: '0.3125rem',
        3.75: '0.9375rem',
        5.5: '1.375rem',
        6.25: '1.5625rem',
        7.5: '1.875rem',
        15: '3.75rem',
      },
      width: {
        2.5: '0.625rem',
        4.5: '1.125rem',
        8.5: '1.875rem',
        12: '2.25rem',
        18: '4.5rem',
        22.5: '5.625rem',
        25: '6.25rem',
        25.75: '6.44rem',
        30: '7.5rem',
        31: '7.5rem',
        34: '8.5rem',
        37: '9.25rem',
        45: '11.25rem',
        50: '12.50rem',
        57.5: '14.375rem',
        58.5: '14.625rem',
        67.5: '16.875rem',
        73.25: '18.3125rem',
        81: '21.25rem',
        84: '21rem',
        90: '25rem',
        112: '28rem',
        115: '28.75rem',
        120: '30rem',
        147: '37rem',
        154: '38.5rem',
        212: '53.125rem',
        222: '55.625rem',
        242: '60.625rem',
        1230: '76.875rem',
        '19/20': '95%',
      },
      height: {
        1.25: '0.3125rem',
        1.75: '0.438rem',
        4.5: '1.125rem',
        5.5: '1.25rem',
        7.5: '2.25rem',
        11.5: '2.875rem',
        12.5: '3.125rem',
        15: '3.75rem',
        17: '4.25rem',
        18: '4.5rem',
        18.5: '4.625rem',
        30: '7.5rem',
        32: '8.3rem',
        35: '8.75rem',
        45: '11.25rem',
        50: '12.5rem',
        57.5: '14.375rem',
        147: '37.08rem',
        415: '25.938rem',
      },
      minHeight: {
        '240px': '240px',
      },
      minWidth: {
        '200px': '200px',
        '240px': '240px',
        984: '61.5rem',
      },
      maxWidth: {
        '300px': '300px',
      },
      rotate: {
        m90: '-90deg',
      },
      lineHeight: {
        '00': 0,
        1: '0.25rem',
        2: '0.5rem',
        4.5: '1.125rem',
      },
      borderRadius: {
        '4xl': '1.875rem',
      },
      zIndex: {
        999: '999',
      },
    },
  },
  variants: {
    extend: {
      border: ['last'],
    },
  },

}
