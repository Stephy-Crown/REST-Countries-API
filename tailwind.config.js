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
  content: ["index.html", "apps.js", "./node_modules/flowbite/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkModeElements: "hsl(209, 23%, 22%)",
        darkModeBg: "hsl(207, 26%, 17%)",
        lightModeText: "hsl(200, 15%, 8%)",
        lightModeInput: "hsl(0, 0%, 52%)",
        lightModeBg: "hsl(0, 0%, 98%)",
        DarkModeTxt: "hsl(0, 0%, 100%)",
        lightModeElements: "hsl(0, 0%, 100%)",
      },

      maxWidth: {
        xl: "1440px",
        sm: "375px",
      },

      borderRadius: {
        radius: "150px",
      },

      fontFamily: {
        Nunito: ["nunito"],
        // Ubuntu: ["ubuntu"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
