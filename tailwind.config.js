/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#FAFAF9',
        surface: '#FFFFFF',
        ink: '#171717',
        muted: '#737373',
        accent: {
          DEFAULT: '#2F4B6E',
          soft: '#EEF4FA',
          deep: '#223A58',
          hover: '#223A58',
        },
        beige: {
          DEFAULT: '#F0F0F0',
          soft: '#F5F5F5',
          deep: '#E7E7E7',
        },
        line: '#E7E7E7',
      },
      fontFamily: {
        serif: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl2: '20px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(23,23,23,0.04), 0 8px 24px rgba(23,23,23,0.05)',
        lift: '0 2px 4px rgba(23,23,23,0.04), 0 18px 48px rgba(23,23,23,0.08)',
        ring: '0 0 0 1px rgba(47,75,110,0.12)',
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      maxWidth: {
        shell: '1180px',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.34, 1.3, 0.64, 1)',
        'spring-soft': 'cubic-bezier(0.33, 1, 0.68, 1)',
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
        'out-quint': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.98)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) both',
        'fade-in': 'fadeIn 0.4s ease both',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.22,1,0.36,1) both',
      },
    },
  },
  plugins: [],
};
