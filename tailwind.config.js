/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-color": "#ef7158",
        "main-body": "#f1efee",
        "link-color": "#63a3b2",
        "dark-gray": "#e5e0dd",
        "khaki": "#c5b6ae",
      },
    },
  },
  plugins: [],
}

