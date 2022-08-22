/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greenbg: {
          100: "#0ec261",
          200: "#039f67",
          300: "#0b934a",
          400: "#026e47",
        },
      },
      textColor: {
        "my-green": "#0ec261",
        "text-dark": "#121212",
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        serif: ["Roboto"],
        body: ['"Roboto"'],
      },
    },
  },
  plugins: [],
};
