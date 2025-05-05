/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'accent': 'var(--accent)',
        'background': 'var(--background)',
        'foreground': 'var(--foreground)',
      },
      textShadow: {
        DEFAULT: 'var(--text-shadow)',
      },
      transitionProperty: {
        DEFAULT: 'var(--transition)',
      },
      borderRadius: {
        DEFAULT: 'var(--border-radius)',
      },
      maxWidth: {
        DEFAULT: 'var(--max-width)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out forwards',
        fadeInScale: 'fadeInScale 0.7s ease-out 0.2s forwards',
        float: 'float 3s ease-in-out infinite',
        pulse: 'pulse 2s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}; 