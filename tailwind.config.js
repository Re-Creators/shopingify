module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        main: "20% 1fr",
        "main-md": "8% 1fr 40%",
        "main-lg": "6% 1fr 25%",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
