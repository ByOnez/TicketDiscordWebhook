/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scaleUp: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        scaleUp: 'scaleUp 0.5s ease-out',
        fadeIn: 'fadeIn 1s ease-in-out',
      },
      colors: {
        "ticket": {
          "azure": "#2563EB",
          "amber": "#FFA400",
          "charcoal": "#2C2F33",
          "text": "#3A3345",
          "background": "#D3D3D3",
        }
      },
    },
  },
  plugins: [],
};
