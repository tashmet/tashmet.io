/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        active: '#1faec8',
        'active-light': '#f1fbfb',
      },
    },
  },
  plugins: [],
}

