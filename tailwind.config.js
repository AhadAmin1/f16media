/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void:    '#030712',
        surface: '#0a0e27',
        panel:   '#0f172a',
        border:  'rgba(255,255,255,0.08)',
        cyan:    '#00f0ff',
        electric: '#00d4ff',
        purple:  '#8b5cf6',
        blue:    '#3b82f6',
        neon:    '#ff00ff',
        orange:  '#ff5a00',
        amber:   '#f97316',
        snow:    '#f0f4ff',
        muted:   '#6b7585',
        'deep-navy': '#0a0e27',
        midnight: '#030712',
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
        label:   ['Rajdhani', 'sans-serif'],
      },
      animation: {
        'gradient-shift': 'gradientShift 8s ease infinite',
        'float':          'float 6s ease-in-out infinite',
        'pulse-slow':     'pulse 4s ease-in-out infinite',
        'spin-slow':      'spin 20s linear infinite',
        'marquee':        'marquee 25s linear infinite',
        'cinematic-float': 'cinematicFloat 20s ease-in-out infinite',
        'grid-float':     'gridFloat 30s ease-in-out infinite',
        'cinematic-grid': 'cinematicGrid 40s linear infinite',
        'glow-pulse':     'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        gradientShift: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-20px)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        cinematicFloat: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(-20px, -20px) scale(1.05)' },
          '66%': { transform: 'translate(20px, -10px) scale(0.95)' },
        },
        gridFloat: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-20px, -20px)' },
        },
        cinematicGrid: {
          '0%': { backgroundPosition: '0 0, 0 0' },
          '100%': { backgroundPosition: '60px 60px, 120px 120px' },
        },
        glowPulse: {
          '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
          '50%': { opacity: 0.6, transform: 'scale(1.1)' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
      boxShadow: {
        'glow-cyan': '0 0 60px rgba(0, 240, 255, 0.2), 0 0 120px rgba(0, 240, 255, 0.1), inset 0 0 60px rgba(0, 240, 255, 0.05)',
        'glow-purple': '0 0 60px rgba(139, 92, 246, 0.2), 0 0 120px rgba(139, 92, 246, 0.1), inset 0 0 60px rgba(139, 92, 246, 0.05)',
        'glow-orange': '0 0 60px rgba(255, 90, 0, 0.3), 0 0 120px rgba(255, 90, 0, 0.15), inset 0 0 60px rgba(255, 90, 0, 0.08)',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '40px',
        '3xl': '64px',
      },
    },
  },
  plugins: [],
}
