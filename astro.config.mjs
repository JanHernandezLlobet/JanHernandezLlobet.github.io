// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://JanHernandezLlobet.github.io',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
