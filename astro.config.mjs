import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://gunysa1.github.io',
  base: '/safepool-astro',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
