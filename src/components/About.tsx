"use client";

import Image from "next/image";

export function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-[#1A1A1D] via-[#3B1C32] to-[#1A1A1D]"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Título solo visible arriba de la foto en mobile */}
          <h2 className="text-4xl font-bold mb-6 text-white block md:hidden order-1">
            Sobre Mí
          </h2>
          <div className="md:w-1/2 flex justify-center items-center order-2 md:order-1">
            <div className="flex justify-center items-center w-full h-[400px]">
              <Image
                src="/imagen portfolio 1.jpg"
                alt="Foto de Iara Baudino"
                width={300}
                height={300}
                className="shadow-lg object-cover bg-[#3B1C32] fade-mask"
                priority
              />
            </div>
          </div>
          <div className="md:w-1/2 order-3 md:order-2">
            {/* Título solo visible en desktop */}
            <h2 className="text-4xl font-bold mb-6 text-white hidden md:block">
              Sobre Mí
            </h2>
            <p className="text-gray-300 mb-6 text-lg whitespace-pre-line">
              Soy Iara Baudino, desarrolladora web con una fuerte sensibilidad
              visual y una mentalidad orientada a lo funcional. Combino diseño y
              desarrollo para crear sitios y experiencias digitales que no solo
              se ven bien, sino que también comunican, funcionan y conectan. Me
              especializo en construir soluciones digitales a medida, sin
              depender de plataformas prefabricadas. Cada proyecto lo encaro
              desde cero, con atención al detalle y un enfoque personalizado,
              para asegurar que lo que entrego sea único, coherente y pensado
              realmente para quien lo necesita. Más allá del código, me interesa
              construir desde lo humano: proyectos con identidad, que transmitan
              confianza, claridad y propósito. Trabajo bien en equipo, disfruto
              del proceso creativo y siempre busco mejorar lo que ya funciona.
            </p>
            <button
              className="bg-[#A64D79] text-white px-8 py-3 rounded-lg hover:bg-[#6A1E55] transition-colors"
              onClick={() => {
                const portfolioSection = document.querySelector("#portfolio");
                if (portfolioSection) {
                  portfolioSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              Ver Mi Trabajo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
