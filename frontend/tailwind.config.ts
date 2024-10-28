import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#990012',
        secondary: '#FDEDD6',
        snow: '#FCF6F6',
        jasmine: '#ffd173', //'#e4c482'
        peach: '#FEE4B5',
        dark: '#121212',
      },
      fontFamily: {
        sans: ['Montserrat', 'Open Sans', 'sans-serif'],
        label: ['Open Sans', 'sans-serif'],
        main: ['Montserrat', 'sans-serif']
      },
      height: {
        'content': 'calc(100vh - 2.5rem)'
      },
      zIndex: {
        'header': '100',
        'skip-navigation': '110'
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
          '@apply max-w-[1072px] px-8 mx-auto': {}
        },
        '.text-header': {
          '@apply text-nowrap font-main font-semibold text-primary text-center': {}
        },
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
    }),
  ],
} satisfies Config;
