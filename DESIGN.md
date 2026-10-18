---
name: Buscando un Cambio
description: El álbum de recortes de los buccitos; papel lima, polaroids reales y fichas de jornada para sumarse al voluntariado en Lima.
colors:
  verde-logo: "#43D029"
  verde: "#84CC2C"
  lima: "#A6D86C"
  bosque: "#185C0C"
  bosque-700: "#12470A"
  amarillo: "#FCDC62"
  rojo: "#E84040"
  rojo-error: "#A1221B"
  rosa-error: "#FDECEB"
  noche: "#161616"
  papel: "#F7F5EE"
  blanco: "#FFFFFF"
  lima-100: "#EEF7E2"
  lima-300: "#CBE9A6"
  salvia: "#9FB88B"
  gris-500: "#6B6B6B"
  gris-600: "#4A4A4A"
typography:
  hero:
    fontFamily: "Sour Gummy, Titan One, Arial Rounded MT Bold, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 12.4cqi, 6rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "0.005em"
  page-title:
    fontFamily: "Sour Gummy, Titan One, Arial Rounded MT Bold, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 1.4rem + 4.4vw, 5rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "0.005em"
  display:
    fontFamily: "Sour Gummy, Titan One, Arial Rounded MT Bold, system-ui, sans-serif"
    fontSize: "clamp(2.3rem, 1.5rem + 3.6vw, 4.6rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "0.005em"
  headline:
    fontFamily: "Sour Gummy, Titan One, Arial Rounded MT Bold, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.5rem + 2vw, 3.2rem)"
    fontWeight: 900
    lineHeight: 1.04
  subhead:
    fontFamily: "Sour Gummy, Titan One, Arial Rounded MT Bold, system-ui, sans-serif"
    fontSize: "clamp(1.8rem, 1.4rem + 1.4vw, 2.5rem)"
    fontWeight: 900
    lineHeight: 1.04
  title:
    fontFamily: "Sour Gummy, Titan One, Arial Rounded MT Bold, system-ui, sans-serif"
    fontSize: "clamp(1.45rem, 1.2rem + 0.9vw, 1.9rem)"
    fontWeight: 900
    lineHeight: 0.98
  hand:
    fontFamily: "Patrick Hand, Gochi Hand, Comic Sans MS, cursive"
    fontSize: "clamp(1.2rem, 1.05rem + 0.5vw, 1.7rem)"
    fontWeight: 400
    lineHeight: 1.1
  hand-ui:
    fontFamily: "Patrick Hand, Gochi Hand, Comic Sans MS, cursive"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.1
  hand-chip:
    fontFamily: "Patrick Hand, Gochi Hand, Comic Sans MS, cursive"
    fontSize: "1.35rem"
    fontWeight: 400
    lineHeight: 1.1
  lead:
    fontFamily: "Poppins, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.05rem, 1rem + 0.35vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Poppins, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  small:
    fontFamily: "Poppins, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.5
  caption:
    fontFamily: "Poppins, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.4
  label:
    fontFamily: "Montserrat, Poppins, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    letterSpacing: "0.08em"
rounded:
  sheet: "4px"
  note: "6px"
  ticket: "8px"
  field: "10px"
  option: "12px"
  sticker: "14px"
  pill: "999px"
  circle: "50%"
spacing:
  gutter: "clamp(16px, 4vw, 72px)"
  container: "1760px"
  section: "clamp(64px, 9vw, 128px)"
  section-after-band: "clamp(96px, 11vw, 150px)"
  torn-edge: "40px"
