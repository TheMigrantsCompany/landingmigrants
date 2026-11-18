export const brand = {
  name: "IB TechLabs",
  shortName: "IB",
  tagline: "Ingeniería de productos digitales",
  logo: "/1.png",
  email: "info@iarabaudinodev.com.ar",
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
    role: "Producto propio · Marketplace · Plataforma multi-rol",
    sectors: ["producto", "cultura"],
    pitchFor:
      "Marketplaces, plataformas de servicios y productos digitales que necesitan conectar múltiples tipos de usuarios, gestionar operaciones y construir un ecosistema digital propio",
    status: "live",
    problem:
      "La fotografía de eventos suele quedar dispersa entre redes, storage y canales sueltos. Quien asistió no sabe dónde encontrar las fotos; el fotógrafx necesita un canal para mostrar y comercializar su trabajo; los organizadores necesitan un registro profesional del contenido visual. EstuveAhí conecta esas necesidades en un mismo sistema.",
    solution:
      "Marketplace multi-rol estructurado en tres experiencias: asistentes que descubren eventos y compran; fotógrafxs que publican, gestionan y ofrecen cobertura; administración que opera usuarios, eventos, galerías, solicitudes, pedidos y contenidos. Integra descubrimiento, galerías, contratación y herramientas de operación en una sola plataforma.",
    impact:
      "Producto propio operativo y en evolución continua (estuveahi.com.ar). Reúne concepto, diseño, UX, arquitectura, desarrollo, CMS y operación. Más que un sitio web: un ecosistema digital que conecta personas, eventos y contenido visual — demostración concreta de construir y llevar un producto digital propio hasta su operación.",
    href: "https://www.estuveahi.com.ar",
    image: "/ea.png",
    summary:
      "Plataforma de fotografía de eventos que conecta personas, fotógrafxs y eventos en un mismo ecosistema: descubrimiento, galerías, comercialización y administración multi-rol.",
    features: [
      "Descubrimiento de eventos por nombre, ubicación y categoría",
      "Catálogo de eventos y galerías fotográficas",
      "Galerías con protección mediante marca de agua",
      "Likes y favoritos",
      "Perfiles públicos de fotógrafxs",
      "Solicitud de cobertura fotográfica",
      "Comercialización directa entre fotógrafo y cliente",
      "QR para acceder rápidamente a una galería",
      "Avisos de galerías próximas a publicarse",
      "Home dinámica con eventos, métricas, contenidos y llamadas a la acción",
    ],
    admin: [
      "Dashboard con métricas operativas",
      "Gestión de usuarios y roles",
      "Verificación de fotógrafxs",
      "Administración de eventos y galerías",
      "Moderación de contenido",
      "Gestión de solicitudes de cobertura",
      "Asignación y seguimiento de trabajos",
      "Gestión de pedidos y consultas comerciales",
      "CMS para contenidos de la plataforma",
      "Administración de recursos y accesos mediante QR",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Firebase",
      "Firestore",
      "Supabase Storage",
      "Sharp",
      "NextAuth",
    ],
  },
  {
    id: "meru",
    rank: "02",
    title: "Meru Viajes",
    short: "MV",
    role: "Turismo receptivo · Plataforma de reservas · Full-stack",
    sectors: ["turismo"],
    pitchFor:
      "Agencias de viajes, operadores turísticos receptivos y empresas de turismo que necesitan gestionar excursiones, paquetes, reservas y cupos desde una plataforma propia",
    status: "live",
    problem:
      "La venta de excursiones y paquetes requiere coordinar fechas, horarios, pasajeros, disponibilidad y estados de reserva. Cuando eso depende de planillas, mensajes y herramientas sueltas, la operación se complica y cuesta mantener el stock actualizado. El objetivo: digitalizar la reserva sin perder control operativo.",
    solution:
      "Plataforma de turismo receptivo que reúne catálogo, disponibilidad, reservas, clientes y operación interna. El visitante explora excursiones y paquetes, elige salida y pasajeros, y reserva online con retención temporal de cupos. El equipo opera todo desde un panel admin sin depender de desarrollo.",
    impact:
      "Plataforma operativa para un operador receptivo de Ushuaia (meruviajes.tur.ar). Unifica el ciclo completo: descubrimiento → disponibilidad → reserva → pago → gestión. Canal de venta y herramienta operativa, con base lista para seguir sumando comercialización y gestión.",
    href: "https://meruviajes.tur.ar",
    image: "/meru.png",
    summary:
      "Cliente: Meru Viajes · Ushuaia, Argentina. Plataforma de reservas para turismo receptivo: catálogo, cupos, carrito, área de cliente y panel de operación diaria.",
    features: [
      "Catálogo de excursiones y paquetes",
      "Salidas organizadas por fecha y horario",
      "Disponibilidad y cupos por salida",
      "Selección de pasajeros y fecha de viaje",
      "Carrito y reserva online",
      "Retención temporal de cupos durante el proceso de pago",
      "Estados de reserva y seguimiento",
      "Precios y descuentos configurables",
      "Cuenta de cliente con perfil, reservas e historial",
      "Consultas desde la plataforma",
      "Integración de reseñas de Google",
      "Experiencia responsive para dispositivos móviles",
    ],
    admin: [
      "Gestión de excursiones y paquetes",
      "Administración de fechas, horarios y cupos",
      "Gestión y seguimiento de reservas",
      "Confirmación, cancelación y liberación de cupos",
      "Liberación automática de reservas vencidas",
      "Gestión de usuarios y consultas",
      "Configuración de reglas y plazos de reserva",
      "Administración de contenidos de la web",
      "Gestión de destacados y contenidos de la home",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Firestore",
      "NextAuth",
      "Supabase Storage",
      "Resend",
      "Zustand",
      "Vercel",
    ],
  },
  {
    id: "nortesur",
    rank: "03",
    title: "NorteSur Travel",
    short: "NS",
    role: "Turismo · Plataforma comercial · CMS + Lead Generation",
    sectors: ["turismo"],
    pitchFor:
      "Agencias de turismo y operadores que necesitan una presencia digital orientada a generar consultas, administrar contenido y convertir visitantes en oportunidades comerciales",
    status: "live",
    problem:
      "Una agencia de turismo necesita actualizar constantemente oferta, categorías, promociones, imágenes, testimonios y contenidos. Al mismo tiempo, una visita solo tiene valor si se convierte en consulta útil para ventas. El objetivo: autonomía editorial y un sistema estructurado de captación y seguimiento.",
    solution:
      "Sitio institucional con catálogo y contenido editorial + panel admin. El visitante explora servicios, conoce la agencia, lee el blog y envía consultas detalladas (destino, fecha, pasajeros). Las consultas se centralizan, se notifican al equipo y se continúan por WhatsApp.",
    impact:
      "Plataforma comercial operativa (nortesurtravel.com.ar). Ciclo completo: contenido → descubrimiento → consulta → notificación → seguimiento comercial. No solo un sitio institucional: herramienta para presentar oferta, captar oportunidades y administrar la presencia online de forma autónoma.",
    href: "https://nortesurtravel.com.ar",
    image: "/nortesur.png",
    summary:
      "Cliente: NorteSur Travel · Argentina. Plataforma comercial para agencia de turismo: catálogo por categorías, CMS editorial y captación de leads con notificación y seguimiento por WhatsApp.",
    features: [
      "Home orientada a conversión",
      "Catálogo de servicios organizado por categorías",
      "Páginas individuales para categorías y servicios",
      "Flyers e imágenes de cada propuesta",
      "Formulario de consulta con información de viaje",
      "Contacto directo mediante WhatsApp",
      "Blog y contenido editorial",
      "Testimonios y empresas asociadas",
      "Preguntas frecuentes",
      "Información institucional de la agencia",
      "Diseño responsive optimizado para dispositivos móviles",
      "SEO técnico y datos estructurados",
    ],
    admin: [
      "Inbox de consultas y leads",
      "Seguimiento del estado de las consultas",
      "Acceso directo a WhatsApp del potencial cliente",
      "Gestión de categorías y servicios",
      "Administración de flyers y contenidos destacados",
      "Gestión de testimonios y preguntas frecuentes",
      "Gestión de blog y publicaciones",
      "Administración de empresas asociadas",
      "Configuración de información de contacto y redes",
      "Edición de hero, sección institucional y contenidos principales",
    ],
    stack: [
      "Next.js 15",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "Firebase",
      "Firestore",
      "Firebase Authentication",
      "Cloudinary",
      "Resend",
      "Nodemailer",
      "React Hook Form",
      "Zod",
      "Vercel",
    ],
  },
  {
    id: "feria",
    rank: "04",
    title: "Feria de Fotografía",
    short: "FF",
    role: "Cultura · Plataforma editorial · CMS",
    sectors: ["cultura"],
    pitchFor:
      "Ferias, festivales, organizaciones culturales y proyectos artísticos que necesitan publicar programación, convocatorias y archivo histórico desde una plataforma propia",
    status: "live",
    problem:
      "Los proyectos culturales cambian de contenido constantemente y, a la vez, cada edición genera un archivo que debe permanecer organizado. Fechas, convocatorias, actividades, exposiciones, artistas y audiovisual necesitan convivir sin convertir cada update en desarrollo. El objetivo: comunicar la edición actual y preservar las anteriores.",
    solution:
      "Sitio institucional y editorial + CMS autónomo. Durante la convocatoria comunica propuesta, fechas e inscripción; al cerrar, muestra el programa por días. También permite explorar exposiciones, artistas, agenda y ediciones anteriores: un archivo digital vivo de la feria.",
    impact:
      "Plataforma cultural operativa (feriadefotografia.com). Ciclo completo: convocatoria → inscripción → programación → exposiciones → archivo. No solo sitio institucional: herramienta de comunicación y archivo digital que acompaña nuevas ediciones sin perder el contenido del tiempo.",
    href: "https://www.feriadefotografia.com/",
    image: "/headfotoferia.png",
    summary:
      "Cliente: Feria de Fotografía · Argentina. Plataforma editorial y CMS para acompañar el ciclo de cada edición: convocatoria, programa, exposiciones y archivo histórico.",
    features: [
      "Home con portada configurable mediante imagen o vídeo",
      "Convocatorias con fechas, información y acceso a inscripción",
      "Programación organizada por días y actividades",
      "Agenda cultural con eventos próximos y anteriores",
      "Exposiciones con obras, artistas y piezas destacadas",
      "Archivo de ediciones históricas",
      "Vídeos y material audiovisual",
      "Información sobre el equipo",
      "Sección institucional y contacto",
      "Integración de redes sociales",
      "Diseño responsive con transiciones y animaciones",
    ],
    admin: [
      "Gestión de portada y contenido principal",
      "Administración de convocatorias",
      "Publicación y actualización de programación",
      "Gestión de agenda cultural",
      "Creación y edición de exposiciones",
      "Carga masiva de imágenes y material audiovisual",
      "Administración de artistas y equipo",
      "Gestión de ediciones anteriores",
      "Edición del contenido institucional",
      "Organización de medios por secciones",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Firestore",
      "Firebase Authentication",
      "Cloudinary",
      "EmailJS",
      "Framer Motion",
      "React Quill",
      "Vercel",
    ],
  },
  {
    id: "yeka",
    rank: "05",
    title: "YEKA Producciones",
    short: "YEKA",
    role: "Producto propio · Plataforma comercial · Portfolio fotográfico",
    sectors: ["audiovisual", "cultura"],
    pitchFor:
      "Estudios de fotografía, productoras audiovisuales y equipos de cobertura de eventos que necesitan presentar su trabajo, gestionar su portfolio y convertir visitas en oportunidades comerciales",
    status: "live",
    problem:
      "Para un estudio fotográfico, el portfolio es central al proceso comercial. A medida que crece el volumen de trabajos, mantener una presentación clara y actualizada se vuelve complejo. YEKA necesitaba incorporar eventos y álbumes con rapidez, organizar por categorías y actualizar secciones comerciales sin depender de desarrollo.",
    solution:
      "Plataforma comercial construida alrededor del portfolio visual: exploración por categorías y álbumes, galerías con navegación y ampliación de imágenes. Integra información institucional, propuesta de valor, testimonios y contacto directo por WhatsApp, con panel para actualizar portfolio y contenido sin tocar código.",
    impact:
      "Plataforma comercial operativa (yekaproducciones.com.ar) diseñada alrededor del activo principal del estudio: su trabajo. Ciclo: producción → carga → publicación → exploración → contacto comercial. El portfolio deja de ser una galería pasiva y pasa a ser herramienta comercial activa.",
    href: "https://www.yekaproducciones.com.ar/",
    image: "/yeka.png",
    summary:
      "Plataforma comercial para estudio de fotografía y producción audiovisual: portfolio ordenado por categorías y álbumes, identidad de marca consistente y canal de contacto directo con potenciales clientes.",
    features: [
      "Home con hero visual administrable",
      "Portfolio organizado por categorías y álbumes",
      "Galerías fotográficas con navegación",
      "Visualización ampliada de imágenes",
      "Secciones institucionales y propuesta de valor",
      "Testimonios",
      "Información de contacto y redes sociales",
      "Acceso directo a WhatsApp",
      "URLs limpias para categorías y álbumes",
      "Diseño responsive optimizado para fotografía",
    ],
    admin: [
      "Gestión de categorías",
      "Creación y administración de álbumes",
      "Asociación de álbumes a categorías",
      "Carga individual o múltiple de fotografías",
      "Organización y actualización del portfolio",
      "Generación automática de URLs",
      "Gestión de hero y contenido institucional",
      "Administración de testimonios",
      "Configuración de contacto y redes sociales",
    ],
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Firebase Firestore",
      "Cloudinary",
      "Vercel",
    ],
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
