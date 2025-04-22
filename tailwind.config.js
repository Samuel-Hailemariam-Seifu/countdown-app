/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#4A4E69',
        'brand-primary-light': '#6B7094',
        'brand-primary-dark': '#363B54',
        'brand-secondary': '#9A8C98',
        'brand-secondary-light': '#B5A8B3',
        'brand-accent': '#C9ADA7',
        'brand-accent-dark': '#A88D86',
        'brand-bg': '#F2E9E4',
        'brand-bg-dark': '#E5D6CE',
        'brand-dark': '#22223B',
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
      },
      height: {
        'hero': '80vh',
        'hero-sm': '60vh',
      },
      maxWidth: {
        'hero': '1440px',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'gradient-text': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float': 'float 5s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'fade-in': 'fade-in 1s ease-out forwards',
        'slide-up': 'slide-up 0.5s ease-out forwards',
        'slide-up-delay': 'slide-up 0.5s ease-out 0.2s forwards',
        'slide-up-delay-2': 'slide-up 0.5s ease-out 0.4s forwards',
        'gradient-text': 'gradient-text 3s ease infinite',
        'gradient-x': 'gradient-x 3s ease infinite',
      },
    },
  },
  plugins: [],
}