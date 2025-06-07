/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#14b8a6",      // teal-500
          dark: "#0f766e",         // teal-700
          light: "#5eead4",        // teal-300
        },
        base: {
          bg: "#f9fafb",           // gray-50
          text: "#1f2937",         // gray-800
          muted: "#6b7280",        // gray-500
        },
        accent: {
          indigo: "#6366f1",       // indigo-500
          rose: "#f43f5e",         // rose-500
        },
        danger: "#dc2626",         // red-600
      },
    },
  },
  plugins: [],
}

