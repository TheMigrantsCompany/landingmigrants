export const brand = {
  name: "IB TechLabs",
  shortName: "IB",
  tagline: "Ingeniería de productos digitales",
  logo: "/1.png",
  email: "iara.baudino.dev@gmail.com",
  whatsapp: "https://wa.me/5492901502553",
  whatsappDisplay: "+54 9 2901 502553",
  founder: {
    name: "Iara Yael Baudino",
    role: "Fundadora",
    linkedin: "https://www.linkedin.com/in/iara-yael-baudino-70158684",
    github: "",
  },
} as const;

export const hero = {
  headlineLines: [
    "Construimos el producto",
    "que tu empresa necesita",
    "para crecer.",
  ],
  headline:
    "Construimos el producto que tu empresa necesita para crecer.",
  subheadline:
    "Diseñamos, desarrollamos y escalamos productos digitales. Construimos plataformas propias —como EstuveAhí— y ayudamos a empresas a lanzar y escalar las suyas.",
  primaryCta: { label: "Hablemos de tu producto", href: "#contacto" },
  trustLine:
    "Trabajamos con empresas que necesitan producto, no solo desarrollo.",
} as const;

export const manifesto = {
  eyebrow: "Lo que creemos",
  lines: [
    "Construir productos propios nos obliga a pensar distinto.",
    "Cuando vivís idea, usuarios, operación y escala, dejás de empujar features y empezás a decidir con criterio.",
    "La mejor tecnología no es la que tiene más funciones. Es la que resuelve un problema real sin fricción.",
    "Diseño, experiencia e ingeniería pesan igual. Si una falla, el producto falla.",
    "La tecnología es un medio para acercar personas, potenciar negocios y abrir oportunidades. Nunca el fin.",
  ],
} as const;

export const products = [
  {
    id: "estuveahi",
    name: "EstuveAhí",
    short: "EA!",
    badge: "Producto propio",
    problem:
      "Las fotos de un evento se pierden entre chats, carpetas y fotografxs sin un lugar común.",
    solution:
      "Una plataforma para descubrir, preservar y comercializar el registro visual de eventos: asistentes, fotografxs y organizadores en un mismo producto.",
    impact:
      "Un producto en el mercado que demuestra cómo IB TechLabs diseña, lanza y evoluciona tecnología de punta a punta.",
    href: "https://www.estuveahi.com.ar",
    featured: true,
  },
  {
    id: "coming-soon",
    name: "Próximo producto",
    short: "IB",
    badge: "En construcción",
    problem: null,
    solution:
      "Estamos construyendo el siguiente producto. Misma ambición. Nuevo problema a resolver.",
    impact: null,
    href: null,
    featured: false,
  },
] as const;

export const capabilities = [
  {
    title: "Ingeniería de Producto",
    description:
      "Definimos qué construir y por qué. Priorizamos valor, riesgo y claridad antes de escribir código.",
  },
  {
    title: "Arquitectura de Software",
    description:
      "Bases técnicas pensadas para crecer: datos, APIs, roles y límites claros desde el día uno.",
  },
  {
    title: "Desarrollo SaaS",
    description:
      "Suscripciones, multi-tenant, paneles y lógica de negocio que sostienen un producto en producción.",
  },
  {
    title: "Marketplaces",
    description:
      "Oferta, demanda y confianza en un mismo sistema: matching, pagos, reputación y operación.",
  },
  {
    title: "Plataformas Digitales",
    description:
      "Productos multi-usuario con flujos complejos. Experiencia e ingeniería juntas.",
  },
  {
    title: "Sistemas Internos",
    description:
      "Herramientas que ordenan la operación de una empresa y liberan tiempo del equipo.",
  },
  {
    title: "Productos Digitales",
    description:
      "Del discovery al release: MVP sólido, iteración con usuarios reales y visión de largo plazo.",
  },
  {
    title: "Consultoría Tecnológica",
    description:
      "Criterio de producto y stack cuando la idea ya existe pero falta una arquitectura que la sostenga.",
  },
] as const;

export const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
] as const;

export const sectors = [
  { id: "all", label: "Todos" },
  { id: "turismo", label: "Turismo" },
  { id: "cultura", label: "Cultura & eventos" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "audiovisual", label: "Audiovisual" },
  { id: "producto", label: "Producto propio" },
] as const;

export type SectorId = (typeof sectors)[number]["id"];

export type CaseStudy = {
  id: string;
  rank: string;
  title: string;
  short: string;
  role: string;
  sectors: Exclude<SectorId, "all">[];
  /** Ideal para adjuntar en propuestas a ese vertical */
  pitchFor?: string;
  status: "live" | "in-progress";
  problem: string;
  solution: string;
  impact: string;
  href: string;
  image: string | null;
  summary: string;
  features: string[];
  admin: string[];
  stack?: string[];
};

