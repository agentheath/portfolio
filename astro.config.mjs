import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://agentheath.github.io',
  base: '/portfolio',
  integrations: [tailwind()],
});
