/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  trailingComma: "none",
  printWidth: 120,
  tabWidth: 4,
  bracketSameLine: true,
  bracketSpacing: true,
};

export default config;
