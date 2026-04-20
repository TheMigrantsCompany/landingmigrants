"use client";

export function About() {
  const scrollToPortfolio = () => {
    const portfolioSection = document.querySelector("#portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section id="about" className="pt-8 pb-20 md:py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Sobre Mí
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Soy Iara Baudino, desarrolladora web con una fuerte sensibilidad
            visual y una mentalidad orientada a lo funcional. Combino diseño y
            desarrollo para crear sitios y experiencias digitales que no solo se
            ven bien, sino que también comunican, funcionan y conectan. Me
            especializo en construir soluciones digitales a medida, sin depender
            de plataformas prefabricadas. Cada proyecto lo encaro desde cero,
            con atención al detalle y un enfoque personalizado, para asegurar
            que lo que entrego sea único, coherente y pensado realmente para
            quien lo necesita. Más allá del código, me interesa construir desde
            lo humano: proyectos con identidad, que transmitan confianza,
            claridad y propósito. Trabajo bien en equipo, disfruto del proceso
            creativo y siempre busco mejorar lo que ya funciona.
          </p>
          <div className="flex justify-center md:justify-start">
            <button
              type="button"
              className="bg-[#1f1a22] text-white px-8 py-3 rounded-lg border border-[#2f2838] hover:bg-[#2a232e] hover:border-[#3d3545] transition-colors"
              onClick={scrollToPortfolio}
            >
              Ver Mi Trabajo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
