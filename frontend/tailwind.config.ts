import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#990012',
        snow: '#FCF6F6',
        jasmine: '#ffd173', //'#e4c482'
        peach: '#FEE4B5'
      },
      fontFamily: {
        sans: ['Montserrat', 'Open Sans', 'sans-serif'],
        label: ['Open Sans', 'sans-serif'],
        main: ['Montserrat', 'sans-serif']
      },
      zIndex: {
        'header': '100',
        'skip-navigation': '110'
      },
      animation: {
        "fade-in": 'fade-in 0.25s linear forwards',
      },
      keyframes: {
        "fade-in": {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          }
        },
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.content-view-box': {
          '@apply max-w-[1072px] px-8 mx-auto': {}
        },
        '.text-header': {
          '@apply text-nowrap font-main font-semibold text-primary text-center': {}
        }
      })
    }),
    plugin(function({ addComponents }) {
      addComponents({
        '.carousel-container': {
          '@apply flex': {}
        },
        '.carousel-slide': {
          flex: '0 0 100%',
          'min-width': '0'
        }
      })
    })
  ],
} satisfies Config;
