/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.{ts,tsx}", "!./node_modules/**"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      colors: {
        brand: {
          black: "#1a1a1a",
          dark: "#2d2d2d",
          gray: "#8c8c8c",
          light: "#f4f4f4",
          accent: "#9ca3af",
        },
      },
    },
  },
  plugins: [],
};
