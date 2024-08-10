import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        light: '#F9F7F2', 
        green: '#BDD4CE',
        lavender: '#9D98C0',
        dark: '#26192B',
      },
      fontFamily: {
        kulim: ['Kulim Park', 'sans-serif'],
      }
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