components:
  button-primary:
    backgroundColor: "{colors.bosque}"
    textColor: "{colors.blanco}"
    rounded: "{rounded.pill}"
    padding: "0.7em 1.45em"
    height: "54px"
  button-primary-hover:
    backgroundColor: "{colors.bosque-700}"
  button-light:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.bosque}"
    rounded: "{rounded.pill}"
  button-light-hover:
    backgroundColor: "{colors.lima-100}"
  button-small:
    rounded: "{rounded.pill}"
    padding: "0.55em 1.1em"
    height: "44px"
  sticker:
    backgroundColor: "{colors.bosque}"
    textColor: "{colors.blanco}"
    typography: "{typography.hand}"
    rounded: "{rounded.sticker}"
    padding: "0.2em 0.7em 0.25em"
  sticker-lima:
    backgroundColor: "{colors.verde-logo}"
    textColor: "{colors.noche}"
  sticker-sol:
    backgroundColor: "{colors.amarillo}"
    textColor: "{colors.noche}"
  tag:
    backgroundColor: "{colors.bosque}"
    textColor: "{colors.blanco}"
    rounded: "{rounded.field}"
    padding: "5px 11px 6px"
  polaroid:
    backgroundColor: "{colors.blanco}"
    padding: "clamp(10px, 1.1vw, 15px)"
  ticket:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.noche}"
    rounded: "{rounded.ticket}"
    padding: "26px 20px 20px"
  ticket-date:
    backgroundColor: "{colors.amarillo}"
    textColor: "{colors.noche}"
    rounded: "{rounded.sheet}"
    padding: "6px 10px"
  estado-abierta:
    backgroundColor: "{colors.verde-logo}"
    textColor: "{colors.noche}"
    rounded: "{rounded.pill}"
    padding: "6px 11px"
  estado-ultimos:
    backgroundColor: "{colors.rojo}"
    textColor: "{colors.blanco}"
  estado-cerrada:
    backgroundColor: "{colors.noche}"
    textColor: "{colors.blanco}"
  estado-paso:
    backgroundColor: "{colors.gris-500}"
    textColor: "{colors.blanco}"
  band:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.noche}"
  band-dark:
    backgroundColor: "{colors.bosque}"
    textColor: "{colors.blanco}"
  sheet:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.noche}"
    rounded: "{rounded.sheet}"
  note:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.noche}"
    rounded: "{rounded.note}"
  option-card:
    backgroundColor: "{colors.blanco}"
    rounded: "{rounded.option}"
    padding: "14px"
  chip:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.bosque}"
    typography: "{typography.hand-chip}"
    rounded: "{rounded.pill}"
    height: "46px"
  chip-selected:
    backgroundColor: "{colors.bosque}"
    textColor: "{colors.blanco}"
  input:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.noche}"
    rounded: "{rounded.field}"
    padding: "12px 14px"
    height: "50px"
  form-error:
    backgroundColor: "{colors.rosa-error}"
    textColor: "{colors.rojo-error}"
    rounded: "{rounded.field}"
    padding: "12px 14px"
  topbar:
    textColor: "{colors.bosque}"
    padding: "18px 0"
  topbar-scrolled:
    backgroundColor: "{colors.lima}"
    textColor: "{colors.bosque}"
    padding: "10px 0"
  carousel-banner:
    backgroundColor: "{colors.noche}"
    textColor: "{colors.blanco}"
    height: "clamp(560px, 80svh, 840px)"
  carousel-frame:
    backgroundColor: "{colors.blanco}"
    padding: "clamp(10px, 1vw, 14px)"
    height: "70%"
  carousel-button:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.bosque}"
    rounded: "{rounded.circle}"
    size: "58px"
  carousel-button-hover:
    backgroundColor: "{colors.amarillo}"
    textColor: "{colors.bosque}"
  carousel-toggle:
    textColor: "{colors.blanco}"
    rounded: "{rounded.circle}"
    size: "40px"
  carousel-dot-active:
    backgroundColor: "{colors.amarillo}"
    rounded: "{rounded.pill}"
    height: "10px"
    width: "26px"
  marquee-chip:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.bosque}"
    rounded: "{rounded.sticker}"
    padding: "12px 24px 12px 12px"
    height: "88px"
  logo-tile:
    backgroundColor: "{colors.blanco}"
    rounded: "{rounded.option}"
    size: "64px"
  logo-tile-proof:
    backgroundColor: "{colors.blanco}"
    rounded: "{rounded.option}"
    size: "56px"
  logo-tile-stamp:
    backgroundColor: "{colors.blanco}"
    rounded: "{rounded.option}"
    size: "72px"
---

# Design System: Buscando un Cambio

## Overview

**Creative North Star: "El álbum de los buccitos"**

La web es un álbum de recortes pegado sobre papel lima arrugado: polaroids blancas con fotos reales de jornadas, sostenidas con cinta o clip, stickers verde bosque con borde blanco, fichas blancas de jornada con su fecha en amarillo, notas en letra de mano y garabatos verdes y amarillos. Todo está un poco girado, como si alguien lo hubiera pegado a mano un sábado después de la jornada. La foto real es la prueba; el papel es el escenario.

La página alterna tres papeles a todo el ancho: el papel lima de fondo, bandas de papel claro con bordes rasgados arriba y abajo, y bandas oscuras verde bosque que, cuando siguen al lima, entran también con un borde rasgado (en bosque). La portada corre lima (hero) → banner de momentos a todo el ancho (la foto de cada jornada desenfocada como fondo, con la misma foto completa en marco blanco encima; el lima le cae encima con un borde rasgado) → banda clara (líneas) → lima (jornadas) → banda bosque (Ser buccito) → banda clara (requisitos) → lima (aliados en cinta) → pie bosque. Sobre todo ello flota una barra superior fija, transparente arriba y de papel lima translúcido al bajar. Las columnas son anchas (contenedor de 1760px) y la densidad es de álbum, no de tablero: pocos objetos grandes que se superponen y secciones de lectura con aire. Los títulos gritan en Sour Gummy en mayúsculas; la voz cercana vive en Patrick Hand (pies de foto, navegación, stickers); el cuerpo informa en Poppins. Se rechaza explícitamente la plantilla de ONG con foto a sangre y tarjetas de ícono: el único fondo fotográfico es el desenfoque del banner de momentos, que es atmósfera y no imagen; la foto que se lee sigue enmarcada.

El movimiento es el gesto de pegar: los objetos de la portada se asientan al cargar, los demás se pegan girando al entrar en pantalla y el texto sube; todo condicionado a movimiento no reducido y visible por defecto. Dos piezas se mueven solas, ambas con pausa: el carrusel de momentos (avanza cada 6s) y la cinta de aliados (desliza de izquierda a derecha); con movimiento reducido el carrusel no avanza y la cinta queda quieta y centrada.

