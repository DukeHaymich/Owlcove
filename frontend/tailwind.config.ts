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
        // primary: '#990012',
        // secondary: '#D42000',
        // cream: '#FDF0D9',
        // white: '#FCF6F6',
        // peach: '#FADDA9',
        // jasmine: '#FFD173',
        // peach: '#FEE4B5',
        // secondary: '#BA160C',

        primary: {
          DEFAULT: '#960018',
          light: '#BA160C'
        },
        cream: {
          DEFAULT: '#FFEFD5',
          100: '#FFEFD5',
          200: '#FEE4B5',
          300: '#FFD173'
        },
        vintage: '#E4C482',
        dark: '#121212',
      },
      dropShadow: {
        'mask-primary': '0px 1000px #990012',
        'mask-cream': '0px 1000px #FFEFD5',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        serif: ['Lora', 'serif'],
        label: ['Montserrat', 'sans-serif']
      },
      fontSize: {
        numeric: '2.875rem',
      },
      height: {
        content: 'calc(100vh - 2.5rem)'
      },
      width: {
        content: '1072px'
      },
      maxWidth: {
        content: '1072px'
      },
      zIndex: {
        header: '100',
        'skip-navigation': '110'
      },
      transitionDelay: {
        '250': '250ms'
      },
      animation: {
        "fade-in": 'fade-in 1s ease-out forwards',
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
          '@apply max-w-content px-8 mx-auto': {}
        },
        '.text-menu': {
          '@apply text-nowrap font-label font-semibold text-primary text-center': {}
        },
        '.text-slider': {
          '@apply text-center font-sans text-3xl font-normal leading-normal text-cream': {}
        },
        '.text-statistic': {
          '@apply text-numeric text-primary font-medium': {}
        },
        '.text-body': {
          '@apply whitespace-pre-wrap text-justify leading-relaxed tracking-wide word-wide': {}
        },
        '.text-heading': {
          '@apply text-4xl tracking-tight font-medium': {}
        },
        '.bg-linear-1': {
          '@apply from-cream to-cream-200': {}
        },
        '.mask-color-primary': {
          '@apply drop-shadow-mask-primary translate-y-[-1000px]': {}
        },
        '.mask-color-cream': {
          '@apply drop-shadow-mask-cream translate-y-[-1000px]': {}
        }
      })
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'animate-duration': (value) => ({
            animationDuration: value,
          }),
        },
        { values: theme('transitionDuration') }
      );
      matchUtilities(
        {
          'animate-delay': (value) => ({
            animationDelay: value,
          }),
        },
        { values: theme('transitionDelay') }
      )
      matchUtilities(
        {
          'word': (value) => ({
            wordSpacing: value,
          }),
        },
        { values: theme('letterSpacing') }
      )
    }),
  ],
} satisfies Config;
