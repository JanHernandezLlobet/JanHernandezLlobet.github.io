// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://JanHernandezLlobet.github.io',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'fr', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