**Key Characteristics:**
- Fondo de papel lima con textura rasterizada (papel-lima.webp, 720px en mosaico) en todo el sitio, interrumpido por bandas claras con borde rasgado y bandas bosque (con borde rasgado bosque cuando siguen al lima).
- Objetos físicos con rotación leve (−6° a +6°, por la propiedad `--r`) y sombras suaves de elevación; nada plano, nada con sombra dura desplazada.
- Tres voces tipográficas con roles fijos (display, mano, cuerpo), más Montserrat para la firma, la línea de respaldo y el nombre de cada aliado.
- Fotos reales siempre dentro de un marco blanco (polaroid o marco del banner), nunca a sangre ni recortadas para llenar; si hay que llenar un ancho, se llena con la misma foto desenfocada detrás.
- Logos de terceros (aliados, acreditaciones) siempre en una baldosa blanca cuadrada de 12px, nunca sueltos sobre el papel.
- Accesorios físicos (cinta, clip, papel, borde rasgado) son imágenes raster, no CSS dibujado.
- Movimiento de pegado: asentarse, pegarse, subir, menear; nunca bloquea contenido.

## Colors

Una paleta de marca extraída del Instagram de BUC: lima como papel, bosque como tinta, amarillo como marcador, papel claro como segunda hoja.

### Primary
- **Verde Bosque** (bosque): la tinta del álbum. Texto sobre lima y papel, botones, stickers, enlaces, foco, títulos de tinta y el fondo de las bandas oscuras y del pie. Su hover es **Bosque Profundo** (bosque-700).
- **Lima Papel** (lima): el papel de fondo de todo el sitio, bajo la textura arrugada, y el fondo translúcido (al 94%, con desenfoque) de la barra superior al bajar. Sobre él solo se escribe en bosque o noche (y en blanco con contorno bosque para display). En bandas oscuras, frase de cierre a mano y borde de íconos de redes. Su borde rasgado (torn-lima.webp, volteado) cae sobre el borde superior del banner de momentos.

### Secondary
- **Amarillo Marcador** (amarillo): fechas y horas de las fichas de jornada, la fecha de cada momento del carrusel (con ícono de calendario, sobre el banner oscuro), el sticker «sol», letras grandes del acróstico, títulos del pie, énfasis (strong) sobre bosque, foco sobre oscuro, el punto activo del carrusel y el hover de sus flechas. Nunca como texto sobre claro.
- **Verde Rotulador** (verde): garabatos ondulados, subrayado ondulado de los enlaces a mano, el resaltado de marcador detrás de la palabra clave en títulos de tinta, el halo de foco de los campos (al 45%) y el borde punteado de avisos.

### Tertiary
- **Verde Sello** (verde-logo): la palabra final de los títulos display con contorno, el sticker lima y el estado «abierta». Acento grande, nunca texto corrido.
- **Rojo Corazón** (rojo): corazones dibujados y el estado «últimos cupos». Puntual, nunca superficie.
- **Rojo Error** (rojo-error) sobre **Rosa Error** (rosa-error): el único rojo de formulario. Borde de campo inválido, mensaje de error bajo el campo y la caja de error general (rojo-error sobre rosa-error). No se usa fuera de validación.

### Neutral
- **Papel Claro** (papel): bandas claras a todo el ancho, hojas de lectura, panel del menú móvil y filtros. Es la segunda hoja del álbum, no el marco de las fotos.
- **Blanco** (blanco): polaroids, marcos del carrusel, fichas de jornada, notas de misión y visión, preguntas, tarjetas de requisitos, fichas de aliados, baldosas de logo, flechas del carrusel, campos de formulario, bordes de stickers y estados, texto sobre bosque y sobre el banner (título, cuerpo, pausa).
- **Noche** (noche): texto principal sobre claro, estado «cerrada», fondo del banner de momentos y su sombra degradada (de izquierda a derecha, 82% → 55% → 20%; bajo 860px de abajo arriba, 85% → 45%) que asegura el texto blanco sobre la foto desenfocada.
- **Gris Lápiz** (gris-600): texto secundario y pistas de formulario sobre claro.
- **Gris Pasado** (gris-500): placeholder de los campos y estado «ya pasó» de una jornada. Nunca texto informativo.
- **Salvia** (salvia): borde en reposo de los campos de formulario; pasa a bosque en hover y foco.
- **Lima Suave** (lima-100) y **Lima Borde** (lima-300): fondo de opción seleccionada, aviso de apoderado y texto secundario sobre bosque (lead); bordes o separadores punteados sobre claro y fondo de carga de las fotos.

### Named Rules
**The Tinta Bosque Rule.** Sobre lima, papel o blanco, el texto es bosque o noche. Verde, verde sello y amarillo nunca son texto sobre claro; viven como superficie, resaltado o garabato.

**The Marcador Rule.** El amarillo marca tiempo (fecha y hora de jornada o de un momento), énfasis sobre bosque o el estado activo de un control sobre oscuro (punto del carrusel, hover de flecha). No se usa como fondo de sección.

**The Tres Papeles Rule.** Las secciones a todo el ancho solo pueden ser lima (con textura), papel claro (banda con borde rasgado) o bosque (banda oscura). Ningún otro color pinta una sección. La barra superior, cuando toma fondo, es el mismo papel lima translúcido, no un cuarto color. La única excepción es el banner de momentos: su superficie es la propia foto desenfocada sobre noche, existe una sola vez (justo bajo el hero) y no se replica como fondo de otras secciones.

