/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg:      '#050709',
        bg2:     '#080c10',
        surface: '#0c1219',
        border:  '#141e2b',
        border2: '#1c2b3a',
        card:    '#0a1520',
        pink:    '#ff9ffc',
        cyan:    '#00e5ff',
        green:   '#39ff8f',
        amber:   '#ffb547',
        muted:   '#445566',
        bright:  '#eaf2ff',
        body:    '#c8d8e8',
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body:    ['Outfit', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
        italic:  ['Playfair Display', 'serif'],
      },
      fontSize: {
        '2xs': ['0.62rem', { lineHeight: '1rem' }],
        xs:    ['0.72rem', { lineHeight: '1.1rem' }],
      },
      animation: {
        'pulse-dot':  'pulseDot 2s ease-in-out infinite',
        'fade-up':    'fadeUp 0.7s ease both',
        'scroll-bar': 'scrollBar 2s ease-in-out infinite',
        'float':      'float 8s ease-in-out infinite',
      },
      keyframes: {
        pulseDot: {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%':     { opacity: '0.4', transform: 'scale(0.8)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(25px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        scrollBar: {
          '0%,100%': { opacity: '0.3' },
          '50%':     { opacity: '1' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-12px)' },
        },
      },
      clipPath: {
        btn: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
      },
      transitionDelay: {
        100: '100ms',
        200: '200ms',
        300: '300ms',
      },
    },
  },
  plugins: [],
}
