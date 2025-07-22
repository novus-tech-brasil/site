// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

const site = 'https://novus-tech-brasil.github.io/site';

// https://astro.build/config
export default defineConfig({
  site,
  base: '/site/',

  vite: {
    plugins: [tailwindcss()],
  },

//   integrations: [react()],
});
