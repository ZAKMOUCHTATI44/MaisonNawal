/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arquitecta', 'sans-serif'],
        serif: ['Arquitecta', 'serif'],
        body: ['Arquitecta', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
