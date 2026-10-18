# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (sitio estático). Inicialmente GitHub Pages (2026-10-15); el usuario pidió publicarlo en **Cloudflare Pages** (2026-10-18). Reemplaza los placeholders HTML vacíos del repo (`pages/`, `resources/`, `assets/`), que no tienen contenido real.

## Users

- **Primario:** jóvenes de Lima (sobre todo universitarios y escolares de los últimos años) que conocen a BUC por Instagram o TikTok y quieren hacer voluntariado animalista, ambiental o social presencial los fines de semana. Su tarea: entender qué es BUC, convencerse de que "es para mí" aunque no tenga experiencia y **postular a la convocatoria** o a una jornada abierta.
- **Secundario (confirmado como no prioritario):** personas que buscan una jornada puntual, aliados institucionales (municipios, universidades, ONG), padres de voluntarios menores y posibles donantes.

## Product Purpose

Sitio oficial de Buscando un Cambio (BUC), voluntariado juvenil de Lima. **Objetivo principal: captar voluntarios.** Éxito = postulaciones completas de jóvenes que cumplen los requisitos (Lima presencial, compromiso mínimo de 6 meses, menores de 15 a 17 con autorización).

## Positioning

Comunidad de "buccitos" que convierte el amor por los animales, el ambiente y las personas en jornadas reales cada fin de semana, sin experiencia previa, con acreditación SENAJU y Municipalidad de Lima. Lema: "Todos tenemos un corazón verde".

## Operating Context

- Convocatorias semestrales (2026-I, 2026-II). Entre convocatorias la inscripción general está **cerrada**, pero las jornadas abiertas siguen.
- Jornadas de domingo y sábado en albergues, playas, ríos y comunidades. Se difunden en Instagram con fecha, lugar, hora de encuentro y formulario.
- Hoy usan Google Forms (todos cerrados el 2026-10-15) y un canal de difusión de WhatsApp.
- El contenido lo mantienen voluntarios de la comisión de Marketing y Audiovisuales: actualizar textos y enlaces tiene que ser sencillo.

## Capabilities and Constraints

- **Formulario de postulación propio en la web** (decisión del usuario). Como el sitio es estático, el envío necesita un servicio externo. **Abierto:** Formspree, Google Apps Script → Google Sheets u otro. El endpoint debe ser configurable en un solo lugar.
- **Campos del formulario: provisionales.** No se pudieron copiar porque los cinco Google Forms publicados están cerrados y no muestran las preguntas. Se derivan de requisitos confirmados en `brand/BRAND.md` §7 y **el cliente debe validarlos**.
- Estado "convocatoria cerrada": derivar al canal de WhatsApp (copia real del formulario cerrado de la jornada BUC x LUC).
- Requisitos confirmados: solo Lima presencial; mínimo 6 meses; CV no obligatorio; menores desde 15 con autorización de padre, madre o apoderado; comisiones Líderes de voluntariado, Marketing y audiovisuales, Gestión e impacto social.
- Contacto real: WhatsApp/teléfono 933 040 081 · buscandouncambio.pe@gmail.com · Instagram @buscandouncambio.pe · canal WhatsApp whatsapp.com/channel/0029VaeNSN38fewrLECmzZ3G · Facebook · TikTok y LinkedIn (vía Linktree).
- Sin dominio confirmado; sin medios de donación confirmados.

## Brand Commitments

La marca está documentada y es vinculante: `brand/BRAND.md` (identidad, logo, paleta, tipografía, recursos gráficos, voz) y `brand/tokens.css` / `brand/tokens.json`. En resumen: sello verde del globo (vector reconstruido en `brand/logo/`), verdes lima/acento/bosque + amarillo para fechas, Sour Gummy / Patrick Hand / Poppins / Montserrat, tuteo cálido con 💚, mascota Buki. Los diseños de aliados (rojo/blanco de FPC, etc.) no son marca BUC.

## Evidence on Hand

- 511 posts de Instagram con textos (`brand/meta/captions.json`) e imágenes de hasta 1080 px (`brand/instagram/hires/`). Candidatas a foto web en `brand/contactsheet_seleccion_web.jpg`.
- Misión, visión y valores (2024), FAQ de convocatoria, beneficios de ser buccito, acróstico B-U-C-C-I-T-O, lista de aliados: `brand/BRAND.md` §1, §7.
- Cifras reales publicadas: 20,9 mil seguidores en IG; "más de 1000 postulantes" en la convocatoria 2026-II; acreditación SENAJU desde el 28-feb-2022; primer post 26-nov-2021.
- **No existen, no inventar:** cifras de impacto consolidadas (voluntarios activos, kg de residuos, animales atendidos), testimonios con nombre y autorización, reseñas, razón social o RUC, medios de donación.
- **Fotos con personas:** necesitan autorización de uso. **Menores:** no publicar sin autorización de los padres (ver `brand/BRAND.md` §8).

## Product Principles

1. **Postular tiene que sentirse posible:** "no necesitas experiencia", requisitos claros antes de pedir datos, nada de letra chica escondida.
2. **Mostrar jornadas reales, no promesas:** fechas, lugares y fotos de lo que ya hacen.
3. **Mantenible por voluntarios:** convocatoria, fechas y enlaces se cambian en un solo archivo de contenido.
4. **Cuidar a las personas:** cero datos ni imágenes de menores sin autorización; pedir solo los datos necesarios.

## Accessibility & Inclusion

Público joven, mayormente desde el celular (vienen de Instagram/TikTok): mobile-first, WCAG 2.2 AA (contrastes ya validados en `brand/BRAND.md` §3), formulario accesible con errores claros en español.
