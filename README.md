# Buscando un Cambio · sitio web

Sitio oficial de **Buscando un Cambio (BUC)**, voluntariado juvenil animalista, ambiental y social de Lima. Está hecho con [Astro](https://astro.build) y se publica en Cloudflare Pages.

## Desarrollo

```bash
npm install
npm run dev       # http://localhost:4321/
npm run build     # genera dist/
npm run preview   # sirve dist/ localmente
```

## Qué se edita y dónde

| Quiero… | Archivo |
|---|---|
| Abrir o cerrar la convocatoria, cambiar su nombre o fecha de cierre | `src/data/site.ts` → `convocatoria` |
| Conectar el formulario de postulación | `src/data/site.ts` → `formulario.endpoint` |
| Publicar, editar o cerrar jornadas | `src/data/jornadas.json` |
| Cambiar teléfono, correo o redes | `src/data/site.ts` → `site` |
| Cambiar textos de las líneas (animalista, ambiental, social) | `src/data/site.ts` → `lineas` |
| Cambiar fotos | `src/assets/fotos/` (origen de cada una en `FUENTES.md`) |

### Jornadas

Cada jornada lleva: `fecha` (AAAA-MM-DD), `linea` (`animalista`, `ambiental` o `social`), `estado` (`abierta`, `ultimos` o `cerrada`), lugar, horario y, opcionalmente, `inscripcion` con la URL de su formulario. Si `inscripcion` está vacío, el botón «Anótame» abre WhatsApp con un mensaje ya escrito. Las jornadas pasadas se ocultan solas en el navegador.

**Las jornadas actuales son de ejemplo** (`"ejemplo": true`). Hay que borrarlas al cargar las reales.

### Formulario de postulación

El sitio es estático, así que el formulario envía los datos a un servicio externo:

1. Crea un formulario gratuito en [Formspree](https://formspree.io) con el correo de BUC.
2. Copia su endpoint (`https://formspree.io/f/xxxxxxx`) en `formulario.endpoint`.

Mientras el endpoint esté vacío, la persona completa el formulario y al final se le ofrece enviar sus datos por WhatsApp.

## Publicar (Cloudflare Pages)

```bash
npm run build
npx wrangler pages deploy dist --project-name=buscando-un-cambio
```

La primera vez hay que iniciar sesión con `npx wrangler login`. También se puede conectar el repo de GitHub en el panel de Cloudflare (Workers & Pages → Create → Pages → Connect to Git) con el comando de build `npm run build` y la carpeta de salida `dist`. Con dominio propio, define `SITE_URL` en las variables de entorno del proyecto.

## Marca

La guía de marca completa está en `brand/BRAND.md`: logo, paleta, tipografía, voz y la lista de pendientes para el cliente. Los tokens están en `src/styles/tokens.css`.
