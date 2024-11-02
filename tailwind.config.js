/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}'
  ],
  darkMode: 'media',
  theme: {
    extend: {
      animation: {
        grid: 'grid 15s linear infinite'
      },
      keyframes: {
        grid: {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0)' }
        }
      },
      colors: {
        accent: 'rgba(var(--accent-color))'
      },
      fontFamily: {
        geist: ['var(--font-geist-sans)', 'sans']
      },
      screens: {
        mobile: '420px'
      },
      placeholderColor: {
        primary: 'rgba(var(--text-placeholder))'
      },
      textColor: {
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
  }
};