**The Un Solo Rojo de Error Rule.** La validación usa rojo-error sobre blanco o rosa-error; rojo corazón no marca errores y rojo-error no decora.

## Typography

**Display Font:** Sour Gummy 900 (con Titan One, Arial Rounded MT Bold)
**Hand Font:** Patrick Hand 400 (con Gochi Hand, Comic Sans MS)
**Body Font:** Poppins 400/600/700 (con system-ui)
**Label Font:** Montserrat 600/700, mayúsculas espaciadas

**Character:** Un título gomoso y gritón en mayúsculas convive con la letra de mano del pie de foto; Poppins se mantiene neutral para que la información de jornadas y requisitos se lea sin esfuerzo.

### Hierarchy
- **Hero** (900, clamp(2.6rem, 12.4cqi, 6rem), 0.95): título de la portada, medido con unidades de contenedor para que llene su columna y nunca invada el collage. Bajo 960px pasa a clamp(2.6rem, 11.5cqi, 5rem).
- **Page title** (900, clamp(2.6rem…5rem), 0.95): título de cabecera de las páginas internas. Sin aside ocupa una sola columna, hasta 22ch.
- **Display** (900, clamp(2.3rem…4.6rem), 0.95, mayúsculas, balance): títulos de sección. Sobre lima, bosque y el banner de momentos, blanco con contorno bosque de 8 direcciones (grosor clamp(2px, 0.055em, 5px)) y la palabra final en verde sello. Sobre bandas claras, variante de tinta (interlineado 1.04).
- **Headline** (900, clamp(2rem…3.2rem), 1.04): títulos de tinta dentro de hojas y notas (misión, visión, estados de envío del formulario). También la frase a mano de cada línea de voluntariado usa este tamaño en Patrick Hand.
- **Subhead** (900, clamp(1.8rem…2.5rem)): títulos de hoja lateral y del bloque de aliados.
- **Title** (900, clamp(1.45rem…1.9rem), 0.98, mayúsculas): título de ficha de jornada y legend de formulario, en noche con la segunda parte en bosque.
- **Hand** (400, clamp(1.2rem…1.7rem), 1.1–1.2): pies de polaroid, stickers, enlaces a mano y frases cortas de cierre.
- **Hand UI** (400, 1.5rem): navegación principal, mensajes vacíos, años de la línea de tiempo y cierres a mano. **Hand chip** (1.35rem): chips de opción y stickers de comisión. La etiqueta de esquina de ficha usa 1.15rem.
- **Lead** (400, clamp(1.05rem…1.25rem), 1.6): párrafo de entrada bajo títulos.
- **Body** (400, 1.0625rem, 1.6, máx. 65ch): texto corrido; strong en bosque 700 (amarillo sobre oscuro).
- **Small** (0.95rem): listas dentro de fichas, lugares de cada línea, texto del pie y, en Montserrat 600 amarillo, la fecha de cada momento del carrusel.
- **Caption** (0.875rem): pistas y descripciones de opción en formularios, línea legal del pie.
- **Label** (Montserrat 700, 0.875rem, 0.08em, mayúsculas): la firma «BUSCANDO UN CAMBIO» junto al logo (0.8rem en móvil) y, en 600, la línea de respaldo (SENAJU).

### Named Rules
**The Tres Voces Rule.** Display grita, la mano conversa, Poppins informa. La letra de mano nunca lleva párrafos largos; Poppins nunca hace de titular.

**The Contorno o Tinta Rule.** El título blanco con contorno bosque es para lima, bosque y el banner de momentos; sobre papel claro el título pasa a tinta bosque sólida con la palabra clave sobre un resaltado de marcador verde que ocupa solo el cuerpo de la letra (14%–94% de la línea, interlineado 1.04), para que nunca tape la línea de arriba. No se usa el contorno sobre papel claro.

