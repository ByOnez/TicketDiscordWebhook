/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
