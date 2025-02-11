/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-50": "#DFEDF6",
        "primary-100": "#C0DBED",
        "primary-200": "#7DB4D9",
        "primary-300": "#3E90C7",
        "primary-400": "#28638A",
        "primary-500": "#153448",
        "secondary-50": "#E8EEF2",
        "secondary-100": "#D4E0E8",
        "secondary-200": "#A6BECF",
        "secondary-300": "#7B9FB7",
        "secondary-400": "#547F9C",
        "secondary-500": "#3C5B6F",
        "heading": "#363636",
        "text": "#A3A3A3",
        "third": "#948979",
        "stroke": "rgba(112, 112, 112, 0.10)",
      },
      fontSize: {
        h1: [
          "2.813rem",
          {
            lineHeight: "3.438rem",
            fontWeight: "400",
          },
        ],
        h2: [
          "3rem",
          {
            lineHeight: "3.75rem",
            fontWeight: "400",
          },
        ],
        h3: [
          "2rem",
          {
            lineHeight: "2.813rem",
            fontWeight: "400",
          },
        ],
        h4: [
          "1.875rem",
          {
            lineHeight: "2.5rem",
            fontWeight: "400",
          },
        ],
        h5: [
          "1.563rem",
          {
            lineHeight: "2.188rem",
            fontWeight: "400",
          },
        ],
        h6: [
          "1.25rem",
          {
            lineHeight: "1.563rem",
            fontWeight: "400",
          },
        ],
        para: [
          "1.125rem",
          {
            lineHeight: "1.625rem",
            fontWeight: "400",
          },
        ],
      },
      boxShadow: {
        'property': '0 0 4px 0 #ded3fd',
        'header': '0px 0px 10px rgba(82, 63, 105, 0.08)',
      }
    },
  },
  plugins: [],
};
