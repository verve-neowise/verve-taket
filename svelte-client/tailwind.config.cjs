module.exports = {
  content: ["./src/**/*.{html,js,ts,svelte}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
