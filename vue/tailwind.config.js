/** @type {import('tailwindcss').Config} */
export default {
  content: [`./src/**/*.{vue,ts,html}`],
  theme: {
    extend: {
      colors: {
        primary: "hsl(180, 29%, 50%)",
        background: "hsl(180, 52%, 96%)",
        filterTablets: "hsl(180, 31%, 95%)",
        darkGrayishCyan: "hsl(180, 8%, 52%)",
        veryDarkGrayishCyan: "hsl(180, 14%, 20%)",
      },
      fontSize: {
        main: "15px",
      },
      fontFamily: {
        "League-Spartan": ["League Spartan", "san-serif"],
      },
    },
  },
  plugins: [],
};
