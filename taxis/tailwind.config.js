/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      ubuntu: ["Ubuntu", " sans-serif"],
      three: ["Righteous", "cursive"],
    },
    extend: {
      colors: {
        primary: "#eb4d4b",
        secondary: "#4834d4",
      },
      backgroundImage: {
        banner: "url('./src/assets/img/banner.png')",
        wrapper: "url('./src/assets/img/bg.jpg')",
        white: "url('./src/assets/img/bg-white.jpg')",
        voiture: "url('./src/assets/img/voiture.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#eb4d4b",

          secondary: "#341f97",

          accent: "#95a5a6",

          neutral: "#95a5a6",

          "base-100": "#F7F7F8",

          info: "#2E77E5",

          success: "#4EDFB8",

          warning: "#8A750F",

          error: "#FC5A88",
        },
      },
    ],
  },
};

