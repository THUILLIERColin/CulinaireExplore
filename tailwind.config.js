import daisyui from "./node_modules/daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        GourmetVoyager: {
          // Thème clair
          primary: "#1d4f59",
          secondary: "#cdd8e4",
          accent: "#db671f",
          neutral: "#783911",
          "base-100": "#f6f6e9",
        },
        GourmetVoyagerDark: {
          // Thème sombre
          primary: "#a6d8e2",
          secondary: "#1b2632",
          accent: "#e06c24",
          neutral: "#EEAE87",
          "base-100": "#161609",
        },
      },
    ],
  },
};
