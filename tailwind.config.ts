import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      rRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "40px",
      },
      colors: {
        btn_color: "#0044F1",
      },
      margin: {
        mobile: "100px", 
        desktop: "150px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
