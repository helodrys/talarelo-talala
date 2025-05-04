/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#66eb6b', //Primary Green
        lighter_green: '#4CAF501F', //For input box
        darker_green: '#4CAF50' //for confirm button // should have use light {} for green
      }
    },
  },
  plugins: [],
}