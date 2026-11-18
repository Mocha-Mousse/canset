import { defineConfig } from 'astro/config';
// BASE_PATH/SITE_URL: alt dizinde yayın (GitHub Pages) için; kendi alan adında boş bırakılır.
export default defineConfig({
  site: process.env.SITE_URL || 'https://www.can-set.com',
  base: process.env.BASE_PATH || '/',
});
