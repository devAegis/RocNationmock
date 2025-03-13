// tailwind.config.mjs
import daisyui from 'daisyui';

export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}', // Add paths to all your JavaScript/JSX files
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui], // Use import for DaisyUI
};