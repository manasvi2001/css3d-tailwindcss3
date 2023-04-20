/** @type {import('tailwindcss').Config} */
const transform3dPlugin = require("./plugins/transform-3d");
const customFontPlugin = require("./plugins/custom-fonts");
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        rotate: {
          "0%": {
            transform: "translateZ(-280px) rotateY(0deg)",
          },
          "50%": {
            transform: "translateZ(-280px) rotateY(180deg)",
          },
          "100%": {
            transform: "translateZ(-280px) rotateY(360deg)",
          },
        },
      },
      animation: {
        rotate: "rotate 4s",
      },
      fontFamily: {
        sans: ["Helvetica", ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        200: "200px",
        400: "400px",
      },
      backgroundImage: {
        shadow: 'url("src/assets/images/shadow.png")',
        wheat: 'url("src/assets/images/wheat.jpg")',
        lightbg: 'url("src/assets/images/lightBG.jpg")',
        darkbg: 'url("src/assets/images/darkBG.jpg")',
      },
    },
  },
  plugins: [transform3dPlugin, customFontPlugin],
};
