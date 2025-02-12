// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require("tailwindcss/colors");
module.exports = {
  purge: {
    // enabled: true,
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    // These options are passed through directly to PurgeCSS
    options: {
      safelist: {
        // (bg|border)-(primary|danger|warning|success)
        standard: [
          /^(hover:|focus:)?bg-primary(-50)?$/,
          /^(hover:|focus:)?bg-danger(-50)?$/,
          /^(hover:|focus:)?bg-warning(-50)?$/,
          /^(hover:|focus:)?bg-success(-50)?$/,
          /^(hover:|focus:)?bg-secondary(-50)?$/,
          /^(hover:|focus:)?$bg-white$/,
          /^(hover:|focus:)?border-primary(-50|-100)?$/,
          /^(hover:|focus:)?border-danger(-50|-100)?$/,
          /^(hover:|focus:)?border-warning(-50|-100)?$/,
          /^(hover:|focus:)?border-success(-50|-100)?$/,
          /^(hover:|focus:)?border-secondary(-50|-100)?$/,
          /^duration-/,
          /^delay-/,
          /^text-primary$/,
          /^text-danger$/,
          /^text-warning$/,
          /^text-success$/,
          /^text-white$/,
          /^text-secondary$/
        ],
        keyframes: true,
        fontFace: true
      }
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionDelay: {
        "0": "0ms",
        "2000": "2000ms"
      },
      scale: {
        "200": "2",
        "300": "3",
        "400": "4"
      },
      maxHeight: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "9/10": "90%"
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "9/10": "90%"
      },
      minHeight: {
        "8": "2rem"
      },
      minWidth: {
        "8": "2rem",
        "14": "3.5rem"
      },
      colors: {
        primary: {
          light: colors.blue,
          DEFAULT: "#377DFF",
          dark: "#124198",
          hover: "#658dd7",
          "50": "#e7efff",
          "100": "#c3d8ff",
          "200": "#9bbeff",
          "300": "#73a4ff",
          "400": "#5591ff",
          "500": "#377dff",
          "600": "#3175ff",
          "700": "#2a6aff",
          "800": "#2360ff",
          "900": "#164dff",
          A100: "#ffffff",
          A200: "#fcfcff",
          A400: "#c9d4ff",
          A700: "#afbfff"
        },
        success: {
          light: "#8be77b",
          DEFAULT: "#00bd1d",
          dark: "#008916",
          hover: "#6cc7a7",
          "50": "#e0f7e4",
          "100": "#b3ebbb",
          "200": "#80de8e",
          "300": "#4dd161",
          "400": "#26c73f",
          "500": "#00bd1d",
          "600": "#00b71a",
          "700": "#00ae15",
          "800": "#00a611",
          "900": "#00980a",
          A100: "#c3ffc5",
          A200: "#90ff93",
          A400: "#5dff61",
          A700: "#44ff48"
        },
        danger: {
          light: "#f16484",
          DEFAULT: "#f53f66",
          dark: "#a80029",
          hover: "#ef7491",
          "50": "#fee8ed",
          "100": "#fcc5d1",
          "200": "#fa9fb3",
          "300": "#f87994",
          "400": "#f75c7d",
          "500": "#f53f66",
          "600": "#f4395e",
          "700": "#f23153",
          "800": "#f02949",
          "900": "#ee1b38",
          A100: "#ffffff",
          A200: "#ffeef0",
          A400: "#ffbbc3",
          A700: "#ffa1ac"
        },
        warning: {
          light: "#ec9f76",
          DEFAULT: "#e88550",
          dark: "#f19564",
          hover: "#ffa882",
          "50": "#fcf0ea",
          "100": "#f8dacb",
          "200": "#f4c2a8",
          "300": "#efaa85",
          "400": "#eb976a",
          "500": "#e88550",
          "600": "#e57d49",
          "700": "#e27240",
          "800": "#de6837",
          "900": "#d85527",
          A100: "#ffffff",
          A200: "#ffe9e2",
          A400: "#ffc2af",
          A700: "#ffaf96"
        },
        secondary: {
          light: "#E0E0E0",
          DEFAULT: "#BDBDBD",
          dark: "#9E9E9E",
          hover: "#F5F5F5"
        }
      },

      ringColor: {
        primary: "#9ab4e5",
        success: "#a0eb93",
        danger: "#f48ba3",
        warning: "#f3c0a5"
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "22px",
        "3xl": "24px",
        "4xl": "26px",
        "5xl": "28px"
      },
      borderRadius: {
        inherit: "inherit",
        none: "0",
        xs: "4px",
        sm: "8px",
        DEFAULT: "16px",
        md: "20px",
        lg: "26px",
        large: "32px",
        full: "9999px"
      },
      borderRightColor: {
        transparent: "transparent"
      },
      borderLeftColor: {
        transparent: "transparent"
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ["hover"],
      borderColor: ["checked"],
      opacity: ["disabled"],
      ringWidth: ["hover"],
      borderRadius: ["first", "last"]
    }
  },
  plugins: []
};
