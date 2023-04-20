const plugin = require("tailwindcss/plugin");

module.exports = plugin(
  function ({ addBase }) {
    addBase({
      "@font-face": {
        fontFamily: "Liga",
        src: 'url("src/assets/font/websymbolsligaregular-webfont-webfont.eot")',
        src: 'url("src/assets/font/websymbolsligaregular-webfont-webfont.eot?#iefix") format("embedded-opentype"), url("src/assets/font/websymbolsligaregular-webfont-webfont.woff") format("woff"), url("src/assets/font/websymbolsligaregular-webfont-webfont.ttf") format("truetype"), url("src/assets/font/websymbolsligaregular-webfont-webfont.svg#web_symbols_ligaregular") format("svg")',
        fontWeight: "normal",
        fontStyle: "normal",
      },
    });
  },
  {
    theme: {
      extend: {
        fontFamily: {
          liga: ["Liga"],
        },
      },
    },
  }
);
