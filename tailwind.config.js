/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/component/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { Inter: ["Inter", "sans-serif"] },
      colors: {
        btnColor: "#2AB6911A",
        btntext: "#2AB691",
        bgcolro: "#5F62E2",
        bgdipcolor: "#5F62E226",
      },
    },
  },
  plugins: [],
};
