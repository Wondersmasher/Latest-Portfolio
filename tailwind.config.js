/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "770px",
      lg: "970px",
      xl: "1440px",
    },
    colors: {
      black: "#282C33",
      primary: "#C778DD",
      gray: "#ABB2BF",
      white: "#ffffff",
      primary2: "#E06B74",
      primary3: "#98C379",
      primary4: "#62AEEF",
      // black: "#312f2f",
      // accent1: "#333B59",
      // accent2: "#8DBBFF",
      // text: "#fff",
      // "gray-dark": "#273444",
      // gray: "#8492a6",
      // "gray-light": "#d3dce6",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      firaCode: ["Fira Code", "Playfair", "serif", "monospace"],
    },
    extend: {
      animation: {
        "bounce-slow": "bounce 3s infinite",
        "ping-slow": "ping 3s infinite",
      },
    },
  },
  plugins: [],
};
