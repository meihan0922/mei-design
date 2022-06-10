module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        chartColor: {
          Blue: "#0011F6",
          MainBlue: "#3240FF",
          LightBlue: "#3C91FF",
          Nautical: "#48E3FF",
          Turquoise: "#0BFFDB",
          LightViolet: "#BB9CFF",
          Violet: "#8122FF",
          Red: "#FD005C",
          LightRed: "#FF8BAA",
        },
        StyleColors: {
          MainGray: "#2A3F58",
          DarkGray: "#72809D",
          Gray: "#CCD2DE",
          LightGray: "#FDF2F5",
          LightBlue: "#F4F7FC",
          GreyBlue: "#DBE9FF",
        },
        SystemColors: {
          Success: "#A7E521",
          Info: "#03C3EC",
          Alert: "#FFD422",
          Error: "#EF3F26",
        },
      },
    },
  },
  plugins: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
};
