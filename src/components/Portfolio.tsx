import Image from "next/image";

export function Portfolio() {
  const projects = [
    {
      title: "E-commerce Turismo Ushuaia",
      description: "Plataforma de comercio electrónico para agencia de turismo",
      image: "/next.svg", // Temporalmente usando next.svg
      tags: ["Next.js", "TypeScript", "Tailwind"],
      link: "#",
    },
    {
      title: "Landing Page Corporativa",
      description: "Sitio web responsive con animaciones modernas",
      image: "/vercel.svg", // Temporalmente usando vercel.svg
      tags: ["React", "Framer Motion", "Tailwind"],
      link: "#",
    },
    // Puedes agregar más proyectos aquí
  ];

  return (
    <section id="portfolio" className="py-20 bg-[#1A1A1D]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Proyectos Destacados
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#3B1C32] rounded-xl shadow-lg overflow-hidden border border-[#6A1E55]"
            >
              <div className="relative h-64 bg-[#1A1A1D]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-[#1A1A1D] text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
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
