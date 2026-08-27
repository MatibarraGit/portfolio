// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      name: "Jet Brains Mono",
      cssVariable: "--font-jet-brains",
      provider: fontProviders.local(),
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/jetbrains-mono-latin-wght-normal.woff2"],
            weight: "100 800",
            style: "normal",
          },
        ],
      },
    },
    {
      name: "Space Grotesk",
      cssVariable: "--font-grotesk",
      provider: fontProviders.local(),
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/space-grotesk-latin-wght-normal.woff2"],
            weight: "300 700",
            style: "normal",
          },
        ],
      },
    },
  ],
});
