/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      main: ["ImperiaB W01 Regular", "sans-serif"],
      second: ["Hisquins DEMO", "sans-serif"],
    },
    backgroundImage: {
      footer: "url(@/assets/footer.jpg)",
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
    },
  },
  plugins: [],
};
