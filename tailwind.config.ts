import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lemon: {
          DEFAULT: "#AFA939",
          100: "#8a862b",
          300: "#71711a",
          500: "#52520e",
        },
        green: {
          DEFAULT: "#395438",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
