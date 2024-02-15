/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "black-1":"rgba(16,16,16,1)",
        "black-2":"rgba(18,18,18,1)",
        "black-3":"rgba(22,22,22,1)",
        "gray-t" : "rgba(119,119,119,1)",
        "gray-t-l" : "rgba(119,119,119,0.5)"
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
};