### Known inconsistencies (deriva, no sistema)
Valores presentes en el build que no son roles; el trabajo futuro debe converger hacia el paso indicado, no copiarlos:
- 0.92rem y 0.9rem (prueba social de la portada, notas de ejemplo, nota de pasos, mensaje de error) → **small** 0.95rem o **caption** 0.875rem.
- 0.98rem, 1.02rem, 1.05rem y 1.1rem (texto de fichas, requisitos, listas, preguntas, notas, acróstico) → **body** 1.0625rem.
- 1.3rem (filtros de voluntariados) y 1.45rem (pasos de postulación) y 1.6rem (menú móvil) → **hand-chip** 1.35rem o **hand-ui** 1.5rem.
- clamps de títulos sueltos: clamp(2rem, 1.4rem + 2vw, 3.1rem), clamp(2rem, 1.5rem + 1.8vw, 3rem), clamp(2.2rem, 1.5rem + 2.4vw, 3.6rem) → **headline**; clamp(1.8rem, …, 2.6rem) → **subhead**; clamp(1.4rem, 1.2rem + 0.8vw, 1.8rem) (legend) → **title**; clamp(1.6rem…2.3rem), clamp(1.6rem…2.1rem), clamp(1.5rem…2rem), clamp(1.7rem…2.3rem), clamp(1.3rem…1.7rem) para frases a mano → **hand** escalado o **subhead**.
- 0.7rem del sello «fecha de ejemplo» y 0.85rem del estado están por debajo del paso caption; el estado se tolera por ser display en mayúsculas sobre píldora, el sello debe subir a 0.75rem como mínimo.
- La escala `--fs-*`, `--lh-tight/snug` y `--fs-eyebrow` de tokens.css no se usa en ningún componente; la escala normativa es la de este archivo.
- Carrusel: título de momento en display con contorno a clamp(2.4rem, 1.4rem + 3.6vw, 5rem), máx. 14ch → **page-title** (clamp(2.6rem…5rem)); cuerpo clamp(1.05rem, 1rem + 0.35vw, 1.3rem) con interlineado 1.55 → **lead**; la fecha fuerza 0.95rem y amarillo con `!important` → quitar los `!important` y declarar **small** en su propio selector.
- Aliados: el nombre junto al logo en la cinta usa Montserrat 700 a 1.05rem sin mayúsculas ni espaciado → **small** 0.95rem (o **label** si se quiere espaciado).
- Bordes rasgados bosque: el pie (sigue a los aliados sobre lima) y la banda de valores de Nosotros no llevan `.dark--torn`; entran con un corte recto que contradice la regla de bandas bosque tras el lima.
- Respaldo de la portada: `.acred` fuerza el hueco a 12px con `!important` → declararlo en su propio selector.
- Colores sueltos de los nuevos componentes: blancos translúcidos del banner (puntos inactivos al 55%, flechas al 90%, borde de pausa al 70%, hover de pausa al 15%) escritos en literal (converger a un rol «blanco sobre foto» con nombre); la sombra del banner en rgb(22 22 22 / …) literal en vez de derivada de `--buc-noche`, borde de la barra en rgb(24 92 12 / 0.12) (bosque al 12%), fondo de la barra en rgb(166 216 108 / 0.94) escrito en literal en vez de derivado de `--buc-lima`.

## Layout

Contenedor centrado de 1760px con gutter fluido clamp(16px, 4vw, 72px). Las secciones respiran con padding vertical clamp(64px, 9vw, 128px); la sección que sigue a una banda clara sube su padding superior a clamp(96px, 11vw, 150px) para dejar sitio al borde rasgado. Las bandas (clara y bosque) van a todo el ancho; su contenido vuelve al contenedor.

El primer viewport es una composición de dos columnas (1.08fr / 0.92fr): copia a la izquierda (título, párrafo, botón y enlace a mano, respaldo) y a la derecha un collage absoluto con polaroid grande, polaroid pequeña con clip, ficha de próxima jornada, sticker y Buki, en una caja con aspect-ratio 0.9 y máximo 660px. Las líneas de voluntariado alternan foto/texto en dos columnas (1.05fr / 0.95fr, hueco clamp(32px, 4vw, 72px)); cada pila de dos polaroids vive en una caja con aspect-ratio 1.08 y máximo 720px (1.02 bajo 960px), no en un alto mínimo. Las grillas de fichas usan auto-fit con mínimo de 280px. Las cabeceras de página interna son de dos columnas con aside (collage o Buki) y de una sola columna sin él.

La barra superior es `position: sticky` a todo el ancho (z-index 50) con su contenido en el contenedor; su padding vertical es 18px y baja a 10px al pasar 24px de scroll. El banner de momentos va a todo el ancho, sin título visible (el h2 «Así se vive un domingo BUC» es sr-only): pista flex con scroll-snap al inicio, una diapositiva por pantalla, alto clamp(560px, 80svh, 840px). Dentro de cada una, la foto completa en su marco va a la derecha alineada al borde del contenedor (alto 70%, ancho máx. 52%, sin recortar), y la columna de texto a la izquierda dentro del contenedor (máx. min(46ch, 44vw)). Los controles van en una fila al pie, en el contenedor: puntos, pausa y, empujadas a la derecha, las flechas. Bajo 860px la foto se apila arriba (4:3, ancho del contenedor) y el texto debajo, con alto mínimo de 640px. La cinta de aliados va a todo el ancho de la sección, fuera del contenedor, con los bordes desvanecidos por máscara (8% a cada lado).

Puntos de quiebre reales: 960px (portada y cabeceras a una columna, collage centrado a 560px), 860px (navegación a menú desplegable, carrusel apilado), 600px (collage reacomodado con aspect-ratio 0.66, garabatos menores ocultos, requisitos a una columna). Los quiebres de 900, 800, 700 (hoy también el de los controles compactos del carrusel), 560 y 360px existen en piezas sueltas y deberían converger hacia 960/860/600.

## Elevation & Depth

