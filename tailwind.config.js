/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#10233f',
          50: '#e8ecf2',
          100: '#c5cde0',
          200: '#9daace',
          300: '#7587b1',
          400: '#566b99',
          500: '#375082',
          600: '#2d4269',
          700: '#233352',
          800: '#19253d',
          900: '#0d1527',
        },
        mint: {
          DEFAULT: '#2fbbb1',
          50: '#e5f7f5',
          100: '#c2edea',
          200: '#9ce3df',
          300: '#76d9d3',
          400: '#4fcfc7',
          500: '#2fbbb1',
          600: '#1f9a91',
          700: '#187c75',
          800: '#115d58',
          900: '#0a3f3b',
        },
        gold: {
          DEFAULT: '#f2aa2e',
          50: '#fef6e5',
          100: '#fde9be',
          200: '#fcdb96',
          300: '#fbcd6e',
          400: '#fac049',
          500: '#f2aa2e',
          600: '#d48f14',
          700: '#b86e08',
          800: '#8c5507',
          900: '#603c06',
        },
        ink: '#172033',
        muted: '#5e6a7d',
        line: '#dce4ed',
        soft: '#f4f8fb',
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-right': 'slideRight 0.5s ease-out forwards',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};
