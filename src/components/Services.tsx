"use client";

import {
  IconFileText,
  IconBuilding,
  IconBrandShopee,
  IconSettings,
} from "@tabler/icons-react";
import { useState } from "react";

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
      title: "Página Web Simple",
      shortDescription: "Una página web elegante y profesional.",
      features: [
        "1 página web completa",
        "Diseño responsive",
        "Formulario de contacto",
        "Optimizada para móviles",
        "Entrega en 1-2 semanas",
      ],
    },
    {
      icon: <IconBuilding size={40} />,
      title: "Sitio Web Completo",
      shortDescription: "Sitio web con múltiples páginas.",
      features: [
        "3-8 páginas web",
        "Navegación completa",
        "Secciones: Inicio, Nosotros, Servicios, Contacto",
        "Diseño personalizado",
        "Entrega en 3-4 semanas",
      ],
    },
    {
      icon: <IconBrandShopee size={40} />,
      title: "Tienda Online",
      shortDescription: "Tienda completa para vender online.",
      features: [
        "Catálogo de productos",
        "Carrito de compras",
        "Sistema de pagos",
        "Panel de administración",
        "Gestión de inventario",
        "Entrega en 4-6 semanas",
      ],
    },
    {
      icon: <IconSettings size={40} />,
      title: "Mantenimiento Web",
      shortDescription: "Mantenimiento y soporte continuo.",
      features: [
        "Actualizaciones regulares",
        "Mejoras de seguridad",
        "Respaldos automáticos",
        "Soporte técnico",
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1A1A1D] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-[#6A1E55] relative overflow-hidden"
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
