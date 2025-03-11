// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Add paths to all your React components
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')], // Add DaisyUI plugin
};

