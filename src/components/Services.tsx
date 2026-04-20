"use client";

import {
  IconFileText,
  IconBuilding,
  IconBrandShopee,
  IconSettings,
  IconNews,
  IconQrcode,
  IconPhoto,
} from "@tabler/icons-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  shortDescription: string;
  features: string[];
  footerNote?: string;
}

export function Services() {
  const products: Service[] = [
    {
      icon: <IconQrcode size={40} />,
      title: "Menús Digitales con QR",
      shortDescription:
        "Ideal para negocios gastronómicos que quieren modernizar su carta y mejorar la experiencia del cliente.",
      features: [
        "Menú digital responsive (celular + PC)",
        "Código QR listo para imprimir",
        "Panel de administración",
        "Botón de WhatsApp o reservas",
        "Carga inicial de productos",
      ],
      footerNote: "Entrega en 48–72 hs",
    },
    {
      icon: <IconPhoto size={40} />,
      title: "Portfolio para Fotógrafos",
      shortDescription:
        "Una web simple y profesional para mostrar tu trabajo y conseguir más clientes.",
      features: [
        "Página tipo scroll",
        "Galerías organizadas por categorías",
        'Sección "sobre mí" + contacto',
        "Panel de administración",
        "Optimización para carga rápida",
      ],
      footerNote: "Listo en pocos días",
    },
  ];

  const customServices: Service[] = [
    {
      icon: <IconFileText size={40} />,
      title: "Landing Page",
      shortDescription:
        "Para promocionar un servicio, producto o evento en una sola página.",
      features: [],
    },
    {
      icon: <IconBuilding size={40} />,
      title: "Sitio Institucional",
      shortDescription: "Para profesionales o marcas con distintas secciones.",
      features: [],
    },
    {
      icon: <IconNews size={40} />,
      title: "Sitio con Blog",
      shortDescription: "Para publicar contenido y mejorar posicionamiento.",
      features: [],
    },
    {
      icon: <IconBrandShopee size={40} />,
      title: "E-commerce",
      shortDescription: "Para vender productos online con pagos integrados.",
      features: [],
    },
    {
      icon: <IconSettings size={40} />,
      title: "Sitio a Medida",
      shortDescription:
        "Para proyectos más complejos con funcionalidades específicas.",
      features: [],
    },
  ];

  const renderCard = (service: Service) => {
    const isProduct = service.features.length > 0;

    return (
      <div
        key={service.title}
        className="group bg-[#0a0a0a] p-6 rounded-xl shadow-lg transition-all duration-300 border border-[#252028] relative overflow-hidden w-full max-w-sm hover:border-[#3d3545] hover:shadow-xl hover:-translate-y-0.5"
      >
        {isProduct && (
          <div
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5a4d62]/70 to-transparent"
            aria-hidden
          />
        )}
        <div
          className={`mb-4 inline-flex rounded-lg p-3 ring-1 ring-[#252028] ${isProduct ? "bg-[#16141a]" : "bg-[#121016]"}`}
        >
          <div className="text-[#5a4d62] transition-colors duration-300 group-hover:text-[#6f5f78]">
            {service.icon}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-3 text-white tracking-tight">
          {service.title}
        </h3>
        <p className="text-gray-300 mb-4 leading-relaxed">{service.shortDescription}</p>
        {service.features.length > 0 && (
          <div className="border-t border-[#252028] pt-4 mt-2">
            <h4 className="font-semibold text-white mb-3">Incluye:</h4>
            <ul className="space-y-2.5">
              {service.features.map((feature, featureIndex) => (
                <li
                  key={featureIndex}
                  className="text-gray-300 text-sm flex items-start gap-2 leading-snug"
                >
                  <span className="text-[#5a4d62] mt-0.5 shrink-0" aria-hidden>
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            {service.footerNote && (
              <p className="mt-5 inline-flex items-center rounded-md border border-[#2f2838] bg-[#141218] px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#6f5f78]">
                {service.footerNote}
              </p>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="servicios" className="relative py-20 bg-black overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-15%,rgba(90,77,98,0.14),transparent_55%)]"
        aria-hidden
      />
      <div className="container relative mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Mis Servicios
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10 text-base md:text-lg leading-relaxed">
          Opciones listas para publicar y proyectos hechos a medida según lo que
          necesites.
        </p>

        <div className="w-full flex justify-center mb-10">
          <span className="inline-flex items-center rounded-full border border-[#2f2838] bg-[#0a0a0a] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#6f5f78]">
            Productos
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {products.map(renderCard)}

          <div className="w-full flex flex-col items-center gap-4 my-6 md:my-12">
            <div className="flex w-full max-w-lg items-center gap-4 px-2">
              <div
                className="h-px flex-1 bg-gradient-to-r from-transparent to-[#2f2838]"
                aria-hidden
              />
              <div className="h-1 w-1 shrink-0 rounded-full bg-[#5a4d62]" aria-hidden />
              <div
                className="h-px flex-1 bg-gradient-to-l from-transparent to-[#2f2838]"
                aria-hidden
              />
            </div>
            <h3 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white px-2">
              Servicios a medida
            </h3>
            <p className="text-center text-sm text-gray-500 max-w-md">
              Presupuesto y tiempos según alcance del proyecto
            </p>
          </div>

          {customServices.map(renderCard)}
        </div>
      </div>
    </section>
  );
}
