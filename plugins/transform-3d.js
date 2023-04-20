const plugin = require("tailwindcss/plugin");

module.exports = plugin(
  function ({ addUtilities, addBase, theme, e }) {
    addBase({
      "*, ::before, ::after": {
        "--tw-translate-x": "0",
        "--tw-translate-y": "0",
        "--tw-translate-z": "0",
        "--tw-rotate-x": "0",
        "--tw-rotate-y": "0",
        "--tw-rotate-z": "0",
        "--tw-skew-x": "0",
        "--tw-skew-y": "0",
        "--tw-scale-x": "1",
        "--tw-scale-y": "1",
        "--tw-scale-z": "1",
        "--tw-transform": [
          "translateX(var(--tw-translate-x))",
          "translateY(var(--tw-translate-y))",
          "translateZ(var(--tw-translate-z))",
          "scale3d(var(--tw-scale-x), var(--tw-scale-y), var(--tw-scale-z))",
          "skewX(var(--tw-skew-x))",
          "skewY(var(--tw-skew-y))",
          "rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z))",
        ].join(" "),
      },
    });

    addUtilities({
      ".transform-style-flat": {
        "transform-style": "flat",
      },
      ".transform-style-3d": {
        "transform-style": "preserve-3d",
      },
    });

    addUtilities({
      ".backface-visible": {
        "backface-visibility": "visible",
      },
      ".backface-hidden": {
        "backface-visibility": "hidden",
      },
    });

    addUtilities({
      ".transform-3d-none": { transform: "none" },
    });

    // Transform Origin
    const transformOriginValues = theme("transformOrigin");
    const transformOriginUtilities = Object.entries(transformOriginValues).map(
      ([key, value]) => {
        return {
          [`.${e(`perspective-origin-${key}`)}`]: {
            "perspective-origin": value,
          },
        };
      }
    );

    addUtilities(transformOriginUtilities);

    // Perspective Values
    const perspectiveValues = theme("perspectiveValues");
    const perspectiveUtilities = Object.entries(perspectiveValues).map(
      ([key, value]) => {
        return {
          [`.${e(`perspective-${key}`)}`]: {
            perspective: value,
          },
        };
      }
    );

    addUtilities(perspectiveUtilities);

    // Translates
    const translateValues = theme("translate");
    const translateUtilities = Object.entries(translateValues).map(
      ([key, value]) => {
        return {
          [`.${e(`translate-x-${key}`)}`]: {
            "--tw-translate-x": value,
            transform: `var(--tw-transform)`,
          },
          [`.${e(`-translate-x-${key}`)}`]: {
            "--tw-translate-x": `-${value}`,
            transform: `var(--tw-transform)`,
          },
          [`.${e(`translate-y-${key}`)}`]: {
            "--tw-translate-y": value,
            transform: `var(--tw-transform)`,
          },
          [`.${e(`-translate-y-${key}`)}`]: {
            "--tw-translate-y": `-${value}`,
            transform: `var(--tw-transform)`,
          },
          [`.${e(`translate-z-${key}`)}`]: {
            "--tw-translate-z": value,
            transform: `var(--tw-transform)`,
          },
          [`.${e(`-translate-z-${key}`)}`]: {
            "--tw-translate-z": `-${value}`,
            transform: `var(--tw-transform)`,
          },
        };
      }
    );

    addUtilities(translateUtilities);

    // Scales
    const scaleValues = theme("scale");
    const scaleUtilities = Object.entries(scaleValues).map(([key, value]) => {
      return {
        [`.${e(`scale-x-${key}`)}`]: {
          "--tw-scale-x": value,
          transform: `var(--tw-transform)`,
        },
        [`.${e(`-scale-x-${key}`)}`]: {
          "--tw-scale-x": `-${value}`,
          transform: `var(--tw-transform)`,
        },
        [`.${e(`scale-y-${key}`)}`]: {
          "--tw-scale-y": value,
          transform: `var(--tw-transform)`,
        },
        [`.${e(`-scale-y-${key}`)}`]: {
          "--tw-scale-y": `-${value}`,
          transform: `var(--tw-transform)`,
        },
        [`.${e(`scale-z-${key}`)}`]: {
          "--tw-scale-z": value,
          transform: `var(--tw-transform)`,
        },
        [`.${e(`-scale-z-${key}`)}`]: {
          "--tw-scale-z": `-${value}`,
          transform: `var(--tw-transform)`,
        },
      };
    });

    addUtilities(scaleUtilities);

    // Rotate 3D
    const rotate3dValues = theme("rotate3d");
    const rotate3dUtilities = Object.entries(rotate3dValues).map(
      ([key, value]) => {
        return {
          [`.${e(`rotate-x-${key}`)}`]: {
            "--tw-rotate-x": value,
            transform: `var(--tw-transform)`,
          },
          [`.${e(`-rotate-x-${key}`)}`]: {
            "--tw-rotate-x": `-${value}`,
            transform: `var(--tw-transform)`,
          },
          [`.${e(`rotate-y-${key}`)}`]: {
            "--tw-rotate-y": value,
            transform: `var(--tw-transform)`,
          },
          [`.${e(`-rotate-y-${key}`)}`]: {
            "--tw-rotate-y": `-${value}`,
            transform: `var(--tw-transform)`,
          },
          [`.${e(`rotate-z-${key}`)}`]: {
            "--tw-rotate-z": value,
            transform: `var(--tw-transform)`,
          },
          [`.${e(`-rotate-z-${key}`)}`]: {
            "--tw-rotate-z": `-${value}`,
            transform: `var(--tw-transform)`,
          },
        };
      }
    );

    addUtilities(rotate3dUtilities);
  },
  {
    theme: {
      extend: {
        transformOrigin: {
          "50-50-0": "50% 50% 0px",
        },
        translate: {
          160: "160px",
          250: "250px",
          280: "280px",
        },
      },
      perspectiveValues: {
        none: "none",
        1: "100px",
        2: "200px",
        3: "300px",
        4: "600px",
        5: "500px",
        6: "600px",
        7: "700px",
        8: "800px",
        9: "900px",
        10: "1000px",
        "25vw": "25vw",
        "50vw": "50vw",
        "75w": "75vw",
        "100vw": "100vw",
      },
      translate3d: (theme, { negative }) => ({
        ...theme("spacing"),
        ...negative(theme("spacing")),
      }),
      rotate3d: (theme) => ({
        ...theme("rotate"),
        ...{
          "-60": "-60deg",
          "-50": "-50deg",
          "-40": "-40deg",
          "-35": "-35deg",
          "-30": "-30deg",
          "-25": "-25deg",
          "-20": "-20deg",
          "-15": "-15deg",
          "-10": "-10deg",
          "-270": "-270deg",
          10: "10deg",
          15: "15deg",
          20: "20deg",
          25: "25deg",
          30: "30deg",
          35: "35deg",
          40: "40deg",
          50: "50deg",
          60: "60deg",
          270: "270deg",
        },
      }),
    },
  }
);
