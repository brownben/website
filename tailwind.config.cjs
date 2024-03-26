const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['Geist Var', 'Inter var', 'system-ui'],
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      red: colors.red,
      blue: colors.blue,
    },

    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            img: {
              borderRadius: theme('borderRadius.lg'),
              height: 'auto',
              width: 'auto',
              maxWidth: '100%',
              maxHeight: '16rem',
            },

            a: {
              color: 'var(--tw-prose-body)',
              textDecorationColor: theme('colors.gray.300'),
              fontWeight: 'normal',
              textDecorationThickness: '1.5px',
              textUnderlineOffset: '2px',
              textDecorationColor: theme('colors.gray.300'),
              transition: 'text-decoration-color 100ms',

              '&:hover': {
                textDecorationColor: theme('colors.blue.500'),
              },

              '@media (prefers-color-scheme: dark)': {
                textDecorationColor: theme('colors.gray.500'),
              },
            },

            'blockquote p::after': {
              content: '""',
            },
            'blockquote p::before': {
              content: '""',
            },
          },
        },
      }),
    },
  },

  plugins: [require('@tailwindcss/typography')],
}
