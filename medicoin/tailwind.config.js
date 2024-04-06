/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        shes:[  "Tac One","Londrina Outline", "sans-serif"],
        abc: ["Londrina Outline", "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
        rose: ['"Days One"', "sans-serif"],
        aldrich: ['"Aldrich"', '"Poppins"', "sans-serif"],
        press2P: ['"Press Start 2P"', "sans-serif"],
        spaceMono: ['"Space Mono"', "monospace"],
        spaceGrotesk: ['"Space Grotesk"', "sans-serif"],
        digitalNumbers: ["digital-clock-font", "poppins", "sans-serif"],
      },
      colors: {
        primary: "#000000",

        modal: "#1f2937",
        purpleSecondary: "#BEA5FF",
        blueSecondary: "#4ED4FF",
        pinkScrollbar: "#9b75ff",
        eventGreen: "#00FFAB",
        eventRed: "#FF4545",
        rishabh:"#AEE4BD"
      },
    },
  },
  plugins: [],
};
