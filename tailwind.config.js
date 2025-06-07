/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // ✅ Add this line
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#14b8a6",
          dark: "#0f766e",
          light: "#5eead4",
        },
        base: {
          bg: "#f3f4f6", // gray-100
          text: "#1f2937", // gray-800
          muted: "#6b7280", // gray-500
        },
        danger: "#dc2626",
      },
      boxShadow: {
        teal: "0 2px 10px rgba(20, 184, 166, 0.3)",
      },
    },
  },
  plugins: [],
};
