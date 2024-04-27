/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      textColor: {
        "primary-color": "#0ecb34",
        "second-color": "#1d7edd",
      },
    },
  },
  plugins: [require("daisyui")],
};
