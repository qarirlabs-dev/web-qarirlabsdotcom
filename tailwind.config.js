module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        primary: {
          100: '#E6F6FE',
          200: '#C0EAFC',
          300: '#9ADDFB',
          400: '#4FC3F7',
          500: '#03A9F4',
          600: '#0398DC',
          700: '#026592',
          800: '#014C6E',
          900: '#013349',
        },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        blue: {
          50: '#EDF9FF',
          500: '#4FC1F3',
          700: '#1276A2',
          800: '#005479',
        },
        gold: {
          300: '#EFDDA4',
          500: '#BCAC79',
          600: '#A29465',
        },
        neutral: {
          50: '#F1F3F3',
          100: '#E4E6E7',
          200: '#C9CECF',
          500: '#788387',
          900: '#1D2021',
        },
        red: {
          600: '#C10B0B',
        },
      },
      lineHeight: {
        hero: '4.5rem',
      },
      borderRadius: {
        '5xl': '50px',
      },
    },
  },
  variants: {},
  /* eslint-disable global-require */
  plugins: [require('@tailwindcss/forms')],
  /* eslint-enable global-require */
};
