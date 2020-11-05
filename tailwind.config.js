module.exports = {
  theme: {
    fontFamily: {
      mono: [],
    },
    extend: {
      fontFamily: {},
      width: {
        72: "18rem",
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    borderColor: ["responsive", "hover", "focus", "active"],
    border: ["responsive", "hover", "focus", "active"],
    padding: ["responsive", "hover", "focus", "active"],
    fontSize: ["responsive", "hover", "focus", "active"],
  },
  plugins: [require("@tailwindcss/ui"), require("tailwindcss-hyphens")],
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  },
};
