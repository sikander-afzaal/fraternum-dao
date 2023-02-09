const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        sidebarBg:
          "linear-gradient(180deg, rgba(0, 86, 14, 0.65) 0%, rgba(0, 0, 0, 0.759025) 16.15%, rgba(0, 23, 1, 0.85) 71.88%, #007905 100%)",
      },
      colors: {
        darkGreen: "#00FF1940",
        gray: "#DADADA40",
        green: "#1B9611",
        lightGreen: "#53EA62",
        mint: "#9FFFB4",
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        abel: "Abel",
        pirate: "Pirata One",
        alumni: "Alumni Sans",
      },
    },
  },
  plugins: [],
};
