import type { Config } from "tailwindcss";
import { addDynamicIconSelectors } from "@iconify/tailwind";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "mb": "var(--mb-color)",
        "hh": "var(--hh-color)",
        "tvok": "var(--tvok-color)",
        "ts": "var(--ts-color)",
        "js": "var(--js-color)",
        "react": "var(--react-color)",
        "tailwind": "var(--tailwind-color)",
        "sass": "var(--sass-color)",
        "nextjs": "var(--nextjs-color)",
        "mongodb": "var(--mongodb-color)",
        "typegoose": "var(--typegoose-color)"
      }
    }
  },
  plugins: [
    addDynamicIconSelectors()
  ]
};
export default config;
