# Buscando un Cambio (BUC): guía de marca

> Extracción hecha el **2026-10-15** a partir de Instagram (@buscandouncambio.pe: 511 posts, 8 destacadas), Facebook y Linktree. LinkedIn quedó pendiente (§10).
> Este documento es la base para diseñar la web. **Todavía no hay web.** Los colores y las tipografías están listos en `tokens.css` y `tokens.json`.

---

## 1. Identidad

**Qué es.** Organización juvenil de voluntariado con sede en Lima, Perú, con tres líneas: **ambiental, animalista y social**. Se presenta como "BUC PERÚ | voluntariado 🇵🇪💚". En Facebook figura como *Organización no gubernamental (ONG)*.

**A quién sirve.**
- **Voluntarios:** jóvenes de Lima, sobre todo universitarios y escolares de los últimos años. Admiten menores desde los 15 años con autorización de padre, madre o apoderado. Se llaman a sí mismos **"buccitos"**.
- **Beneficiarios:** albergues de animales rescatados, playas, ríos y lomas de Lima y Callao, comunidades vulnerables (chocolatadas, ollas comunes, Navidad en Laderas de Chillón) y campañas solidarias (Liga Contra el Cáncer, Fundación Peruana de Cáncer, Teletón).
- **Aliados:** otras organizaciones juveniles, municipalidades, universidades y medios.

**Propuesta.** "Transformar el amor en acción": voluntariado presencial los fines de semana, sin experiencia previa, en una comunidad que se vive como familia.

**Lemas (textuales):**
- **"Todos tenemos un corazón verde"** (lema principal, en la bio y en la misión).
- "¡Sé parte del cambio!" / "Sé parte del cambio. Sé parte de BUC."
- "Amor en acción" · "Todo es posible" · "voluntario de corazón" (en el polo)
- "Una pequeña acción hace un gran cambio" · "¡Juntos somos más fuertes!"

**Misión (renovada en julio de 2024, post_314):**
> En 'Buscando un Cambio' nos dedicamos a promover la conciencia ambiental, el bienestar animal y la justicia social a través de actividades educativas y prácticas. Trabajamos para empoderar a las comunidades y fomentar un cambio positivo, creando un futuro más sostenible y equitativo para todos. Buscamos la participación activa de jóvenes en la protección del medio ambiente, el cuidado de animales en situación de vulnerabilidad, y el apoyo a comunidades necesitadas.

**Visión:**
> Ser una organización líder en la promoción de la conciencia ambiental y social en Perú, alcanzando cada vez más comunidades y convirtiéndonos en un referente de cambio positivo a nivel nacional. Aspiramos a educar e inspirar a las personas para que se conviertan en agentes de cambio, comprometidos con la protección del medio ambiente, el respeto por los animales y la solidaridad social.

**Valores:** perseverancia, respeto, amor, empatía y compromiso.

