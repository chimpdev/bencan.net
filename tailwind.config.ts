import type { Config } from 'tailwindcss';

import typographPlugin from '@tailwindcss/typography';

export default {
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx,mdx}',
    './*.tsx'
  ],
  darkMode: 'media',
  theme: {
    extend: {
      animation: {
        marquee: 'marquee var(--duration) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite'
      },
      keyframes: {
        grid: {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0)' }
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' }
        },
        'marquee-vertical': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' }
        }
      },
      colors: {
        accent: 'rgba(var(--accent-color))'
      },
      fontFamily: {
        geist: ['var(--font-geist-sans)', 'sans'],
        bricolageGrotesque: ['var(--font-bricolage-grotesque)', 'sans']
      },
      screens: {
        mobile: '420px'
      },
      textColor: {
        primary: 'rgba(var(--text-primary))',
        secondary: 'rgba(var(--text-secondary))',
        tertiary: 'rgba(var(--text-tertiary))'
      },
      textDecorationColor: {
        primary: 'rgba(var(--text-primary))',
        secondary: 'rgba(var(--text-secondary))',
        tertiary: 'rgba(var(--text-tertiary))'
      },
      backgroundColor: {
        background: 'rgba(var(--bg-background))',
        secondary: 'rgba(var(--bg-secondary))',
        tertiary: 'rgba(var(--bg-tertiary))',
        quaternary: 'rgba(var(--bg-quaternary))'
      },
      gradientColorStops: {
        primary: 'rgba(var(--bg-background))',
        secondary: 'rgba(var(--bg-secondary))',
        tertiary: 'rgba(var(--bg-tertiary))',
        quaternary: 'rgba(var(--bg-quaternary))'
      },
      fill: {
        primary: 'rgba(var(--bg-background))',
        secondary: 'rgba(var(--bg-secondary))',
        tertiary: 'rgba(var(--bg-tertiary))',
        quaternary: 'rgba(var(--bg-quaternary))'
      },
      borderColor: {
        primary: 'rgba(var(--border-primary))'
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [typographPlugin]
} satisfies Config;