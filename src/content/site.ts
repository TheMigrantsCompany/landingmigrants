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
  secondaryCta: { label: "Ver EstuveAhí", href: "#productos" },
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

export const cases = [
  {
    id: "estuveahi",
    rank: "01",
    title: "EstuveAhí",
    short: "EA!",
    role: "Producto propio",
    problem:
      "No existía un producto claro para que asistentes, fotografxs y organizadores compartieran el valor del registro visual de un evento.",
    solution:
      "Diseñamos y construimos la plataforma completa: descubrimiento, galerías, perfiles y comercialización entre actores del mercado.",
    impact:
      "Producto vivo en producción. Evidencia de ciclo completo: idea, lanzamiento y evolución.",
    href: "https://www.estuveahi.com.ar",
    image: "/ea.png",
  },
  {
    id: "meru",
    rank: "02",
    title: "Meru Viajes",
    short: "MV",
    role: "Plataforma de operaciones",
    problem:
      "Una operación turística necesitaba vender servicios, recibir reservas y cobros, y administrar el día a día sin herramientas sueltas.",
    solution:
      "Plataforma con catálogo, reservas online, pasarela de pagos y panel de autogestión para operar el negocio.",
    impact:
      "Sistema en producción que sostiene ventas y operación diaria.",
    href: "https://www.meruviajes.tur.ar/",
    image: "/meru.png",
  },
  {
    id: "amarus",
    rank: "03",
    title: "Amarus Design",
    short: "AD",
    role: "E-commerce & gestión",
    problem:
      "La marca necesitaba vender online con identidad propia y controlar usuarios y órdenes sin fricción operativa.",
    solution:
      "Plataforma de comercio electrónico con experiencia de compra clara, gestión de usuarios y órdenes de compra.",
    impact:
      "Canal de venta y operación unificados en un solo producto digital.",
    href: "https://www.amarusdesign.com/",
    image: "/amarus.png",
  },
  {
    id: "yeka",
    rank: "04",
    title: "YEKA Producciones",
    short: "YEKA",
    role: "Presencia digital",
    problem:
      "Una productora audiovisual necesitaba una presencia digital a la altura de su trabajo creativo y comercial.",
    solution:
      "Diseño y desarrollo de su plataforma web para comunicar servicios, proyectos y captar nuevas oportunidades.",
    impact:
      "Canal digital alineado a la marca, listo para convertir consultas en trabajo.",
    href: "https://www.yekaproducciones.com.ar",
    image: "/yeka.png",
  },
] as const;

export const navLinks = [
  { label: "Productos", href: "#productos" },
  { label: "Creemos", href: "#creemos" },
  { label: "Capacidades", href: "#capacidades" },
  { label: "Evidencia", href: "#evidencia" },
] as const;

export const projectTypes = [
  "Producto digital / SaaS",
  "Marketplace",
  "Plataforma interna",
  "Escalamiento de producto existente",
  "Discovery / consultoría",
  "Otro",
] as const;
