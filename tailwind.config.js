/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
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
          darkBg: "#0f0f0f", // dark background
          darkText: "#e5e7eb", // dark: gray-200
          darkMuted: "#9ca3af", // dark: gray-400
        },
        danger: "#dc2626",
      },
      boxShadow: {
        tealDownward: "0 4px 6px -1px rgba(20,184,166,0.2)",
        tealUpward: "0 -4px 6px -1px rgba(20,184,166,0.2)", // ✅ lighter, subtle shadow
        dark: "0 2px 6px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};
