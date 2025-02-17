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
      screens: {
        'h1080': { 'raw': '(min-width: 768px) and (max-height: 1080px)' }, // Только для ноутбуков
      },
      rotate: {
        '30': '30deg', 
        '35': '35deg', 
        '40': '40deg',  
        '60': '60deg',  
        '75': '75deg',  
        '180': '180deg',  
        '200': '200deg',  

        '270': '270deg',  
      },
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



