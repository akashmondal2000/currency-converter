/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "coding-img":
          "url('https://www.shutterstock.com/image-vector/concept-computer-programming-developing-software-600nw-2149658841.jpg')",
      },
    },
  },
  plugins: [],
};
