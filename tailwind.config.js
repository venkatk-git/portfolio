/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [addVariablesForColors],
};
function addVariablesForColors({ addBase, theme }) {
  function flattenColorPalette(colors) {
    // A function to flatten the color palette, you need to provide its implementation.
    // This is a placeholder.
    return colors;
  }

  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.entries(allColors).reduce((acc, [key, val]) => {
    acc[`--${key}`] = val;
    return acc;
  }, {});

  addBase({
    ":root": newVars,
  });
}