**Historia y fechas:**
| Fecha | Hito | Fuente |
|---|---|---|
| 26-nov-2021 | Primer post (el sello). La fundadora, Hillary, cuenta en 2022 que "el 26 de noviembre decidí llevar en pie este proyecto" | post_511, post_408 |
| dic-2021 | "¿Quiénes somos?", visión y misión originales; se abre el Linktree | post_510, post_509 |
| 28-feb-2022 | Inscripción en **SENAJU** (Secretaría Nacional de la Juventud). La bio dice "Acreditados por @senajuperu y @munlima" | post_476 |
| 2022 | Muchas alianzas con otras organizaciones juveniles (Girl Up, Help U, Olas de Ayuda, Inkill Warmi, Grin Siti…) | post_465–484 |
| 27-nov-2022 | Primer aniversario | post_408 |
| jul-2024 | Misión, visión y valores renovados | post_314 |
| 2-ago-2025 | Presentan a la mascota **Buki** (zorro), nombre elegido por votación | post_227, 232 |
| 26-sep-2025 | Celebran "**4 años**" (#4AñosBUC). ⚠ No coincide con el inicio de nov-2021; ver §10 | post_200, 201 |
| 2026 | Mayor crecimiento: 155 posts y 443 likes de media; convocatorias 2026-I y 2026-II; serie "Propuestas en Verde" (Elecciones 2026) | — |

**Cifras (15-oct-2026):** Instagram 20,9 mil seguidores · 512 posts (511 accesibles) · 270 seguidos. Facebook 306 seguidores. La media de likes por post pasó de 60 (2021) a 78 (2022), 87 (2023), 121 (2024), 238 (2025) y 443 (2026).

---

## 2. Logo

**El sello.** Disco verde con aro blanco, el texto "BUSCANDO UN CAMBIO" en arco arriba, "VOLUNTARIADO" en arco abajo y un globo terráqueo blanco (Europa, África y Asia) en el centro. Es el mismo desde el primer post (nov-2021); no hubo rediseño.

| Archivo | Qué es | Uso |
|---|---|---|
| `logo/logo_buc_verde.svg` / `_2048.png` | **Reconstrucción vectorial**, versión oficial verde #43D029 | Cabecera, favicon grande, redes |
| `logo/logo_buc_bosque.svg` / `_2048.png` | Disco verde bosque #185C0C | Fondos claros o lima, donde el verde logo vibra demasiado |
| `logo/logo_buc_blanco.svg` / `_2048.png` | Solo trazos blancos, sin disco | Sobre fotos y fondos oscuros (como en los posts 2025–26) |
| `logo/logo_buc_negro.svg` / `_2048.png` | Una tinta, negro #161616 | Impresión, sellos, documentos |
| `logo/isotipo_buc_verde.svg`, `isotipo_buc_bosque.svg` | Solo el globo | Favicon y avatar pequeño (el texto del sello no se lee por debajo de unos 64 px) |
| `logo/favicon.ico` (16/32/48), `favicon_512.png`, `apple-touch-icon_180.png` | Generados del isotipo | `<head>` de la web |
| `logo/logo_repo_771x771.jpg` | **El mejor original disponible** (JPG 771×771, ya estaba en `assets/images/logo.jpg`) | Solo como referencia |

**Cómo se hizo el vector.** El aro es un círculo geométrico exacto. Los textos están en Montserrat Bold convertida a contornos y colocada letra por letra en los ángulos medidos sobre el original. El globo está trazado del bitmap (escalado ×8, suavizado y vectorizado). La comparación con el original está en §8 y el resultado es fiel, pero **no es el archivo fuente del cliente**.

**Problemas de calidad del original:**
- El mayor tamaño disponible es un JPG de 771 px (Facebook muestra 960 px), con compresión visible y el aro cortado por los bordes del cuadrado.
- El original parece ligeramente estirado: el texto de arriba no está a radio constante. El vector lo corrige.
- El borde de los continentes es irregular en el original. El trazo lo hereda, suavizado.
- La tipografía del original parece Montserrat SemiBold/Bold con tracking amplio, pero no está confirmada.
- No hay versión horizontal (logo y nombre en línea). Para la cabecera de la web se puede componer isotipo + "Buscando un Cambio" en Montserrat 600, pero es una propuesta, no algo existente.

**Usos observados.**
- El sello blanco va en la esquina inferior derecha de casi todas las piezas desde 2025 (marca de agua).
- La firma "◉ BUSCANDO UN CAMBIO" (sello pequeño + Montserrat en mayúsculas) va en la cabecera o el pie de los slides.
- Estampado en el polo lima: "BUSCANDO UN CAMBIO / voluntario de corazón", en tipografía display redondeada.

**Mascota: Buki.** Zorro naranja ilustrado con polo verde de BUC; aparece desde ago-2025 (post_227, 232, 201, 205, 211, 214, 230, 231 y el reel post_001). **Buccita** es una serie de muñecas coleccionables (Animalista, Ambiental, Social y Comunitaria) en post_262. Son recursos valiosos para la web (estados vacíos, 404, sección "únete"), pero hacen falta los archivos fuente (§10).

---

## 3. Paleta de color

Muestra visual: `paleta.png`. Los colores se midieron por muestreo de píxeles en los posts de 2025–2026 (sistema vigente).

| Token | HEX | Rol | Origen |
|---|---|---|---|
| `--buc-verde-logo` | **#43D029** | Sello / logo | disco del logo |
| `--buc-verde` | **#84CC2C** | Acento: contorno de títulos ("ANIMALISTA"), garabatos, "recordamos nuestro" | posts 2026 |
| `--buc-lima` | **#A6D86C** | Fondos "papel", polos, tarjetas | slides de papel arrugado |
| `--buc-bosque` | **#185C0C** | Texto sobre lima, stickers "¿Qué hicimos?", botones | stickers |
| `--buc-amarillo` | **#FCDC62** | Fechas, horarios, "Domingo 13 de setiembre" | posts 2026 |
| `--buc-rojo` | **#E84040** | Corazones dibujados, alertas | stickers |
| `--buc-noche` | **#161616** | Fondos oscuros y overlay de fotos | overlays |
| `--buc-papel` | **#F7F5EE** | Marcos polaroid, fondo claro de la web | polaroids |
| `--buc-blanco` | #FFFFFF | Títulos sobre foto | — |

Derivados para UI que no aparecen tal cual en Instagram: `--buc-bosque-700 #12470A` (hover), `--buc-lima-100 #EEF7E2`, `--buc-lima-300 #CBE9A6` y `--buc-gris-600 #4A4A4A`.

**Contraste WCAG 2.x (texto).** AA normal ≥ 4,5; AA grande (≥ 24 px, o ≥ 18,66 px en negrita) ≥ 3; AAA ≥ 7.

| Texto / Fondo | Ratio | Resultado |
|---|---|---|
| Blanco sobre Noche | 18,10 | AAA ✅ |
| Lima sobre Noche | 10,91 | AAA ✅ |
| Verde acento sobre Noche | 9,18 | AAA ✅ |
| Amarillo sobre Noche | 13,40 | AAA ✅ |
| Verde logo sobre Noche | 8,87 | AAA ✅ |
| Bosque sobre Blanco | 8,16 | AAA ✅ |
| Bosque sobre Papel | 7,48 | AAA ✅ |
| Bosque sobre Lima-100 | 7,39 | AAA ✅ |
| Blanco sobre Bosque (botón) | 8,16 | AAA ✅ |
| Gris-600 sobre Blanco | 8,86 | AAA ✅ |
| Noche sobre Lima | 10,91 | AAA ✅ |
| **Bosque sobre Lima** | 4,92 | AA ✅ (justo; no usar en tamaños muy pequeños) |
| Rojo sobre Noche | 4,51 | AA ✅ (límite) |
| Rojo sobre Blanco | 4,01 | Solo AA grande |
| Verde acento sobre Bosque | 4,14 | Solo AA grande |
| ❌ Blanco sobre Verde logo | 2,04 | **No pasa**: el texto blanco del sello es logo, no texto de UI |
| ❌ Blanco sobre Lima | 1,66 | **No pasa**: en Instagram lo usan (misión 2024 en blanco sobre lima); en la web, no |
| ❌ Verde / lima / amarillo sobre blanco | 1,4–2,0 | **No pasa**: esos tonos solo van sobre oscuro |

**Reglas para la web:** los verdes claros y el amarillo van sobre fondo oscuro o como superficie. Sobre claro se escribe en Bosque o Noche. Los botones son Bosque con texto blanco.

**Paletas antiguas (para no confundirse):** 2021 verde medio #70C574 plano; 2022 lima con ondas y crema **#EDE7B5**; 2023 lima apagado #BFD38C sobre papel; 2024 lima y amarillo verdoso #DDDA8B. Las piezas en rojo y blanco (FPC, Liga Contra el Cáncer, "Perú en la encrucijada", "Hacer Patria") son **de aliados** y no forman parte de la paleta BUC.

---

## 4. Tipografía

Las fuentes originales son de Canva y no tienen licencia web conocida. Las equivalentes de Google Fonts se eligieron comparando el texto renderizado lado a lado con recortes de los posts.

| Rol | En los posts | Equivalente Google Fonts | Token |
|---|---|---|---|
| **Display** (títulos en mayúsculas: "VOLUNTARIADO ANIMALISTA", "INCENDIOS FORESTALES…") | Sans redondeada muy gruesa y algo condensada (parece *Bobby Jones Soft*, de Canva) | **Sour Gummy 900**; alternativa **Titan One** | `--font-display` |
| **Manuscrita** ("recordamos nuestro", "¡Gracias por ser Parte!", "Domingo 13 de setiembre", "BUC TE INFORMA", "¿Qué hicimos?") | Rotulador redondo, estrecho | **Patrick Hand**; alternativa **Gochi Hand** | `--font-hand` |
| **Cuerpo** (textos largos de artículos, testimonios en cursiva negrita) | Poppins (forma de *a*, *g* y cursiva confirmadas) | **Poppins** 400/600/700, 700 cursiva | `--font-body` |
| **Firma / logo** ("BUSCANDO UN CAMBIO" en pies y arcos del sello) | Montserrat | **Montserrat** 500–700 | `--font-brand` |

Las fuentes de 2022–2023 (serif *slab* de 2021 y display finas tipo *Bebas/Glacial*) quedaron en desuso; no recomendarlas.

Combinación recomendada para la web: títulos en Sour Gummy 900 en mayúsculas con `line-height: 1.05`; antetítulos y fechas en Patrick Hand; texto en Poppins 400, 16–18 px, interlineado 1,6.

---

## 5. Recursos gráficos recurrentes

**Sistema vigente (2026).** Las referencias son post_001 a post_150.
1. **Foto oscurecida + título en dos tonos:** foto a sangre con degradado a negro abajo. Primera línea en blanco ("VOLUNTARIADO") y segunda en **verde acento con contorno** ("ANIMALISTA" / "AMBIENTAL" / "SOCIAL" / "EDUCATIVO"). Fecha manuscrita debajo. Ejemplos: post_007, 013, 028, 036.
2. **"recordamos nuestro…"** en manuscrita verde sobre el título, y **"¡Gracias por ser Parte!"** con la fecha en amarillo al pie. Es la plantilla de crónica posterior a cada jornada (post_006, 011, 033).
3. **Recortes tipo sticker:** personas o perros recortados con **borde blanco grueso** que se salen del marco.
4. **Garabatos a mano:** líneas onduladas verdes en los bordes, rayitas de énfasis `!!` en verde o amarillo, **corazones rojos**, destellos y estrellitas, coronas, signos `??` y flechas punteadas ("y mucho mássss…").
5. **Slide "papel lima arrugado":** fondo de papel verde con **polaroids** sujetas con cinta o clip, perritos recortados con **duotono rosa/cian**, sticker "¿Qué hicimos?" en Bosque y testimonio entre comillas firmado "-Buccito" (post_006 slides 2–3).
6. **Slide de cierre / CTA:** "¿TE SUMAS A TRANSFORMAR **AMOR EN ACCIÓN** AQUÍ EN BUSCANDO UN CAMBIO", chip Bosque "**TODO ES POSIBLE**", íconos de Facebook, TikTok, LinkedIn e Instagram y un perrito recortado (post_006, 141).
7. **Editorial "BUC TE INFORMA" / "BUC TE RECOMIENDA" / "Efemérides":** línea blanca horizontal + etiqueta manuscrita arriba a la derecha, título display, "Escrito por:" con la firma del voluntario, cuerpo en Poppins a dos columnas justificado con negritas, "FUENTE: …" en vertical a la derecha y pie "◉ BUSCANDO UN CAMBIO" (post_002, 005, 009).
8. **Slide de contacto:** íconos y datos (Instagram, Facebook, LinkedIn, 933 040 081) sobre foto oscurecida (post_005, 009).
9. **Acróstico "B-U-C-C-I-T-O":** letra amarilla gigante + frase ("**B**ondad que se convierte en acción", "**U**nidos por los animales…") sobre retratos de voluntarios (post_124).
10. **Series temáticas:** "Propuestas en Verde" (Elecciones 2026, retratos en duotono verde de candidatos; post_075–105), "Calendario de [mes]", "Convocatoria", "Rifa BUC", "¿Qué buccito eres?".

**Sistema 2025** (post_150–274): foto con **etiqueta rectangular verde brillante** ("GRACIAS POR SER PARTE DE LA LIMPIEZA DE PLAYA"), firma "BUC x [aliado]" y la mascota Buki.
**2022–2024:** ondas curvas verdes en las esquinas, fotos en B/N con acentos verdes y fondos de papel lima y crema.

**Para la web:** reutilizar los puntos 1, 3, 4, 5 y 9 como lenguaje visual (fotos con overlay y título en dos tonos, recortes con borde blanco, polaroids y garabatos SVG). **Hay que redibujar los garabatos en SVG**; no existen como archivos.

---

## 6. Voz y tono

**Cómo escriben.** Cálido, cercano y entusiasta. Tutean siempre ("tú") y hablan en primera persona del plural ("nosotros", "juntos"). Usan mucho la exclamación, emojis al inicio de línea y llamadas a la acción directas. Mezclan dos registros:
- **Comunidad / convocatoria:** emotivo, juvenil, con humor ("Estoy cansada pero feliz :D", "¡¡Amamosss!! <3", "SORPRESAAAAA 🐾💚"). Así hablan los "buccitos".
- **Editorial (BUC te informa):** informativo, con datos y fuente citada, tono de denuncia constructiva ("Hacemos un llamado a las autoridades…", "¡No basta con apagar el fuego, hay que prevenirlo!").

**Palabras que repiten** (frecuencia en 511 captions): *cambio* (225), *parte* (146), *gracias* (120), *voluntariado* (110), *albergue* (96), *domingo* (87), *juntos* (86), *jornada* (85), *amor* (84), *acción* (83), *planeta* (74), *playa* (66), *buccitos* (62), *súmate* (50), *corazón* (50), *impacto* (53), *compromiso* (50), *te invitamos* (50).
**Frases recurrentes:** "Sé parte del cambio" · "Súmate a una jornada de voluntariado…" · "Te invitamos a participar" · "¡Gracias por ser parte!" · "todos tenemos un corazón verde" · "transformar realidades".
**Emojis firma:** 💚 (417 usos) ✨ 🐾 📍 🌱 🐶 🌍 🙌 🤝 📅 ⏰ 🔗.
**Hashtags:** #BuscandoUnCambio (88) #Voluntariado #BUC #CuidemosElPlaneta #VoluntariadoAnimalista #LimpiezaDePlayas #AmorAnimal #AdoptaNoCompres.

**Ejemplos reales:**
> "No necesitas experiencia previa. Solo necesitas las ganas de participar y hacer la diferencia." (post_019, el post con más likes: 4.226)

> "Ser buccito/a es convertir el amor por los animales, el cuidado del ambiente y el servicio a la sociedad en acciones reales." (post_124)

> "Ser Buccito no es solo voluntariar 🤍 Es compartir, aprender, reír, cansarse y volver con el corazón más grande." (post_141)

> "Hoy celebramos 4 años de amor, esfuerzo y compromiso… porque todos tenemos un corazón verde, y cuando late al mismo tiempo, el cambio se vuelve imparable. 💚✨" (post_201)

**Estructura de una convocatoria de jornada** (plantilla real, post_008): título con emoji, presentación de 1–2 líneas, bloque de datos con emoji por línea (📅 Fecha · 📍 Lugar · ⏰ Encuentro · 🚐 Salida · 🐾 Inicio · 🏁 Cierre), "¿Quiénes pueden participar?", nota de menores, 🔗 formulario y un cierre motivador.

**Para la web:** mantener el tuteo, la calidez y el 💚, pero con menos exclamaciones y emojis que en Instagram. Usar "buccito/a" para la comunidad y frases cortas y activas.

---

## 7. Servicios y contenido (materia prima para la web)

**Líneas de voluntariado:**
- **Animalista** (la que más interés genera; 8 de los 10 posts con más likes son convocatorias animalistas): jornadas de domingo en albergues como Villa Panamericana (VES), Ventanilla / Puerto Pachacútec, Escuadrón 4 Patas, Palacio Peludo, Patitas con Futuro, San Francisco y Marlene y sus angelitos. Actividades: baño, alimentación, limpieza, orden de almacenes, acompañamiento, colectas de alimento y campañas de adopción ("Adopta, no compres").
- **Ambiental:** limpieza de playas (Márquez–Callao, Las Conchitas–Ancón, Chorrillos), de ríos (Chillón, Rímac), arborizaciones, Lomas de Ancón, Hora del Planeta, ferias y ecoferias.
- **Social / comunitario:** chocolatadas, Navidad en Laderas de Chillón, ollas comunes, colectas con Liga Contra el Cáncer, FPC ("Ponle Corazón") y Teletón, Día del Voluntariado.
- **Educativo:** talleres comunitarios (p. ej. MAGIS), webinars ("Protección animal: del amor a la acción", con LUC), charlas en universidades.
- **Contenido editorial:** "BUC te informa" (artículos firmados por voluntarios), "Efemérides" ambientales y "Propuestas en Verde" (análisis de planes de gobierno, Elecciones 2026).

**Cómo unirse** (FAQ real, post_122):
- Convocatorias por semestre (2026-I, 2026-II) mediante formulario (Google Forms).
- **Duración mínima: 6 meses** como voluntario activo con asistencia constante. Si no se cumple, solo se certifican las actividades puntuales (participación externa).
- Solo **Lima presencial** (fines de semana). No es posible postular desde provincia.
- El CV no es obligatorio: valen actividades extracurriculares.
- Menores desde 15 años con autorización firmada.
- **Comisiones internas:** Líderes de voluntariado · Marketing y audiovisuales · Gestión e impacto social (post_017). Hay una **directiva** (post_267, 400, 442).
- Las jornadas abiertas también admiten participantes externos.

**Beneficios de ser buccito** (post_141): conexión, conocer "gente linda", "terapia gratis", volverte protagonista, aprender (trabajo en equipo, liderazgo, organización, creatividad, comunicación asertiva, resolución de conflictos), certificados.

**Aliados mencionados** (coautores y menciones): Escuadrón 4 Patas, LUC – Líderes Unidos por un Cambio, Tunva Perú, SSAMI, voluntarios.pe, Acompáñame Voluntariado, United Peruvian Youth, Red Internacional Latam, Lomas de Ancón, Impulsa DH, Diálogos Humanos, Fundación Peruana de Cáncer, Liga Contra el Cáncer, Somos Amalia, OIIDE, Perú Te Quiero Limpio (PTQL), UPN, Municipalidad de Chorrillos y Arrastra. Acreditación: **SENAJU** y **Municipalidad de Lima**.

**Contacto:**
- Teléfono / WhatsApp: **933 040 081**
- Email: **buscandouncambio.pe@gmail.com**
- Instagram [@buscandouncambio.pe](https://www.instagram.com/buscandouncambio.pe/) · Facebook "Buscando un cambio" · TikTok y LinkedIn (vía Linktree)
- Canal de difusión de WhatsApp: whatsapp.com/channel/0029VaeNSN38fewrLECmzZ3G
- Linktree: linktr.ee/buscandouncambio.pe
- Formularios de la bio: "CONVO GENERAL", "CONVO MARK Y AUD" y "CONVO LÍDERES DE VOL" (Google Forms; cambian cada convocatoria, así que no conviene incrustarlos fijos).

**Testimonios disponibles.** Solo citas cortas firmadas como "-Buccito" dentro de los slides (p. ej. "Ha sido una gran experiencia poder conocer y ayudar en el albergue… Terminé el voluntariado muy feliz", post_006). **No hay reseñas** en Facebook (0 opiniones) y no hay testimonios con nombre y autorización (§10).

**Datos de impacto.** Ningún post consolida cifras (personas voluntarias, kg de residuos, animales atendidos). Habría que pedirlas (§10). El único dato publicado es "¡Superamos los 1000 postulantes en nuestra convocatoria 2026 - II!" (post_015).

Todos los textos de los posts, con fecha y archivos: `meta/captions.json`.

---

## 8. Fotografía

**Qué hay.** 2.430 imágenes de posts (1.355 clasificadas automáticamente como foto o fotomontaje, 705 como pieza gráfica sobre verde y 415 como pieza oscura con overlay), 103 historias de destacadas, 45 videos y 223 fotogramas. Predominan las fotos de celular: grupos con polos lima en playas y parques, voluntarios abrazando perros en albergues, jornadas de recojo con bolsas negras, eventos en universidades y retratos en un parque frente al mar.

**Calidad.**
- **Máximo 1080 px de ancho** (lo que entrega Instagram; no hay versiones de 1440). Sirve para tarjetas y mosaicos; **queda corto para un *hero* a pantalla completa** en escritorio retina.
- La mayoría lleva **texto, stickers o logo incrustados**. Las fotos limpias son minoría.
- La luz típica es el cielo gris de Lima: tonos fríos y bajo contraste. Conviene un tratamiento común (overlay Noche o duotono verde) para unificar.
- Los videos son 720×1280, y algunos son animaciones de aliados casi estáticas.

**Lo que mejor sirve para la web** (ver `contactsheet_seleccion_web.jpg`, 55 candidatas sin texto encima):
- **Animalista (emotivas):** post_237 slides 02–10 (voluntarios con perros, albergue Patitas con Futuro). Llevan un crédito pequeño abajo que se puede recortar.
- **Ambiental:** post_250 slides 03, 04, 06 y 07 (playa, "BUC x Arrastra"), post_239_04, post_276_03 y post_276_11.
- **Comunidad / equipo:** post_276_01 (corazón con las manos, polos lima), post_276_07, post_275_12 y post_276_15.
- **Retratos:** la serie B-U-C-C-I-T-O (post_124) tiene la mejor calidad de retrato, pero con letras encima. **Pedir los originales.**
- **Fotogramas de video:** `instagram/frames/` sirve como apoyo, pero tiene menos calidad que las fotos.

**⚠ Personas y menores: autorización antes de publicar.**
- Casi todas las fotos muestran personas identificables. Antes de usarlas en la web hace falta una autorización de uso de imagen, o elegir fotos de espaldas o de grupo lejano.
- **Posibles menores:** `meta/images.json` marca con `flag` las imágenes de 70 posts cuyo texto menciona niños, colegios, Navidad, chocolatadas, Teletón, etc. Es un filtro por palabras clave y tiene falsos positivos ("pequeñas acciones"). Además, la revisión visual **confirmó menores** en post_026, 030 (portada del reel), 032, 038, 041, 139, 179, 276_02, 287 y 404, con probable presencia en los slides de post_110, 143 y 168 (voluntariado educativo y navideño), y en las destacadas "2025 pt1/pt2", "buccitos" y "2026" (eventos escolares y navideños). **No publicar** sin autorización expresa de los padres.
- post_277_03 muestra a una persona en camilla o ambiente médico (campaña oncológica): material sensible, no usar.
- No se transcribieron ni guardaron apellidos ni datos personales que solo se oyen en los videos.

---

## 9. Archivos entregados

```
brand/
├── BRAND.md                     ← este documento
├── tokens.css                   ← variables CSS (colores, fuentes, radios, sombras, espaciado)
├── tokens.json                  ← los mismos tokens + tabla de contrastes
├── paleta.png                   ← muestra visual de paleta y tipografía
├── contactsheet_posts_01..06.jpg      ← portada de cada post (511), de más reciente a más antiguo
├── contactsheet_all_01..11.jpg        ← todas las imágenes de posts (2.430)
├── contactsheet_highlights.jpg        ← imágenes fijas de destacadas (103)
├── contactsheet_frames.jpg            ← fotogramas de videos (223)
├── contactsheet_seleccion_web.jpg     ← 55 fotos candidatas para la web
├── logo/                        (14) SVG verde/bosque/blanco/negro, isotipos, PNG 2048, favicons, JPG original 771
├── instagram/
│   ├── hires/                 (2.430) post_NNN[_SS]_WxH.jpg  ← NNN 001 = más reciente
│   ├── covers/                   (45) portada de cada reel/video: post_NNN[_SS]_cover_WxH.jpg
│   ├── videos/                   (45) post_NNN[_SS]_WxH.mp4 (338 MB)
│   ├── frames/                  (223) post_NNN_fK_TTT.Ts.jpg (6 por video, sin duplicados)
│   └── highlights/                (8) portadas de destacadas (150 px, lo máximo que da IG)
│       └── stories/             (103) hlNN_<destacada>_NNN_WxH.jpg (solo imágenes fijas)
├── facebook/                    README.md + fb_cover_960x960.jpg
├── linkedin/                    README.md (pendiente: no se pudo leer)
├── meta/
│   ├── captions.json            ← 511 posts: texto, fecha (Lima), shortcode, URL, likes, aliados, archivos
│   ├── images.json              ← 2.869 registros: archivo, dimensiones, origen, descripción, flags
│   └── highlights.json          ← 439 historias de 8 destacadas (fecha, tipo, archivo si es imagen)
└── _descartadas/                (vacía; ignorada en git)
```

**Notas:**
- Tamaño total: unos **920 MB** (imágenes 477 MB + videos 338 MB). Antes de hacer commit, decidir si los videos y `hires/` van al repo, a Git LFS o a almacenamiento externo. `brand/_descartadas/` y `brand/_incoming/` ya están en `.gitignore`.
- **22 posts** de la cuadrícula son de otra cuenta (colaboraciones donde BUC es coautor: FPC, Diálogos Humanos, Liga Contra el Cáncer, etc.). Se bajaron porque aparecen en el perfil, pero su diseño **no es referencia de marca**. Están identificados con `owner` en `captions.json`.
- No se usó ninguna página de reels, así que no entró contenido del feed personal; `_descartadas/` quedó vacía.
- Las descripciones de `images.json` son **semiautomáticas** (título del post + diapositiva + tipo detectado por color). El "alt" de Instagram es pobre ("May be an image of poster…").

---

## 10. [PENDIENTE]: pedir al cliente

1. **Logo en vector original** (AI/SVG/PDF) y la fuente tipográfica del sello. El SVG entregado es una reconstrucción.
2. **Archivos de Buki y Buccita** (ilustraciones en PNG transparente o vector) y permiso de uso en la web.
3. **Fuentes de Canva** usadas (confirmar si es *Bobby Jones Soft* u otra) o visto bueno a los equivalentes Sour Gummy / Patrick Hand / Poppins.
4. **Fotos originales sin texto**, en resolución completa (celular o cámara), sobre todo retratos de la serie B-U-C-C-I-T-O, jornadas en albergues y limpiezas de playa. Idealmente 10–20 fotos horizontales para *hero* y cabeceras.
5. **Autorizaciones de uso de imagen** de las personas que aparezcan en la web, y **autorización de padres** para cualquier menor. Si no las hay, usar fotos de espaldas o grupales lejanas.
6. **Fecha de fundación oficial:** el primer post es del 26-nov-2021 (la fundadora lo confirma en 2022), pero celebraron "4 años" el 26-sep-2025. Confirmar qué fecha usar.
7. **Razón social, RUC y tipo de entidad** (¿asociación sin fines de lucro inscrita? ¿solo registro SENAJU?) y el número de registro SENAJU / Municipalidad de Lima, si quieren mostrarlo.
8. **Cifras de impacto** consolidadas: voluntarios activos, jornadas realizadas, kg de residuos, animales atendidos, comunidades, aliados.
9. **Testimonios** con nombre (o nombre de pila), foto y autorización.
10. **LinkedIn:** el texto de "Acerca de" (sector, tamaño, sede, especialidades), o que alguien inicie sesión para extraerlo.
11. **Dominio y correo** para la web (¿buscandouncambio.pe?) y si mantienen Gmail como contacto público.
12. **Formularios vigentes:** los enlaces cambian cada convocatoria. Definir si la web enlaza a un formulario fijo o a una página de convocatoria que ellos actualicen.
13. **Directiva y comisiones actuales** (nombres y fotos autorizadas) si quieren una sección "Quiénes somos".
14. **Cuentas para donaciones** (Yape/Plin, si tienen) y si la web debe incluir "Dona" o solo "Únete".
15. **TikTok:** confirmar el usuario (no se revisó en esta extracción).

---

## 11. Historial de extracciones

| Fecha | Fuente | Qué se bajó | Alcance |
|---|---|---|---|
| 2026-10-15 | Instagram (API `/api/v1/media/{id}/info/` con sesión) | 511 posts: 2.430 imágenes + 45 portadas + 45 videos; textos y métricas en `captions.json` | **Del post más reciente** (DeiPal8tmQS, 15-oct-2026, post_001) **al más antiguo** (26-nov-2021, post_511). El perfil dice 512; uno no aparece en la cuadrícula (oculto o archivado) |
| 2026-10-15 | Instagram (`/api/v1/feed/reels_media/`) | 8 portadas de destacadas (150 px) + 103 imágenes fijas de historias | 439 historias en total; **no se bajaron los 336 videos** de historias |
| 2026-10-15 | Videos locales (ffmpeg) | 270 fotogramas → 223 tras quitar duplicados | 6 por video |
| 2026-10-15 | Facebook | Datos de la página + portada 960×960 | Descargas bloqueadas para facebook.com; el contenido es espejo de Instagram |
| 2026-10-15 | Linktree | Enlaces (TikTok, LinkedIn, Facebook, Instagram) | — |
| 2026-10-15 | LinkedIn | Nada | Muro de inicio de sesión |

**Para la próxima extracción incremental:** pedir solo los shortcodes nuevos posteriores a **DeiPal8tmQS** (15-oct-2026) y continuar la numeración. Como `post_001` es el más reciente, conviene renumerar todo con el mismo script o añadir los nuevos con prefijo de fecha.
