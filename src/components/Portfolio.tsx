"use client";

import Image from "next/image";
import { useRef, useState } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  videoUrl?: string; // URL del video (opcional)
  link: string;
}

export function Portfolio() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const projects: Project[] = [
    {
      title: "Meru Viajes",
      description:
        "Sitio web de servicios turísticos con base en Ushuaia. Permite la venta de servicios, reservas online y pagos a través de una pasarela segura. Incluye un panel de autogestión para administrar fácilmente el contenido y las reservas.",
      image: "/project1.png",
      videoUrl: "/meru-viajes-demo.mp4",
      link: "https://www.meruviajes.tur.ar/",
    },
    {
      title: "Feria de Fotografía",
      description:
        "Página web con varias secciones y un total de 4 páginas, diseñada para un evento cultural. Incluye información, agenda, contacto y más. Cuenta con un dashboard autogestionable para actualizar el contenido de manera sencilla.",
      image: "/headfotoferia.png",
      videoUrl: "/feria-fotografia-demo.mp4",
      link: "https://www.feriadefotografia.com/",
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-b from-[#1A1A1D] via-[#3B1C32] to-[#1A1A1D]"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Proyectos Destacados
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#3B1C32] rounded-xl shadow-lg overflow-hidden border border-[#6A1E55]"
              onMouseEnter={() => {
                if (videoRefs.current[index]) videoRefs.current[index]?.play();
              }}
              onMouseLeave={() => {
                if (videoRefs.current[index]) videoRefs.current[index]?.pause();
              }}
            >
              <div className="relative h-64 bg-[#1A1A1D]">
                {project.videoUrl ? (
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    src={project.videoUrl}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    poster={project.image}
                  >
                    Tu navegador no soporta el elemento de video.
                  </video>
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain p-4"
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-[#A64D79] hover:text-[#6A1E55] font-semibold transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver proyecto →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
