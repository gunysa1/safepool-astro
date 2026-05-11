import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://YOUR_GITHUB_USERNAME.github.io',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
