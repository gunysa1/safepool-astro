import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://safepool.co.il',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
