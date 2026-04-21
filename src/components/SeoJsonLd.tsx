import { getSiteUrl } from "@/lib/site";

const EMAIL = "iara.baudino.dev@gmail.com";
const WA = "https://wa.me/5492901502553";

function buildGraph() {
  const url = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}#website`,
        url,
        name: "Iara Baudino",
        description:
          "Desarrollo y diseño web a medida: landing, sitios institucionales, e-commerce, menús digitales con QR y portfolios para fotógrafos.",
        inLanguage: "es-AR",
        publisher: { "@id": `${url}#person` },
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: "Iara Baudino | Desarrollo y diseño web a medida",
        isPartOf: { "@id": `${url}#website` },
        about: { "@id": `${url}#person` },
        inLanguage: "es-AR",
      },
      {
        "@type": "Person",
        "@id": `${url}#person`,
        name: "Iara Baudino",
        url,
        email: EMAIL,
        jobTitle: "Desarrolladora web",
        knowsAbout: [
          "Diseño web",
          "Desarrollo web",
          "Next.js",
          "React",
          "Landing page",
          "E-commerce",
          "Sitio institucional",
          "Menú digital QR",
        ],
        sameAs: [WA],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${url}#service`,
        name: "Desarrollo y diseño web a medida",
        url,
        description:
          "Sitios web con identidad: productos listos (menús QR, portfolio fotógrafos) y proyectos a medida (landing, institucional, blog, e-commerce).",
        provider: { "@id": `${url}#person` },
        areaServed: {
          "@type": "Country",
          name: "Argentina",
        },
        serviceType: [
          "Menús digitales con QR",
          "Portfolio para fotógrafos",
          "Landing page",
          "Sitio institucional",
          "Sitio con blog",
          "E-commerce",
          "Sitio a medida",
        ],
      },
    ],
  };
}

export function SeoJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(buildGraph()) }}
    />
  );
}
