// @ts-check
import { defineConfig } from 'astro/config';

// Publicado en Cloudflare Pages (raíz del dominio).
// Con dominio propio (p. ej. buscandouncambio.pe), definir SITE_URL al construir.
const site = process.env.SITE_URL ?? 'https://buscando-un-cambio.pages.dev';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
