import Image from "next/image";

interface Skill {
  title: string;
  technologies: string;
}

export function About() {
  const skills: Skill[] = [
    {
      title: "Frontend",
      technologies: "React, Next.js, TypeScript",
    },
    {
      title: "Backend",
      technologies: "Node.js, Express, MongoDB",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-[#1A1A1D] via-[#3B1C32] to-[#1A1A1D]"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="bg-[#3B1C32] w-full h-[400px] rounded-lg"></div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Sobre Nosotras
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
              Somos un equipo de desarrolladoras web apasionadas por crear
              experiencias digitales únicas y funcionales. Nos especializamos en
              el desarrollo de sitios web modernos y aplicaciones web que no
              solo destacan visualmente, sino que también están optimizadas para
              brindar el mejor rendimiento y experiencia de usuario. Nuestro
              enfoque combina creatividad, tecnología y atención al detalle para
              ofrecer soluciones personalizadas que ayudan a las empresas a
              crecer en el mundo digital.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="border border-[#6A1E55] p-4 rounded-lg bg-[#3B1C32]"
                >
                  <h3 className="font-bold mb-2 text-white">{skill.title}</h3>
                  <p className="text-gray-300">{skill.technologies}</p>
                </div>
              ))}
            </div>
            <button className="bg-[#A64D79] text-white px-8 py-3 rounded-lg hover:bg-[#6A1E55] transition-colors">
              Ver Nuestro Trabajo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
