import type { Config } from 'tailwindcss';

const size = {
  '2.25': '0.5625rem',
  '2.75': '0.6875rem',
  '3': '0.75rem',
  '3.25': '0.8125rem',
  '3.5': '0.875rem',
  '3.75': '0.9375rem',
  '6.25': '1.5625rem',
  '7.5': '1.875rem',
  '11.5': '2.875rem',
  '13': '3.25rem',
  '13.5': '3.375rem',
  '13.75': '3.4375rem',
  '15': '3.75rem',
  '17.5': '4.375rem',
  '18': '4.5rem',
  '18.5': '4.625rem',
  '25': '6.25rem',
  '35': '8.75rem',
  '45': '11.25rem',
  '100': '25rem',
};

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '320px',
      sm: '425px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '2xl': '1920px',
    },
    extend: {
      width: {
        ...size,
      },
      height: {
        ...size,
      },
      margin: {
        ...size,
      },
      gap: {
        ...size,
      },
      padding: {
        ...size,
      },
      fontSize: {
        ...size,
      },
      colors: {
        black: 'var(--black)',
        white: 'var(--white)',
        gray1: 'var(--gray1)',
        gray2: 'var(--gray2)',
        gray3: 'var(--gray3)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        tertiary: 'var(--tertiary)',
        red: 'var(--red)',
      },
      fontFamily: {
        sans: ['Noto Sans KR', 'sans-serif'],
        poetsen: ['Poetsen One', 'sans-serif'],
      },
      boxShadow: {
        md: '0px 2px 8px 0px rgba(0, 0, 0, 0.10)',
      },
      borderRadius: {
        ...size,
      },
    },
  },
  plugins: [],
} satisfies Config;
