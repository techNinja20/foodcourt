/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E60E2A",
        
      },
      fontFamily: {
        "Flow-Circular": ["Flow Circular", "system-ui"],
        Playfair: ["Playfair", "serif"],
      },
      animation: {
        wiggle: "wiggle 5s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [],
}
