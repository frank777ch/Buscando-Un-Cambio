// Prefija rutas internas con la base configurada en astro.config.mjs (por defecto "/").
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path = '/') => `${base}${path.startsWith('/') ? path : `/${path}`}`;

export const isCurrent = (current: URL, path: string) => {
  const here = current.pathname.replace(/\/$/, '') || '/';
  const target = url(path).replace(/\/$/, '') || '/';
  return here === target;
};