Profundidad física, no tonal: cada objeto pegado proyecta una sombra suave en dos capas, como papel sobre papel. Las bandas dan contraste por bloque, no por sombra; su borde rasgado (torn.webp, 900×40px, repetido en horizontal) se superpone 30px sobre la sección vecina, y el inferior es el mismo recorte volteado. Las bandas bosque que siguen al lima (`.dark--torn`) llevan arriba el mismo recorte teñido de bosque (torn-bosque.webp, derivado de torn.webp, desplazado al 61% para no repetir el dibujo de la banda clara). El banner de momentos lo invierte: es el lima del hero el que cae sobre la foto, con el recorte teñido de lima (torn-lima.webp, volteado, al 23%) superpuesto 10px sobre su borde superior. La barra superior, al tomar fondo, se separa con un filete bosque al 12%, desenfoque de 10px con saturación 1.2 y una sombra suave. Buki y recortes PNG usan drop-shadow para seguir su silueta (0 8px 12px al 16%).

### Shadow Vocabulary
- **Polaroid** (`0 2px 4px rgb(0 0 0 / 0.12), 0 8px 20px rgb(0 0 0 / 0.14)`): polaroids y fichas de jornada sobre lima.
- **Polaroid en banda** (`0 2px 4px rgb(0 0 0 / 0.1), 0 14px 30px rgb(22 22 22 / 0.16)`): polaroids sobre papel claro, donde la sombra base se perdería.
- **Card** (`0 1px 2px rgb(22 22 22 / 0.06), 0 6px 18px rgb(22 22 22 / 0.08)`): papelitos menores (preguntas, requisitos, fichas de aliados, sellos de acreditación, baldosas de logo del respaldo).
- **Filete de logo** (`0 0 0 1px rgb(22 22 22 / 0.08)`): anillo de 1px que recorta la baldosa de logo dentro de una ficha blanca (cinta de aliados, sellos de Nosotros).
- **Lift** (`0 10px 30px rgb(22 22 22 / 0.18)`): hover de polaroid y ficha que se levantan, panel del menú móvil.
- **Sheet** (`0 2px 4px rgb(0 0 0 / 0.08), 0 18px 40px rgb(0 0 0 / 0.14)`): hojas de lectura y de formulario.
- **Sticker** (`0 2px 4px rgb(0 0 0 / 0.12), 0 8px 18px rgb(0 0 0 / 0.16)`): stickers.
- **Esquina** (`0 4px 10px rgb(0 0 0 / 0.15)`): etiqueta y estado pegados en las esquinas de la ficha.
- **Botón** (`0 3px 6px rgb(13 58 6 / 0.25), 0 10px 22px rgb(13 58 6 / 0.22)`): sombra teñida de bosque bajo el botón principal.
- **Barra** (`0 6px 20px rgb(22 22 22 / 0.1)`): barra superior con fondo (hover, foco dentro o tras 24px de scroll).

La nota de misión/visión usa una variante propia (0 16px 34px al 12%) que es deriva de **Sheet**. Sobre la foto desenfocada el banner usa sombras más densas, que son deriva y no vocabulario: marco de foto `0 2px 6px rgb(0 0 0 / 0.25), 0 30px 60px rgb(0 0 0 / 0.4)` (converger a una variante «Polaroid en oscuro» con nombre), flechas `0 6px 18px rgb(0 0 0 / 0.3)` (converger a esa misma variante) y sombra de texto `0 1px 12px rgb(0 0 0 / 0.45)` en el cuerpo.

### Named Rules
**The Papel Sobre Papel Rule.** Toda sombra es difusa, con desenfoque y opacidad baja. Ninguna sombra dura desplazada sin desenfoque.

**The Pegado Rule.** El movimiento imita pegar: la portada se asienta al cargar (900ms, cae 18px desde un giro extra de −7° y escala 1.05, con retardo por objeto); los objetos se pegan al entrar en pantalla (suben 46px desde −5° y escala 0.96, ligado a `view()`, de entry 5% a cover 28%); el texto sube 28px (entry 0% a cover 22%). Todo vive dentro de `prefers-reduced-motion: no-preference`; el pegado por scroll además dentro de `@supports (animation-timeline: view())`. Sin soporte, todo se ve quieto y completo.

**The Con Pausa Rule.** Lo que se mueve solo se puede detener: el carrusel avanza cada 6s (y su foto activa se aleja lentamente de escala 1.04 a 1 en 6.5s lineal; el texto entra subiendo 18px en 600ms escalonado) pero se pausa al pasar el cursor, al enfocar algo dentro, con la pestaña oculta y con su botón de pausa; la cinta de aliados (48s lineal, de izquierda a derecha) se detiene en hover y foco. Con `prefers-reduced-motion: reduce` el carrusel arranca pausado, sin desplazamiento suave ni zoom, y la cinta se convierte en una fila envuelta, centrada y sin duplicados.

## Shapes

Esquinas casi rectas para el papel y redondeadas para lo que se pulsa. Hojas, notas de misión y franja de fecha a 4px, preguntas y anillo de foco a 6px, fichas a 8px, campos, etiquetas, tarjetas de requisito, caja de error y panel móvil a 10px, tarjetas de opción, avisos, sellos de acreditación y baldosas de logo a 12px, stickers y fichas de la cinta de aliados a 14px, píldora para botones, chips, filtros y estados, círculo para el menú móvil, las redes y los controles del carrusel. Las polaroids y los marcos del carrusel no tienen radio; el marco del banner gira 2° (−1.5° apilado en móvil).

