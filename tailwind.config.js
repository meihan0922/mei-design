module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        tertiary: "#324d67",
        secondary: "#5f5f5f",
        primary: "#f02d34",
        disable: "#ebebeb",
        bg: "#dcdcdc",
      },
    },
  },
  plugins: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
};
