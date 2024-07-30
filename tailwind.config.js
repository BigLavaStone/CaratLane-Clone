// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()]
  // plugins: [
  //   nextui({
  //     themes: {
  //       dark: {
  //         colors: {
  //           primary: {
  //             DEFAULT: "#BEF264",
  //             foreground: "#000000",
  //           }, 
  //           focus: "#BEF264",
  //         },
  //       },
  //     },
  //   }),
  // ],
}