// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from '@astrojs/react';

const site = 'https://thenovustech.com.br';

// https://astro.build/config
export default defineConfig({
  site,

  //   integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});