Stickers, etiquetas y estados llevan borde blanco grueso (3–4px) que los recorta del fondo. Los sellos de acreditación y el sello «fecha de ejemplo» usan borde bosque discontinuo, como un timbre. Las bandas claras tienen borde rasgado raster arriba y abajo; las bandas bosque que siguen al lima, solo arriba; las hojas pueden tenerlo arriba y entonces pierden el radio superior. La rotación leve es parte de la forma y se declara con `--r` para que hover y animaciones la respeten; formularios y texto corrido no giran.

## Components

### Buttons
Gomosos y con peso, como un sticker grande que se puede presionar.
- **Shape:** píldora (999px), borde de 3px del mismo color, alto mínimo 54px.
- **Primary:** fondo bosque, texto blanco en Sour Gummy 900 mayúsculas, clamp(1.05rem…1.4rem), flecha SVG a 1.05em.
- **Hover / Focus:** pasa a bosque profundo, sube 2px y gira −1°, sombra más larga; la flecha avanza 4px; al presionar baja 1px. Foco: contorno bosque de 3px con separación de 3px (amarillo sobre oscuro).
- **Light:** fondo blanco con texto bosque, hover lima suave. **Small:** alto 44px, 1rem, en la navegación y dentro de fichas. **Disabled:** opacidad 0.55, sin movimiento.
- **Enlace a mano:** alternativa secundaria en Patrick Hand bosque con subrayado ondulado verde de 2px que se oscurece a bosque en hover.

### Chips
- **Style:** píldora blanca con borde bosque de 2.5px, texto Patrick Hand bosque (hand-chip), alto mínimo 44–46px.
- **State:** seleccionado invierte a fondo bosque y texto blanco; hover lima suave.

### Cards / Containers
- **Ficha de jornada:** blanca, 8px, sombra polaroid, girada con `--r`; con `--lift` se endereza y sube 6px en hover. Etiqueta en la esquina superior izquierda (bosque, borde blanco 3px, 10px, girada −4°, ícono de línea), título en display con la segunda parte en bosque, fecha·hora·distrito sobre la franja amarilla en display tabular, y estado en la esquina superior derecha: píldora display 0.85rem con borde blanco, girada 5°: abierta (verde sello), últimos cupos (rojo), cerrada (noche), ya pasó (gris pasado).
- **Banda clara:** papel a todo el ancho con borde rasgado arriba y abajo; títulos en variante de tinta.
- **Banda bosque:** bosque a todo el ancho, texto blanco, strong amarillo, foco amarillo.
- **Hoja de papel:** papel, 4px, sombra de hoja, padding clamp(24px…52px); aloja el formulario y la hoja lateral de pasos.
- **Nota con cinta:** blanca, 4px, girada levemente, con cinta raster; misión y visión.
- **Pregunta:** blanca, 6px, sombra card, girada con `--r`; resumen en display, flecha que gira al abrir.
- **Sello de acreditación (Nosotros):** blanco, 12px, borde bosque discontinuo de 2.5px, padding 20px 22px, girado con `--r`; a la izquierda la baldosa de logo de la entidad a 72px (SENAJU, Municipalidad de Lima) con filete de logo, a la derecha el texto con la entidad en strong bosque.
- **Baldosas del respaldo (portada):** en la línea de respaldo del hero, los logos de SENAJU y Municipalidad de Lima como baldosas blancas de 56px, 12px, sombra card, separadas 8px, antes del texto «Acreditados por…».
- **Ficha de la cinta de aliados (portada y Nosotros):** blanca, 14px, sombra card, alto mínimo 88px, padding 12px 24px 12px 12px; dentro, el logo de perfil del aliado como baldosa de 64px a 12px con filete de logo (a color, `object-fit: cover`) y su nombre en Montserrat 700 bosque; sin logo, solo el nombre con padding simétrico de 24px. Las fichas no giran: van en una sola fila que desliza. Es el único tratamiento de aliado del sitio.

### Inputs / Fields
- **Style:** fondo blanco, borde de 2px salvia, 10px, alto mínimo 50px, Poppins 1rem; etiqueta Poppins 600 encima, pista en gris lápiz (caption), placeholder en gris pasado.
- **Focus:** borde bosque y halo verde de 4px al 45%; hover ya oscurece el borde a bosque.
- **Error:** borde rojo-error y mensaje rojo-error 600 bajo el campo; error general en caja rosa-error de 10px.
- **Opciones grandes:** tarjetas radio blancas de 12px que al marcarse pasan a borde bosque con fondo lima suave. Aviso de apoderado: lima suave, 12px, borde verde discontinuo. Checkbox y radio nativos con acento bosque.

### Navigation
Logo de 48px más la firma en Montserrat espaciada a la izquierda; enlaces en Patrick Hand 1.5rem bosque con subrayado ondulado en hover y en la página actual; botón pequeño «Postula» al final. Bajo 860px, un botón circular bosque de 50px abre un panel de papel con sombra lift, enlaces a mano separados por líneas punteadas lima y el botón principal a todo el ancho.

### Barra superior
Cabecera fija a todo el ancho. Arriba de la página es transparente y deja ver el papel; en hover, con foco dentro o tras 24px de scroll toma fondo lima al 94% con desenfoque, filete bosque al 12% y sombra **Barra**, y al bajar estrecha su padding de 18px a 10px. Transición de 300ms con la curva ease-out.

