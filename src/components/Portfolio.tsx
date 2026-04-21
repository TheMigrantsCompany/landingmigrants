"use client";

import Image from "next/image";
import { useRef } from "react";

interface Project {
  title: string;
  description: string;
  image?: string;
  videoUrl?: string;
  link?: string;
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
    {
      title: "Amarus Design",
      description:
        "Desarrollo web para una marca de diseño con una identidad visual definida. El sitio combina estética y funcionalidad, con una estructura clara que permite recorrer el contenido de forma fluida y ordenada. Cuenta con un panel de autogestión para actualizar contenido, manejo de usuarios y ordenes de compra de manera simple.",
      videoUrl: "/amarus-demo.mp4",
      link: "https://www.amarusdesign.com/",
    },
    {
      title: "Norte Sur Travel",
      description:
        "Desarrollo web para una agencia de viajes con una amplia oferta de destinos y paquetes turísticos. El sitio organiza el contenido de forma clara y accesible, permitiendo recorrer distintas opciones y promociones de manera simple y ordenada. Cuenta con un panel de autogestión para actualizar destinos, precios y contenido de forma ágil. Está optimizado para una correcta visualización en todos los dispositivos.",
      videoUrl: "/demo-nortesur.mp4",
      link: "https://www.nortesurtravel.com.ar/",
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-20 bg-black"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          PROYECTOS
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-[#0a0a0a] rounded-xl shadow-lg overflow-hidden border border-[#252028] ${
                index === projects.length - 1 && projects.length % 2 === 1
                  ? "md:col-span-2 md:mx-auto w-full max-w-2xl"
                  : ""
              }`}
              onMouseEnter={() => {
                if (videoRefs.current[index]) videoRefs.current[index]?.play();
              }}
              onMouseLeave={() => {
                if (videoRefs.current[index]) videoRefs.current[index]?.pause();
              }}
            >
              <div className="relative h-64 bg-[#111111]">
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
                    poster={project.image ?? undefined}
                  >
                    Tu navegador no soporta el elemento de video.
                  </video>
                ) : project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain p-4"
                  />
                ) : null}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                {project.link ? (
                  <a
                    href={project.link}
                    className="text-[#5a4d62] hover:text-[#6f5f78] font-semibold transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver proyecto →
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
