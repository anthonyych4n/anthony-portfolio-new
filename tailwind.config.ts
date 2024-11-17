import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%",
          }
        },
        blink: {
          "0%, 100%": {
            borderColor: "transparent"
          },
          "50%": {
            borderColor: "white"
          }
        }
      },
      animation: {
        typing: "typing 2s steps(30), blink .3s step-end forwards",
      }
      

    },
  },
  plugins: [],
} satisfies Config;
