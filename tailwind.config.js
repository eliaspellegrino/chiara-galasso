/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#3b0f1e",
          panel: "#4a1626",
          panel2: "#2a0a14",
          silver: "#E7E7E7",
          line: "rgba(255,255,255,0.10)",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.35)",
      },
    },
  },
};
