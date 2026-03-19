/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  CONTENIDO DEL SITIO — src/config/content.ts                ║
 * ║                                                              ║
 * ║  Todos los textos editables de la web están aquí.           ║
 * ║  Usa {{city}} donde quieras que aparezca la ciudad principal ║
 * ║  (se reemplaza automáticamente en tiempo de build).         ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

export const content = {

  // ── Hero ──────────────────────────────────────────────────────
  hero: {
    eyebrow:     'Empresa especializada en vaciados en {{city}}',
    h1main:      'Vaciado de Pisos y Locales',
    h1accent:    'en {{city}} y provincia de Tarragona',
    description: 'En JC Tarragona, nos encargamos del vaciado integral de pisos, locales comerciales y propiedades en toda la provincia de Tarragona. Ofrecemos un servicio rápido, profesional y discreto, adaptado a sus necesidades en el Baix Ebre, Priorat o Terra Alta.',
    badge1:      'Presupuesto en 30 minutos',
    badge2:      'Más de 15 años de experiencia',
    badge3:      'Gestión responsable de residuos',
    badge4:      'Cobertura total provincia Tarragona',
    cardStat:    '+2000',
    cardLabel:   'vaciados completados en {{city}}',
  },

  // ── Beneficios (6 tarjetas) ────────────────────────────────────
  benefits: [
    {
      icon: 'shield',
      title:       'Desokupación integral y legal',
      description: 'Gestionamos la desocupación de viviendas, cumpliendo con todas las normativas legales vigentes. Nos encargamos de todos los trámites y permisos necesarios para un proceso limpio y sin complicaciones en {{city}} y alrededores.',
    },
    {
      icon: 'clock',
      title:       'Rapidez y eficiencia garantizada',
      description: 'Recogemos muebles, electrodomésticos y otros objetos en 24-48 horas. Nuestro equipo trabaja de forma ágil y organizada para minimizar las molestias y optimizar los plazos de entrega en la zona del Camp de Tarragona.',
    },
    {
      icon: 'check',
      title:       'Gestión responsable de residuos',
      description: 'Separamos y reciclamos los materiales según su tipo, contribuyendo a la sostenibilidad ambiental. Colaboramos con gestores autorizados para asegurar una correcta eliminación de residuos en {{city}} y municipios cercanos.',
    },
    {
      icon: 'box',
      title:       'Servicio llave en mano completo',
      description: 'Nos encargamos de todo el proceso: desmontaje, carga, transporte y limpieza final. Ofrecemos un servicio integral que le libera de cualquier preocupación en {{city}}, Reus, Amposta y otras localidades del Tarragonés.',
    },
    {
      icon: 'heart',
      title:       'Atención personalizada y cercana',
      description: 'Nos adaptamos a sus horarios y necesidades específicas. Nuestro equipo se compromete a ofrecer un trato amable y profesional, escuchando atentamente sus requerimientos en {{city}} y comarca.',
    },
    {
      icon: 'users',
      title:       'Equipo experimentado y cualificado',
      description: 'Contamos con un equipo de profesionales altamente capacitados con amplia experiencia en el sector del vaciado.  Garantizamos un servicio impecable y eficiente en toda la provincia, desde Sant Carles de la Ràpita hasta Valls.',
    }
  ],

  // ── Servicios (tarjetas del inicio) ───────────────────────────
  serviceSummaries: [
    {
      slug:        'vaciado-pisos',
      nombre:      'Vaciado de pisos',
      description: '¿Necesita un servicio profesional de desocupación de viviendas en Tarragona? En JC Tarragona le ofrecemos un vaciado integral y eficiente de pisos, adaptándonos a sus necesidades específicas. Nos encargamos del desalojo completo de su piso o apartamento en la provincia de Tarragona, liberándolo para una nueva etapa.',
      features:    ['Retirada de muebles, electrodomésticos y escombros', 'Desinfección y limpieza básica post-vaciado', 'Gestión de residuos autorizada según normativa vigente', 'Amplia experiencia en vaciados de pisos antiguos y modernos.', 'Servicio urgente disponible en Tarragona capital y alrededores.'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'vaciado-locales',
      nombre:      'Vaciado de locales',
      description: 'Ofrecemos un servicio profesional de desescombro y limpieza de locales comerciales en toda la zona del Baix Ebre y el Tarragonès. JC Tarragona se encarga del vaciado integral de su local, desde oficinas hasta tiendas, garantizando eficiencia y rapidez. Desocupamos locales para reformas, alquiler o venta en Tarragona provincia.',
      features:    ['Retirada de mobiliario comercial, estanterías y equipos', 'Limpieza profunda post-vaciado', 'Desmontaje y retirada de elementos fijos (carteles, escaparates)', 'Adaptación del servicio a horarios comerciales.', 'Servicio disponible en Reus, Valls y comarcas tarraconenses.'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'recogida-muebles',
      nombre:      'Recogida de muebles',
      description: '¿Busca una solución rápida y económica para la retirada de muebles usados en Tarragona? JC Tarragona le ofrece un servicio de recogida de muebles a domicilio, con personal cualificado y vehículos adecuados. Deshágase de sus muebles viejos sin complicaciones en toda la provincia de Tarragona.',
      features:    ['Recogida de todo tipo de mobiliario (sofás, camas, armarios)', 'Desmontaje opcional de los muebles', 'Transporte seguro y eficiente', 'Opción de donación a organizaciones benéficas.', 'Servicio disponible en Altafulla, Torredembarra y municipios cercanos.'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'limpieza-diogenes',
      nombre:      'Limpieza síndrome de Diógenes',
      description: 'JC Tarragona ofrece soluciones integrales para la limpieza de viviendas afectadas por el Síndrome de Diógenes en Tarragona. Nuestro equipo especializado le brinda apoyo y profesionalidad para recuperar espacios habitables, respetando siempre la dignidad del afectado. Especialistas en desinfección profunda y recuperación de entornos afectados por acumulación en la provincia de Tarragona.',
      features:    ['Desinfección y eliminación de residuos orgánicos', 'Recuperación del espacio habitable', 'Gestión emocional y apoyo al afectado (si es necesario)', 'Trabajo con sensibilidad y confidencialidad.', 'Servicio disponible bajo prescripción médica o autorización judicial.'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'limpieza-post-vaciado',
      nombre:      'Limpieza post vaciado',
      description: 'Después de un vaciado, necesita una limpieza a fondo para dejar la propiedad lista para su nuevo uso en Tarragona? JC Tarragona le proporciona servicios profesionales de limpieza post-vaciado, eliminando suciedad y olores persistentes. Recuperamos el brillo y la higiene de su vivienda tras el proceso de desocupación en toda la comarca del Camp de Tarragona.',
      features:    ['Limpieza profunda de suelos, paredes y techos', 'Eliminación de manchas y olores', 'Desinfección completa', 'Preparación de la propiedad para alquiler o venta.', 'Servicio disponible con cita previa en Vila-seca, Cambrils y alrededores.'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'pintura-express',
      nombre:      'Pintura express',
      description: '¿Necesita una reforma rápida y económica? JC Tarragona le ofrece servicios de pintura express para pisos y locales en Tarragona, con resultados profesionales y precios competitivos. Revitalice su vivienda o negocio con un cambio de color rápido y eficiente en toda la provincia de Tarragona.',
      features:    ['Utilización de pinturas de alta calidad', 'Personal cualificado y experimentado', 'Trabajos rápidos y limpios', 'Adaptación a sus gustos y preferencias.', 'Servicio disponible para comunidades de vecinos y particulares.'],
      featured:    true,
      ctaPage:     true,
    }
  ],

  // ── Textos de secciones ───────────────────────────────────────
  sections: {
    beneficiosSub:  'Más de 10 años de experiencia. Equipo propio, sin subcontratas y con gestión de residuos certificada.',
    serviciosSub:   'Todo lo que necesitas para dejar el inmueble listo.',
    testimoniosSub: 'Más de 500 familias y empresas han confiado en nosotros.',
    zonaComarca:    'de la comarca',
    zonaBarrios:    'También en los barrios de {{city}}:',
    preciosSub:     'Presupuesto final gratuito y sin compromiso. Estos precios son orientativos — el coste real depende del volumen y accesibilidad.',
    preciosNota:    'Precios orientativos para {{city}}. El presupuesto definitivo se calcula según el volumen real, accesibilidad y distancia al punto limpio. Siempre gratuito y sin compromiso.',
    faqSub:         'Resolvemos las dudas más habituales antes de contratar el servicio.',
  },

  // ── Testimonios (4) ───────────────────────────────────────────
  testimonials: [
    {
      initials: 'MC',
      name:     'María C.',
      location: 'Salou',
      service:  'Vaciado de piso completo',
      quote:    'JC Tarragona fue una solución fantástica para el vaciado del piso de mi abuela en Salou. Fueron rápidos, profesionales y se llevaron todo sin problemas. ¡Muy recomendable!',
    },
    {
      initials: 'JR',
      name:     'Jordi R.',
      location: 'Reus',
      service:  'Vaciado de local comercial',
      quote:    'Necesitaba vaciar un local comercial en Reus con urgencia. El equipo de JC Tarragona llegó a tiempo, desmontaron todo el mobiliario y lo cargaron sin causar daños. ¡Excelente servicio!',
    },
    {
      initials: 'AL',
      name:     'Ana L.',
      location: 'Tarragona ciudad',
      service:  'Recogida de muebles',
      quote:    'Me ofrecieron un precio muy competitivo para la recogida de algunos muebles viejos en mi casa en Tarragona. Fueron puntuales y eficientes. ¡Muy contenta con el servicio!',
    },
    {
      initials: 'PG',
      name:     'Pedro G.',
      location: 'Constantí',
      service:  'Vaciado de piso completo',
      quote:    'He utilizado los servicios de JC Tarragona varias veces para vaciar propiedades. Siempre son profesionales, rápidos y respetuosos.  ¡Los recomendaré a mis amigos!',
    }
  ],

  // ── Precios (3 tramos) ────────────────────────────────────────
  pricing: [
    {
      tipo:      'Vaciado básico (hasta 5m³)',
      precio:    'desde 180 €',
      highlight: false,
      features:  ['Desmontaje de muebles pequeños', 'Retirada de enseres básicos', 'Transporte a vertedero autorizado'],
    },
    {
      tipo:      'Vaciado estándar (5-15m³)',
      precio:    'desde 350 €',
      highlight: true,
      badge:     'Más solicitado',
      features:  ['Desmontaje completo de mobiliario', 'Recogida de electrodomésticos y enseres voluminosos', 'Transporte a gestor autorizado', 'Limpieza básica del espacio'],
    },
    {
      tipo:      'Vaciado integral (más de 15m³)',
      precio:    'Presupuesto personalizado',
      highlight: false,
      badge:     'Más solicitado',
      features:  ['Desmontaje complejo y especializado', 'Recogida de objetos de valor o difícil manipulación', 'Transporte a gestor autorizado', 'Limpieza profunda del espacio', 'Gestión de residuos especiales'],
    }
  ],

  // ── Preguntas frecuentes (6) ──────────────────────────────────
  faqs: [
    {
      pregunta:  '¿Cuánto cuesta vaciar un piso en {{city}}?',
      respuesta: 'El precio varía según el tamaño del piso, la cantidad de muebles y objetos a retirar, y las condiciones de acceso. Un piso pequeño puede costar desde 180€, mientras que uno más grande podría superar los 1200€.  Solicite un presupuesto sin compromiso para obtener una tasación precisa.',
    },
    {
      pregunta:  '¿Cuánto tarda el vaciado de un local en {{city}}?',
      respuesta: 'El tiempo necesario depende del volumen de trabajo. Un local pequeño puede tardar entre 2 y 4 horas, mientras que uno más grande podría requerir un día completo. Trabajamos con la máxima rapidez para minimizar las interrupciones.',
    },
    {
      pregunta:  '¿Qué incluye el servicio de recogida de muebles en {{city}}?',
      respuesta: 'Incluye el desmontaje (si es necesario), la carga de los muebles, el transporte hasta un punto de reciclaje o vertedero autorizado y la limpieza del espacio vacío.  No incluimos la retirada de residuos peligrosos como amianto.',
    },
    {
      pregunta:  '¿Trabajáis en toda la comarca de {{city}}?',
      respuesta: 'Sí, cubrimos toda la provincia de Tarragona: {{city}}, Reus, Amposta, Valls, Salou, Cambrils, Tortosa y muchos otros municipios.  Consulte nuestra área de cobertura para confirmar si su localidad está incluida.',
    },
    {
      pregunta:  '¿Qué necesito preparar antes del vaciado?',
      respuesta: 'Es recomendable retirar objetos personales de valor y asegurar que el acceso al local o piso sea fácil para nuestro equipo. Si hay muebles pesados, informe con antelación para poder planificar adecuadamente el trabajo.',
    },
    {
      pregunta:  '¿Tenéis seguro de responsabilidad civil?',
      respuesta: 'Sí, contamos con un seguro de responsabilidad civil que cubre cualquier daño accidental a personas o propiedades durante la ejecución del servicio.  Esto garantiza su tranquilidad y seguridad.',
    }
  ],

  // ── Proceso de trabajo (4 pasos) ──────────────────────────────
  proceso: [
    {
      titulo:      '1. Contacto y presupuesto gratuito',
      descripcion: 'Llámenos o envíenos un mensaje para solicitar un presupuesto sin compromiso. Nuestro equipo le atenderá rápidamente y responderá a todas sus preguntas sobre el servicio en {{city}}.',
    },
    {
      titulo:      '2. Evaluación del trabajo',
      descripcion: 'Uno de nuestros técnicos visitará su propiedad (si es necesario) para evaluar el volumen de trabajo, las condiciones de acceso y los objetos a retirar.  Esto nos permite ofrecerle un presupuesto preciso y personalizado.',
    },
    {
      titulo:      '3. Planificación y ejecución del vaciado',
      descripcion: 'En base al presupuesto aprobado, programamos la fecha y hora del vaciado en coordinación con usted. Nuestro equipo se encargará de desmontar, cargar y transportar los objetos a un gestor autorizado.',
    },
    {
      titulo:      '4. Limpieza final y documentación',
      descripcion: 'Una vez completado el vaciado, realizaremos una limpieza básica del espacio vacío. Le proporcionaremos la documentación que acredite la correcta gestión de los residuos.',
    }
  ],

} as const;

export type Content = typeof content;
