const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        crypt: "drop-shadow(0px 4px 20px rgba(36, 255, 0, 0.2))",
      },
      boxShadow: {
        progressShadow: "0px 4px 4px rgba(0, 244, 68, 0.18)",
      },
      backgroundImage: {
        borderGreen: `linear-gradient(180deg, #11D800 0%, rgba(0, 0, 0, 0.703125) 29.69%, rgba(17, 215, 0, 0) 64.06%, rgba(15, 166, 1, 0.51) 98.96%)`,
        shadow:
          "linear-gradient(360deg, rgba(0, 255, 133, 0.49) 18.48%, rgba(17, 124, 73, 0) 84.71%)",
        radialGreen:
          "radial-gradient(50% 50% at 50% 50%, #3AAA59 0%, #003F12 100%)",
        dashBox:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(36, 255, 0, 0.2) 100%)",
        openBtnBg:
          " linear-gradient(135deg, rgba(126, 205, 222, 0.49) 0%, rgba(20, 186, 227, 0.49) 19.24%, rgba(19, 177, 230, 0.54) 68.64%, rgba(17, 170, 223, 0.56) 81.77%, rgba(146, 202, 220, 0.57) 100%)",
        progressFill:
          "linear-gradient(135deg, rgba(0, 255, 133, 0.49) 0%, rgba(17, 124, 73, 0.49) 81.25%)",
        progressBg:
          "linear-gradient(135deg, #096B24 0%, rgba(3, 35, 45, 0.57) 100%)",
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
