"use client";
import React, { useState } from "react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Agustina Larrondo",
      role: "Directora y productora de 'Feria de Fotografía'",
      content:
        "Trabajé con Iara en la construcción de mi web para la Feria de Fotografía. No puedo estar más contenta con el resultado. La web es funcional (que es lo más importante). Se ve clara y linda, le pasé a Iara el manual de marca de mi proyecto y con esa info ya fue suficiente para que arme la maravilla que armó. El dashboard es re intuitivo, claro y fácil. No solo es un gran trabajadora sino que también es una cálida persona con la que da gusto trabajar y eso es muy importante! (Además me aportó grandes ideas de las cuales estoy muy agradecida 🥹) Sin duda voy a seguir trabajando con ella en mis próximos proyectos, quiero hacer mi web personal con ella y de otro proyecto que tengo. Súper recomiendo trabajar con Iara.",
    },
    {
      name: "Alejandro Fábrega",
      role: "Odoo Senior Developer & Devops",
      content:
        "Tuve la oportunidad de trabajar junto a Iara en el desarrollo de una aplicación web progresiva (PWA) pensada para integrarse de forma fluida con el CRM de Odoo 18 Enterprise. Mientras ella se encargó del desarrollo del front-end, aportando soluciones modernas, accesibles y visualmente atractivas, yo estuve a cargo del diseño y la implementación del backend, construyendo una API robusta sobre la lógica de Odoo que permitiera una comunicación eficiente, segura y escalable entre ambos sistemas.\nFue una experiencia de trabajo colaborativo muy enriquecedora, donde logramos una sinergia técnica sólida que potenció el resultado final. La claridad de Iara a la hora de interpretar requerimientos funcionales y su capacidad para traducirlos en interfaces intuitivas hizo que el proyecto fluyera de forma natural desde el inicio.",
    },
    {
      name: "Francisco",
      role: "Meru Viajes y Turismo",
      content:
        'Trabajamos con Iara en la creación de la página web para mi agencia de turismo, y la experiencia fue muy satisfactoria, cumplió con los tiempos estimados en el desarrollo de la misma, y en ese periodo de tiempo incluyo en el proyecto:\n• Plataforma de pago online,\n• Que pueda filtrar por fecha, clientes y excursiones las ordenes de servicios para mejorar la productividad en la parte operativa.\n• Posibilidad de crear excursiones en pocos minutos, y modificarlos, pasarlos a estado "activo" o "inactivo" según la temporada.\nSiempre dispuesta a ayudar en consultas o dudas de funcionamiento. Y sobre todo una página eficiente, Consulten sin duda alguna, es una persona muy creativa y sobre todo laburante, y responsable con los proyectos que toma como propios.',
    },
  ];

  // Estado para controlar qué testimonios están expandidos
  const [expanded, setExpanded] = useState<number | null>(null);

  // Cantidad de caracteres a mostrar en mobile antes de cortar
  const maxCharsMobile = 220;

  return (
    <section
      id="testimonials"
      className="py-20 bg-black"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Lo Que Dicen Mis Clientes
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, idx) => {
            // Lógica para mostrar texto acortado solo en mobile
            const isTextLong = testimonial.content.length > maxCharsMobile;
            const showShort = isTextLong && expanded !== idx;

            const shortText =
              testimonial.content.slice(0, maxCharsMobile) + "…";

            return (
              <div
                key={idx}
                className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-[#252028]"
              >
                <div className="mb-4">
                  <h3 className="font-bold text-lg text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">
                    {testimonial.role}
                  </p>
                </div>
                <p className="text-gray-300 italic whitespace-pre-line">
                  {'"'}
                  {/* Mostrar texto corto o completo según el estado y el tamaño de pantalla */}
                  <span className="block md:hidden">
                    {showShort ? shortText : testimonial.content}
                    {isTextLong && (
                      <button
                        className="ml-2 text-[#6f5f78] underline"
                        onClick={() =>
                          setExpanded(expanded === idx ? null : idx)
                        }
                      >
                        {expanded === idx ? "Ver menos" : "Continuar leyendo"}
                      </button>
                    )}
                  </span>
                  {/* En desktop siempre mostrar el texto completo */}
                  <span className="hidden md:block">{testimonial.content}</span>
                  {'"'}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
