// Datos editables del sitio. La comisión de Marketing cambia aquí la convocatoria y los enlaces.

export const site = {
  nombre: 'Buscando un Cambio',
  sigla: 'BUC',
  lema: 'Todos tenemos un corazón verde',
  descripcion:
    'Voluntariado juvenil en Lima: jornadas animalistas, ambientales y sociales cada fin de semana. No necesitas experiencia previa.',
  contacto: {
    whatsapp: '51933040081',
    telefonoVisible: '933 040 081',
    email: 'buscandouncambio.pe@gmail.com',
    ciudad: 'Lima, Perú',
  },
  redes: {
    instagram: 'https://www.instagram.com/buscandouncambio.pe/',
    facebook: 'https://www.facebook.com/p/Buscando-un-cambio-100082698735454/',
    tiktok: '', // PENDIENTE: pegar la URL de TikTok cuando el cliente confirme el usuario (vacío = se oculta)
    linkedin: 'https://www.linkedin.com/company/buscando-un-cambio/',
    canalWhatsapp: 'https://whatsapp.com/channel/0029VaeNSN38fewrLECmzZ3G',
  },
  acreditaciones: ['SENAJU', 'Municipalidad de Lima'],
};

export const convocatoria = {
  // true = el formulario de /postula acepta envíos. false = muestra el aviso de convocatoria cerrada.
  abierta: true,
  nombre: 'Convocatoria «Buscando buccitos de corazón»',
  // Texto corto para el hero y la página de postulación. Dejar vacío si no hay fecha de cierre.
  cierre: '',
};

export const formulario = {
  // Servicio que recibe las postulaciones (el sitio es estático, sin servidor propio).
  // Formspree: crear un formulario en https://formspree.io y pegar aquí su endpoint, p. ej. 'https://formspree.io/f/abcdwxyz'.
  // Mientras esté vacío, el formulario muestra cómo postular por WhatsApp en vez de enviar.
  endpoint: '',
};

export const lineas = [
  {
    id: 'animalista',
    nombre: 'Animalista',
    resumen: 'Domingos en albergues de animales rescatados.',
    actividades: ['Baño y cepillado de los perritos', 'Alimentación y limpieza del albergue', 'Orden de almacenes y donativos', 'Acompañamiento y mucho cariño'],
    lugares: 'Villa Panamericana (VES), Ventanilla – Pachacútec, Escuadrón 4 Patas, Patitas con Futuro',
  },
  {
    id: 'ambiental',
    nombre: 'Ambiental',
    resumen: 'Playas, ríos y lomas de Lima más limpios.',
    actividades: ['Limpieza de playas y ríos', 'Arborizaciones', 'Lomas de Ancón', 'Ferias y campañas de reciclaje'],
    lugares: 'Playa Márquez (Callao), Las Conchitas (Ancón), Chorrillos, ríos Chillón y Rímac',
  },
  {
    id: 'social',
    nombre: 'Social',
    resumen: 'Comunidades, colectas y fechas que importan.',
    actividades: ['Chocolatadas y Navidad comunitaria', 'Ollas comunes', 'Colectas con Liga Contra el Cáncer y Teletón', 'Talleres y webinars'],
    lugares: 'Laderas de Chillón, comunidades aliadas y campañas en toda Lima',
  },
] as const;

export type LineaId = (typeof lineas)[number]['id'];
