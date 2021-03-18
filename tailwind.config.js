module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.html", "./src/**/*.tsx", "./src/**/*.jsx"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#B2976F",
          200: "#373737",
          300: "#555454",
          400: "#B0B0B0",
        },
        secondary: "#ff165d",
        blackish: "#2d4059",
        grayWhite: "#F6F6F6",
        primaryGrey: "#747474",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
