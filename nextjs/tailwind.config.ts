import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        app: "linear-gradient(360deg,#1d3557 0%,rgba(29,53,87,0.88) 100%),url(https://honoluluspeechanddebate.org/wp-content/uploads/2023/04/DSC02231-scaled.jpg)",
      },
      colors: {
        primary: "#8e202b",
        sub: "#E63946",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
export default config;
