module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        pulse: {
          '0%, 100%': {
            opacity: 1,
          },
          '50%': {
            opacity: 0,
          },
        },
      },
      ringOffsetWidth: {
        6: '6px',
        10: '10px',
        14: '14px',
        20: '20px',
      },
      width: {
        128: '32rem',
        164: '40rem',
        200: '50rem',
        220: '60rem',
      },
      height: {
        128: '32rem',
        164: '40rem',
        200: '50rem',
        220: '60rem',
      },
      maxHeight: {
        128: '32rem',
        164: '40rem',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 3s infinite',
        'ping-slow': 'ping 3s infinite',
        pulse: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
