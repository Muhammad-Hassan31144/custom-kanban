/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
   themes: [
      "dark",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "luxury",
      "dracula",
      "night",
      "coffee",
      "winter",
      "dim",
    ],
  },
}

