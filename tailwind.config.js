// /** @type {import('tailwindcss').Config} */
// module.exports = {
// content: ["./src/**/*.{html,js}"],
// theme: {
//     extend: {}
// },
// plugins: []
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./node_modules/flowbite/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkBlue: "hsl(218, 23%, 16%)",
        darkGrayishBlue: "hsl(217, 19%, 24%)",
        grayishBlue: "hsl(217, 19%, 38%)",
        lightCyan: "hsl(193, 38%, 86%)",
        neonGreen: "hsl(150, 100%, 66%)",
      },

      maxWidth: {
        xl: "1440px",
        sm: "375px",
      },

      borderRadius: {
        radius: "150px",
      },

      fontFamily: {
        Overpass: ["overpass"],
        Ubuntu: ["ubuntu"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
