"use client";

import {
  IconFileText,
  IconBuilding,
  IconBrandShopee,
  IconSettings,
  IconNews,
} from "@tabler/icons-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  shortDescription: string;
  features: string[];
}

export function Services() {
  const services: Service[] = [
    {
      icon: <IconFileText size={40} />,
      title: "Landing Page",
      shortDescription:
        "Ideal para promocionar un servicio, producto o evento en una sola página.",
      features: [
        "Hasta 6 secciones (Inicio, Servicios, Sobre mi, Contacto, Testimonios, etc.)",
        "Panel de administración simple para cambiar textos e imágenes",
        "Formulario de contacto",
        "Hasta 3 ajustes luego de la entrega",
        "Entrega en 7-10 días hábiles",
      ],
    },
    {
      icon: <IconBuilding size={40} />,
      title: "Sitio Institucional",
      shortDescription:
        "Ideal para profesionales, marcas o emprendimientos con distintas áreas.",
      features: [
        "Hasta 5 páginas (Inicio, Servicios, Portfolio, Clases, Contacto o lo que elijas)",
        "Panel de administración para editar cada página de forma simple",
        "Formulario de contacto",
        "Hasta 3 ajustes incluidos",
        "Entrega en 10-15 días hábiles",
      ],
    },
    {
      icon: <IconNews size={40} />,
      title: "Sitio con Blog",
      shortDescription:
        "Ideal para quienes quieren publicar contenidos nuevos con frecuencia.",
      features: [
        "Todo lo del sitio institucional",
        "Panel de administración para subir artículos con título, imagen, texto y categoría",
        "Edición completa de textos e imágenes",
        "Hasta 3 ajustes incluidos",
        "Entrega en 12-18 días hábiles",
      ],
    },
    {
      icon: <IconBrandShopee size={40} />,
      title: "E-commerce Básico",
      shortDescription:
        "Ideal para emprendedores o marcas que venden productos físicos o digitales.",
      features: [
        "Hasta 20 productos cargados al inicio",
        "Panel de administración para agregar/modificar productos, precios, imágenes, stock",
        "Carrito de compras y pagos online (MercadoPago)",
        "Hasta 3 ajustes sin cargo luego de la entrega",
        "Entrega en 15-20 días hábiles",
      ],
    },
    {
      icon: <IconSettings size={40} />,
      title: "Sitio a Medida",
      shortDescription:
        "Ideal para plataformas más complejas (reservas, usuarios, membresías, filtros, etc.)",
      features: [
        "Desarrollo personalizado según necesidad",
        "Panel de administración completo (gestión de contenidos, usuarios, productos, clases, etc.)",
        "Hasta 3 ajustes incluidos al finalizar",
        "Desde 25 días hábiles",
      ],
    },
  ];

  return (
    <section
      id="servicios"
      className="py-20 bg-gradient-to-b from-[#1A1A1D] via-[#3B1C32] to-[#1A1A1D]"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Mis Servicios
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1A1A1D] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-[#6A1E55] relative overflow-hidden w-full max-w-sm"
            >
              <div className="text-[#A64D79] mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-4">{service.shortDescription}</p>
              <div className="border-t border-[#6A1E55] pt-4 mt-2">
                <h4 className="font-semibold text-white mb-3">Incluye:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-gray-300 text-sm flex items-center"
                    >
                      <span className="text-[#A64D79] mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
