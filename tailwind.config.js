/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#fff",

          "secondary": "#1dbef4",

          "accent": "#96cddd",

          "neutral": "#1E262F",

          "base-100": "#101317",

          "info": "#9BB5F3",

          "success": "#63E39B",

          "warning": "#F2CC64",

          "error": "#E14C5B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
