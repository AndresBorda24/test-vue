/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/index.php",
    "./src/**/*.{js,vue}",
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    colors: {
      'aso-primary': "#047F8C",
      'aso-secondary': "#025E73",
      'aso-tertiary': "#03658C",
      'aso-yellow': "#F2A81D"
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

