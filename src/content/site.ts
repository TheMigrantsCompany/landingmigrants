export const brand = {
  name: "IB TechLabs",
  shortName: "IB",
  tagline: "Estudio de plataformas digitales",
  logo: "/1.png",
  email: "iara.baudino.dev@gmail.com",
  whatsapp: "https://wa.me/5492901502553",
  whatsappDisplay: "+54 9 2901 502553",
  founder: {
    name: "Iara Yael Baudino",
    role: "Fundadora",
  },
} as const;

export const hero = {
  headlineLines: [
    "Construimos plataformas digitales",
    "para empresas que quieren",
    "transformar ideas en plataformas.",
  ],
  headline:
    "Construimos plataformas digitales para empresas que quieren transformar ideas en plataformas.",
  subheadline:
    "Diseñamos, desarrollamos y escalamos software con foco en la plataforma, la experiencia de usuario y la tecnología de largo plazo.",
  primaryCta: { label: "Hablemos de tu plataforma", href: "#contacto" },
  secondaryCta: { label: "Ver lo que construimos", href: "#plataformas" },
} as const;

export const manifesto = {
  eyebrow: "Lo que creemos",
  lines: [
    "La mejor tecnología no es la que acumula funciones.",
    "Es la que resuelve un problema real.",
    "Diseñamos plataformas para que las personas creen, colaboren, compartan y preserven lo que les importa.",
    "El diseño, la experiencia y la ingeniería pesan igual. Cada decisión existe para mejorar la vida de quien usa la plataforma.",
  ],
} as const;

export const products = [
  {
    id: "estuveahi",
    name: "EstuveAhí",
    short: "EA!",
    badge: "Plataforma propia",
    description:
      "Plataforma para descubrir, preservar y comercializar el registro visual de eventos. Conecta asistentes, fotografxs y organizadores en un mismo espacio.",
    href: "https://www.estuveahi.com.ar",
    featured: true,
  },
  {
    id: "yeka",
    name: "YEKA Producciones",
    short: "YEKA",
    badge: "Marca del ecosistema",
    description:
      "Productora audiovisual. Contenido, imagen y narrativa para marcas y proyectos creativos. Parte del mismo universo que IB TechLabs.",
    href: "https://www.yekaproducciones.com.ar",
    featured: true,
  },
  {
    id: "coming-soon-1",
    name: "Próximamente",
    short: "IB",
    badge: "En desarrollo",
    description:
      "Nuevas plataformas del ecosistema para industrias creativas. El laboratorio sigue construyendo.",
    href: null,
    featured: false,
  },
] as const;

export const capabilities = [
  {
    title: "Diseño de Plataformas",
    description:
      "Definimos qué construir y por qué. Flujos, experiencia y claridad antes de escribir la primera línea de código.",
  },
  {
    title: "Ingeniería de Software",
    description:
      "Arquitectura sólida, código mantenible y sistemas pensados para crecer con el negocio.",
  },
  {
    title: "Arquitectura de Plataformas",
    description:
      "Diseñamos la base técnica de SaaS, marketplaces y herramientas multi-usuario.",
  },
  {
    title: "Desarrollo Full Stack",
    description:
      "Del frontend al backend: interfaces, APIs, datos y despliegue en un mismo equipo.",
  },
  {
    title: "SaaS & Marketplaces",
    description:
      "Plataformas con suscripciones, roles, pagos y lógicas de negocio complejas.",
  },
  {
    title: "Consultoría Tecnológica",
    description:
      "Acompañamos decisiones de arquitectura y stack cuando la ambición supera el prototipo.",
  },
] as const;

export const process = [
  {
    step: "01",
    title: "Entender",
    description:
      "Escuchamos el problema, a las personas involucradas y el contexto del negocio. Sin eso, no hay plataforma.",
  },
  {
    step: "02",
    title: "Diseñar",
    description:
      "Definimos la experiencia, la arquitectura y el alcance. Claridad antes de velocidad.",
  },
  {
    step: "03",
    title: "Construir",
    description:
      "Desarrollamos, iteramos y evolucionamos la plataforma con calidad de ingeniería y visión de largo plazo.",
  },
] as const;

export const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
  "Framer Motion",
  "APIs & integraciones",
] as const;

export const cases = [
  {
    id: "estuveahi",
    rank: "01",
    title: "EstuveAhí",
    role: "Plataforma propia",
    summary:
      "Plataforma completa para el registro visual de eventos: descubrimiento, galerías, comunidad de fotografxs y comercialización.",
    outcome:
      "Demuestra cómo IB TechLabs construye plataformas propias con propósito, no solo software a pedido.",
    href: "https://www.estuveahi.com.ar",
    image: null,
  },
  {
    id: "meru",
    rank: "02",
    title: "Meru Viajes",
    role: "Plataforma de turismo",
    summary:
      "Sistema de servicios turísticos con reservas online, pasarela de pagos y panel de autogestión para operar el negocio día a día.",
    outcome:
      "Capacidad técnica de punta a punta: plataforma, pagos, administración y experiencia de usuario.",
    href: "https://www.meruviajes.tur.ar/",
    image: "/project1.png",
  },
  {
    id: "amarus",
    rank: "03",
    title: "Amarus Design",
    role: "E-commerce & gestión",
    summary:
      "Plataforma de comercio electrónico con identidad de marca, gestión de usuarios y órdenes de compra.",
    outcome:
      "Plataforma digital bien ejecutada: estética, funcionalidad y operación en un mismo sistema.",
    href: "https://www.amarusdesign.com/",
    image: null,
  },
] as const;

export const ecosystem = [
  {
    id: "estuveahi",
    name: "EstuveAhí",
    short: "EA!",
    description:
      "Plataforma para descubrir, preservar y comercializar el registro visual de eventos.",
    href: "https://www.estuveahi.com.ar",
  },
  {
    id: "ib-techlabs",
    name: "IB TechLabs",
    short: "IB",
    description:
      "Estudio de ingeniería y diseño de plataformas digitales con propósito.",
    href: "#inicio",
  },
  {
    id: "yeka",
    name: "YEKA Producciones",
    short: "YEKA",
    description:
      "Productora audiovisual. Parte del mismo ecosistema creativo y tecnológico.",
    href: "https://www.yekaproducciones.com.ar",
  },
] as const;

export const founder = {
  eyebrow: "Fundadora",
  body: "IB TechLabs fue fundado por Iara Yael Baudino, desarrolladora Full Stack y creadora de plataformas digitales como EstuveAhí.",
} as const;

export const navLinks = [
  { label: "Creemos", href: "#creemos" },
  { label: "Plataformas", href: "#plataformas" },
  { label: "Capacidades", href: "#capacidades" },
  { label: "Casos", href: "#casos" },
] as const;

export const projectTypes = [
  "Plataforma SaaS",
  "Marketplace",
  "Aplicación web",
  "Sistema interno",
  "Plataforma digital",
  "Consultoría / discovery",
  "Otro",
] as const;

export const budgetRanges = [
  "A definir",
  "Menos de USD 5.000",
  "USD 5.000 – 15.000",
  "USD 15.000 – 40.000",
  "Más de USD 40.000",
] as const;
