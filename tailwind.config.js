/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'ice-gradient': 'linear-gradient(135deg, rgba(173, 216, 230, 0.1), rgba(135, 206, 235, 0.2), rgba(176, 224, 230, 0.15), rgba(230, 248, 255, 0.1))',
        'aurora': 'linear-gradient(45deg, #80d4ff, #b3e5ff, #e6f3ff, #80d4ff)',
      },
      colors: {
        'ice': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        'arctic': {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        'frost': {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'ice-glow': 'iceGlow 3s ease-in-out infinite',
        'crystal-float': 'crystalFloat 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'drift': 'drift 20s ease-in-out infinite',
        'snowfall': 'snowfall 10s linear infinite',
        'aurora-dance': 'aurora-dance 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        iceGlow: {
          '0%, 100%': { 
            textShadow: '0 0 5px #80d4ff, 0 0 10px #80d4ff, 0 0 15px #80d4ff'
          },
          '50%': { 
            textShadow: '0 0 10px #80d4ff, 0 0 20px #80d4ff, 0 0 30px #80d4ff, 0 0 40px #b3e5ff'
          },
        },
        crystalFloat: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-10px) rotate(90deg)' },
          '50%': { transform: 'translateY(-5px) rotate(180deg)' },
          '75%': { transform: 'translateY(-15px) rotate(270deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        drift: {
          '0%, 100%': { transform: 'translateX(0px) translateY(0px)' },
          '25%': { transform: 'translateX(50px) translateY(-30px)' },
          '50%': { transform: 'translateX(-30px) translateY(-50px)' },
          '75%': { transform: 'translateX(-50px) translateY(30px)' },
        },
        snowfall: {
          '0%': { 
            transform: 'translateY(-100vh) rotate(0deg)',
            opacity: '1'
          },
          '100%': { 
            transform: 'translateY(100vh) rotate(360deg)',
            opacity: '0'
          },
        },
        'aurora-dance': {
          '0%, 100%': { 
            transform: 'translateX(0%) skewX(0deg)',
            opacity: '0.6'
          },
          '25%': { 
            transform: 'translateX(25%) skewX(5deg)',
            opacity: '0.8'
          },
          '50%': { 
            transform: 'translateX(-15%) skewX(-3deg)',
            opacity: '1'
          },
          '75%': { 
            transform: 'translateX(10%) skewX(2deg)',
            opacity: '0.7'
          },
        }
      },
      boxShadow: {
        'ice': '0 0 20px rgba(128, 212, 255, 0.3), 0 0 40px rgba(128, 212, 255, 0.1)',
        'frost': '0 8px 32px rgba(0, 50, 100, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'crystal': '0 0 30px rgba(176, 224, 230, 0.4), 0 0 60px rgba(176, 224, 230, 0.2)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
