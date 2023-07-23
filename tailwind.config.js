/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      hover: "#009fc2",
      primary: "#1f77b4",
      secondary: "white",
      sidebar: "#F0F0F0",
      "background-primary-dark": "#1C1C21",
      "background-secondary-dark": "#424242",
      "background-third-dark": "#31363F",
      "background-primary-light": "white",
      "background-secondary-light": "#FAF9F6",
      "background-third-light": "#fff",
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
      primary: "#1f77b0",
      dark: "#545353",
      light: "#e5e0e0"
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      primary: "#1f77b0",
     
    }),
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
   
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}