### Carrusel de momentos
Banner a todo el ancho justo después del hero, sin título visible. Cada diapositiva tiene tres capas: el fondo es la misma foto (pedida a 480px) desenfocada 38px con saturación 1.25 y brillo 0.8, desbordada 60px para que el desenfoque no deje bordes; encima la sombra degradada noche; y al frente la foto completa, sin recortar, en un marco blanco sin radio ni cinta (padding clamp(10px, 1vw, 14px), girado 2°, alto 70% de la diapositiva, alineado a la derecha del contenedor). La razón es material: las fotos de origen son de 1080px, así que el desenfoque llena el ancho sin recortarlas ni mostrarlas blandas. Columna de texto a la izquierda: sticker de línea, título display con contorno bosque, cuerpo en Poppins blanco con sombra de texto suave (máx. 46ch) y fecha en Montserrat 600 amarillo con ícono de calendario.
- **Controles:** fila al pie dentro del contenedor. Puntos como pestañas (área de 30px, punto de 10px blanco al 55%) cuyo activo se estira 2.6 veces en horizontal y pasa a amarillo; botón de pausa/reproducción de 40px con contorno blanco al 70% y fondo transparente; flechas en círculo blanco (al 90%) de 58px con ícono bosque, empujadas a la derecha, que en hover pasan a amarillo y escalan 1.06. Bajo 700px las flechas bajan a 44px.
- **Teclado y lectores:** región con `aria-roledescription="carrusel"`, diapositivas «n de N», pista enfocable con flechas izquierda/derecha y foco amarillo de 3px hacia dentro.

### Polaroid
El objeto firma. Marco blanco con más margen abajo, foto con aspect-ratio propio sobre fondo lima borde mientras carga, pie en Patrick Hand noche; sostenida por cinta (tape.webp, −4°, arriba al centro) o clip (clip.webp, arriba a la derecha). Girada con `--r`; con `--lift` sube 8px, escala 1.02 y conserva un 30% del giro en hover (450ms). Las fotos se piden a calidad 88 con anchos de 1×, 1.5× y 2× hasta el ancho de la fuente, nunca más allá, para que el marco nunca muestre una foto blanda.

### Sticker
Bosque con texto blanco en Patrick Hand, borde blanco de 4px, 14px, girado; variantes lima (verde sello) y sol (amarillo), ambas con texto noche. Línea de voluntariado, burbuja de Buki, comisiones y atajos tipo «¿qué hacemos?». Stickers y etiquetas se menean en hover (500ms, −4° / +3°).

### Garabatos y Buki
Onda verde, rayitas amarillas, corazón rojo y destello dibujados como SVG en currentColor, posicionados en absoluto y sin eventos. Buki es un PNG recortado con drop-shadow, girado unos grados, que acompaña el collage, los requisitos, la postulación y las preguntas.

## Do's and Don'ts

### Do:
- **Do** poner toda foto real dentro de una polaroid blanca con cinta o clip, con su pie escrito a mano (o, en el banner de momentos, completa en su marco blanco con su texto al lado).
- **Do** llenar un ancho mayor que la foto con la misma foto desenfocada detrás, nunca recortándola ni ampliándola.
- **Do** mostrar logos de aliados y entidades como baldosa blanca cuadrada de 12px (56px en el respaldo, 64px en la cinta, 72px en los sellos), a color.
- **Do** dar a todo lo que se mueve solo un control de pausa y un estado quieto bajo movimiento reducido.
- **Do** girar los objetos pegados entre −6° y +6° con `--r` y dejar rectos formularios y párrafos.
- **Do** alternar las secciones entre lima, banda clara con borde rasgado y banda bosque, y poner el borde rasgado bosque (`.dark--torn`) a toda banda bosque que siga al lima.
- **Do** usar el título blanco con contorno bosque sobre lima y bosque, y la variante de tinta con resaltado de marcador sobre papel claro.
- **Do** marcar fecha y hora de jornada sobre la franja amarilla y el estado de cupos como píldora con borde blanco en la esquina.
- **Do** usar los archivos raster de cinta, clip, papel y borde rasgado en vez de imitarlos con CSS.
- **Do** mantener sombras difusas en dos capas y todo movimiento condicionado a movimiento no reducido, con el contenido visible por defecto.
- **Do** elegir tamaños de la escala de Typography; si un valor no está ahí, es deriva.

### Don't:
- **Don't** usar fotos nítidas a sangre con overlay oscuro ni grillas de tarjetas con ícono al estilo ONG genérica; el fondo desenfocado es exclusivo del banner de momentos.
- **Don't** volver a las tiras de texto de 3px para aliados ni mostrar un aliado de dos formas distintas.
- **Don't** poner texto verde, verde sello o amarillo sobre lima, papel o blanco.
- **Don't** poner etiquetas pequeñas en mayúsculas sobre los títulos; la etiqueta de jornada va como sticker en la esquina de la ficha.
- **Don't** usar sombras duras desplazadas sin desenfoque.
- **Don't** escribir párrafos largos en Patrick Hand ni titulares en Poppins.
- **Don't** usar rojo corazón para errores ni rojo-error como decoración.
- **Don't** pintar secciones con un color distinto de lima, papel claro o bosque.
