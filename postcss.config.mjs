/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}, // ✅ Adds automatic vendor prefixes for better browser support
  },
};

export default config;