export const cases: CaseStudy[] = [
  {
    id: "estuveahi",
    rank: "01",
    title: "EstuveAhí",
    short: "EA!",
    role: "Producto propio · Marketplace",
    sectors: ["producto", "cultura"],
    pitchFor: "Plataformas marketplace y productos digitales propios",
    status: "live",
    problem:
      "Las fotos de un evento se fragmentan entre chats, carpetas y fotografxs. No había un producto claro para descubrir, preservar y comercializar ese registro visual.",
    solution:
      "Plataforma completa que conecta asistentes, fotografxs y organizadores: búsqueda de eventos, galerías, perfiles profesionales y flujo de compra.",
    impact:
      "Producto propio en el mercado. Demuestra ciclo completo: discovery, arquitectura, lanzamiento y evolución continua.",
    href: "https://www.estuveahi.com.ar",
    image: "/ea.png",
    summary:
      "Marketplace de fotografía de eventos. Del descubrimiento de galerías a la comercialización entre asistentes y fotografxs.",
    features: [
      "Exploración y búsqueda de eventos por nombre, fecha o recinto",
      "Galerías profesionales por evento",
      "Perfiles de fotografxs y onboarding a la plataforma",
      "Flujo para contratar cobertura fotográfica",
      "Comercialización de fotos entre asistentes y fotografxs",
      "Home con eventos destacados y métricas de comunidad",
      "FAQ y flujos diferenciados para asistentes, fotografxs y organizadores",
    ],
    admin: [
      "Gestión de eventos y galerías publicadas",
      "Administración de usuarios y roles (asistentes / fotografxs)",
      "Moderación de contenido y perfiles",
      "Visibilidad de métricas de uso (fotos, eventos, usuarios)",
    ],
    stack: ["Next.js", "React", "TypeScript", "PostgreSQL"],
  },
  {
    id: "meru",
    rank: "02",
    title: "Meru Viajes",
    short: "MV",
    role: "Plataforma de turismo · Operaciones",
    sectors: ["turismo"],
    pitchFor: "Agencias de viajes, operadores turísticos y EVT",
    status: "in-progress",
    problem:
      "Una operación en Ushuaia necesitaba vender excursiones y paquetes, recibir consultas y administrar el catálogo sin depender de herramientas sueltas.",
    solution:
      "Plataforma de turismo con catálogo de excursiones y paquetes, fichas de producto, reservas/consultas y panel de autogestión para operar el negocio día a día.",
    impact:
      "Canal digital que sostiene la oferta comercial y la operación. Ideal como referencia al proponer plataformas para turismo.",
    href: "https://meru-viajes.vercel.app/",
    image: "/meru.png",
    summary:
      "Plataforma para operador turístico en Ushuaia: catálogo, paquetes, consultas y panel de gestión.",
    features: [
      "Catálogo de excursiones con detalle, precios y descripciones",
      "Paquetes turísticos combinados",
      "Fichas de producto listas para conversión",
      "Formulario de consulta / reserva orientado a venta",
      "Integración de reseñas de Google",
      "Secciones institucionales (misión, visión, valores)",
      "Diseño responsive optimizado para móvil",
      "WhatsApp como canal de cierre comercial",
    ],
    admin: [
      "Panel para publicar y editar excursiones",
      "Gestión de paquetes y precios",
      "Actualización de contenidos institucionales",
      "Administración de consultas entrantes",
    ],
    stack: ["Next.js", "React", "TypeScript"],
  },
  {
    id: "nortesur",
    rank: "03",
    title: "Norte Sur Travel",
    short: "NS",
    role: "Agencia de viajes · Plataforma comercial",
    sectors: ["turismo"],
    pitchFor: "Agencias de viajes y turismo receptivo / emisivo",
    status: "live",
    problem:
      "Una agencia de viajes necesitaba una presencia digital profesional para captar consultas, ordenar su oferta y transmitir confianza.",
    solution:
      "Sitio institucional y comercial con servicios, testimonios, FAQ, blog y un formulario de consulta de viaje altamente estructurado.",
    impact:
      "Canal de captación de leads turísticos. Referencia directa para propuestas a agencias de viajes.",
    href: "https://www.nortesurtravel.com.ar/",
    image: null,
    summary:
      "Plataforma digital para agencia de viajes: captura de consultas, oferta de servicios y contenidos de confianza.",
    features: [
      "Hero y narrativa de marca orientada a conversión",
      "Formulario de consulta de viaje (destino, fechas, personas, salida)",
      "Secciones de servicios, testimonios y FAQ",
      "Blog para contenidos y SEO local",
      "Integración de contacto por email y teléfono",
      "Diseño responsive multi-dispositivo",
    ],
    admin: [
      "Panel de administración de contenidos",
      "Gestión de destinos / información comercial",
      "Actualización de blog y secciones institucionales",
      "Recepción y seguimiento de consultas",
    ],
    stack: ["Next.js", "React"],
  },
  {
    id: "feria",
    rank: "04",
    title: "Feria de Fotografía",
    short: "FF",
    role: "Plataforma cultural · Evento",
    sectors: ["cultura"],
    pitchFor: "Festivales, ferias culturales y productoras de eventos",
    status: "live",
    problem:
      "Un evento cultural necesitaba una web multi-sección para comunicar ediciones, convocatorias, agenda, exposiciones y contacto de forma autogestionable.",
    solution:
      "Plataforma del evento con navegación por secciones (proyecto, convocatorias, staff, ediciones, exposiciones, agenda) y panel para actualizar contenido.",
    impact:
      "Presencia digital del evento operativa y editable por el equipo organizador.",
    href: "https://www.feriadefotografia.com/",
    image: "/headfotoferia.png",
    summary:
      "Web institucional y operativa para un evento cultural de fotografía, con panel de contenidos.",
    features: [
      "Información del proyecto y ediciones",
      "Convocatorias y exposiciones",
      "Agenda del evento",
      "Staff / equipo",
      "Formulario de contacto",
      "Integración con redes (Instagram)",
      "Estructura multi-página lista para crecer por edición",
    ],
    admin: [
      "Dashboard autogestionable de contenidos",
      "Actualización de agenda, convocatorias y exposiciones",
      "Gestión de staff e información institucional",
      "Administración de mensajes de contacto",
    ],
    stack: ["Next.js", "React"],
  },
  {
    id: "amarus",
    rank: "05",
    title: "Amarus Design",
    short: "AD",
    role: "E-commerce · Marca artesanal",
    sectors: ["ecommerce"],
    pitchFor: "Marcas de producto, artesanos y tiendas que necesitan vender y operar online",
    status: "live",
    problem:
      "Una marca de joyería artesanal y minerales necesitaba vender online con identidad propia, catálogo organizado por categorías y control operativo de la tienda.",
    solution:
      "E-commerce completo con tienda por categorías (joyería, minerales, macramé, ropa, libros), narrativa de marca, blog y panel de administración.",
    impact:
      "Canal de venta y presencia de marca unificados. Referencia clara para propuestas de e-commerce a marcas de producto.",
    href: "https://www.amarusdesign.com/",
    image: "/amarus.png",
    summary:
      "Tienda online de joyería artesanal y minerales, con catálogo por categorías, contenidos de marca y backoffice.",
    features: [
      "Tienda online con catálogo por categorías (joyería, minerales, macramé, ropa, libros y oráculos)",
      "Navegación comercial orientada a descubrimiento de producto",
      "Secciones de equipo, historia, políticas y blog",
      "Suscripción / newsletter",
      "Integración de contacto y redes",
      "Diseño con identidad de marca artesanal",
      "Experiencia responsive",
    ],
    admin: [
      "Panel de administración de la tienda",
      "Gestión de productos y categorías",
      "Publicación y actualización de novedades",
      "Gestión de contenidos institucionales y blog",
      "Operación diaria de la tienda desde backoffice",
    ],
    stack: ["Next.js", "React"],
  },
  {
    id: "yeka",
    rank: "06",
    title: "YEKA Producciones",
    short: "YEKA",
    role: "Productora audiovisual · Captación",
    sectors: ["audiovisual", "cultura"],
    pitchFor: "Productoras, estudios fotográficos y marcas creativas",
    status: "live",
    problem:
      "Una productora audiovisual necesitaba una presencia digital a la altura de su trabajo creativo y un canal claro para solicitar presupuestos.",
    solution:
      "Sitio con portfolio, testimonios y formulario de presupuesto por tipo de evento (casamientos, corporativos, etc.).",
    impact:
      "Canal digital alineado a la marca, orientado a convertir consultas en trabajo cerrado.",
    href: "https://www.yekaproducciones.com.ar/",
    image: "/yeka.png",
    summary:
      "Presencia digital para productora audiovisual con captura de presupuestos por tipo de evento.",
    features: [
      "Portfolio visual orientado a conversión",
      "Testimonios de clientes",
      "Formulario de presupuesto por tipo de evento",
      "Captura de fecha y detalle del evento",
      "Integración WhatsApp",
      "Diseño responsive",
    ],
    admin: [
      "Panel para gestionar portfolio y categorías",
      "Actualización de testimonios",
      "Administración de solicitudes de presupuesto",
      "Edición de contenidos institucionales",
    ],
    stack: ["Next.js", "React"],
  },
];

export const navLinks = [
  { label: "Plataformas", href: "/#plataformas" },
  { label: "Creemos", href: "/#creemos" },
  { label: "Capacidades", href: "/#capacidades" },
  { label: "Fotografía", href: "/#fotografia" },
] as const;

export const photography = {
  eyebrow: "Fotografía",
  headline: "Fotografía de producto que vende.",
  body: "Además de construir plataformas, ofrecemos fotografía profesional de producto: catálogo, e-commerce y lookbook con criterio comercial. El trabajo se ve en YEKA.",
  cta: {
    label: "Ver YEKA",
    href: "https://www.yekaproducciones.com.ar/",
  },
  image: "/yeka.png",
  imageAlt: "YEKA Producciones — fotografía y producción",
} as const;

export const projectTypes = [
  "Producto digital / SaaS",
  "Marketplace",
  "Plataforma interna",
  "Escalamiento de producto existente",
  "Discovery / consultoría",
  "Otro",
] as const;
