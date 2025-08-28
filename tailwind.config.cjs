/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: { extend: {} },
  // (optional) guarantees dark utilities exist while debugging
  safelist: [
    'dark:bg-black',
    'dark:text-white',
    'dark:bg-neutral-900',
    'dark:text-neutral-100',
    'dark:from-neutral-950',
    'dark:to-neutral-900',
  ],
  plugins: [],
}
