import { brand, capabilities, products } from "@/content/site";
import { getSiteUrl } from "@/lib/site";

function buildGraph() {
  const url = getSiteUrl();
  const estuveahi = products.find((p) => p.id === "estuveahi");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}#website`,
        url,
        name: brand.name,
        description: brand.tagline,
        inLanguage: "es-AR",
        publisher: { "@id": `${url}#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: `${brand.name} | ${brand.tagline}`,
        isPartOf: { "@id": `${url}#website` },
        about: { "@id": `${url}#organization` },
        inLanguage: "es-AR",
      },
      {
        "@type": "Organization",
        "@id": `${url}#organization`,
        name: brand.name,
        url,
        email: brand.email,
        description:
          "Estudio de ingeniería de software y diseño de plataformas. Construimos plataformas SaaS, marketplaces y sistemas digitales con propósito.",
        foundingDate: "2024",
        founder: {
          "@type": "Person",
          name: brand.founder.name,
          jobTitle: "Fundadora",
        },
        areaServed: {
          "@type": "Country",
          name: "Argentina",
        },
        sameAs: [
          "https://www.estuveahi.com.ar",
          brand.whatsapp,
        ],
        knowsAbout: capabilities.map((c) => c.title),
      },
      {
        "@type": "ProfessionalService",
        "@id": `${url}#service`,
        name: brand.name,
        url,
        description:
          "Diseño de plataformas, ingeniería de software y desarrollo de plataformas digitales, SaaS y marketplaces.",
        provider: { "@id": `${url}#organization` },
        areaServed: {
          "@type": "Country",
          name: "Argentina",
        },
        serviceType: capabilities.map((c) => c.title),
      },
      ...(estuveahi
        ? [
            {
              "@type": "SoftwareApplication",
              "@id": `${url}#estuveahi`,
              name: estuveahi.name,
              url: estuveahi.href,
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description: estuveahi.description,
              creator: { "@id": `${url}#organization` },
            },
          ]
        : []),
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
