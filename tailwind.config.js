/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       textColor :{
         "primary-color": "#2cae74",
         "second-color" : "#1d7edd"
       }
    },
  },
  plugins: [require("daisyui")],
}

