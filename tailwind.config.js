module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: { extend: {
    colors: { zbg: "#141414", zcard: "#1f1f1f", zred: "#c00000", zdark: "#7a0000", zdeep: "#8b0000", zline: "#3a3a3a" },
    fontFamily: { sans: ["var(--font-inter)", "system-ui", "sans-serif"], logo: ["var(--font-logo)", "sans-serif"] },
    maxWidth: { page: "1100px" }
  } },
  plugins: [],
};
