import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*",
  ],
  theme: {
    extend: {
      fontFamily: {
        'brld-reg': ['BeroldRegular', 'Helvetica', 'Arial', 'sans-serif',],
        'brld-stl': ['BeroldStylistic', 'Helvetica', 'Arial', 'sans-serif',],
      }
    }
  },
  plugins: [],
};
export default config;
