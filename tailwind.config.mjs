/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        stone: {
          50: '#FAFAF9',
          200: '#E7E5E4',
          500: '#78716C',
          600: '#57534E',
          900: '#1C1917',
        },
        teal: {
          100: '#CCFBF1',
          700: '#0F766E',
          800: '#115E59',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'monospace'],
      },
      fontSize: {
        base: ['17px', { lineHeight: '1.65' }],
      },
      maxWidth: {
        content: '1100px',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.stone.900'),
            a: {
              color: theme('colors.teal.700'),
              '&:hover': { color: theme('colors.teal.800') },
              textDecoration: 'none',
              fontWeight: '500',
            },
            'h1,h2,h3,h4': {
              fontFamily: theme('fontFamily.display').join(', '),
              color: theme('colors.stone.900'),
            },
            code: {
              fontFamily: theme('fontFamily.mono').join(', '),
              backgroundColor: theme('colors.stone.50'),
              padding: '0.15em 0.35em',
              borderRadius: '0.25rem',
              fontSize: '0.875em',
              fontWeight: '400',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            pre: {
              backgroundColor: '#1C1917',
              color: '#E7E5E4',
            },
            blockquote: {
              borderLeftColor: theme('colors.teal.700'),
              color: theme('colors.stone.600'),
              fontStyle: 'normal',
            },
          },
        },
      }),
    },
  },
  plugins: [
    // We'll inline prose styles rather than use @tailwindcss/typography plugin
  ],
};
