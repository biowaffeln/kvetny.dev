// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Inter",
        cssVariable: "--font-inter",
        weights: ["100 900"],
        styles: ["normal", "italic"],
        subsets: ["latin", "cyrillic"],
        fallbacks: ["sans-serif"],
      },
      {
        provider: fontProviders.fontsource(),
        name: "JetBrains Mono",
        cssVariable: "--font-jetbrains-mono",
        weights: [400, 500, 600, 700],
        styles: ["normal"],
        subsets: ["latin"],
        fallbacks: ["monospace"],
      },
      {
        provider: fontProviders.local(),
        name: "Migra",
        cssVariable: "--font-migra",
        fallbacks: ["serif"],
        options: {
          variants: [
            {
              weight: 800,
              style: "normal",
              src: ["./src/assets/fonts/Migra-Extrabold.otf"],
            },
          ],
        },
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
