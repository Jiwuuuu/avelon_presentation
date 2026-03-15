/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
      },
      colors: {
        accent: "#FF5C00",
        "dark-bg": "#1A1A1A",
        "light-bg": "#F5F5F5",
        "primary-text": "#2A2A2A",
        "muted": "#6B6B6B",
        "border-col": "#E5E5E5",
      },
      letterSpacing: {
        widest2: "0.3em",
      },
    },
  },
  plugins: [],
};
