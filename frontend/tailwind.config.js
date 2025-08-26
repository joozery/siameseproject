/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'metamorphous': ['Metamorphous', 'serif'],
        'prompt': ['Prompt', 'sans-serif'],
        'prompt-light': ['Prompt', 'sans-serif'],
        'prompt-medium': ['Prompt', 'sans-serif'],
        'prompt-semibold': ['Prompt', 'sans-serif'],
        'prompt-bold': ['Prompt', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

