import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-20 bg-[#1A1A1D]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="bg-[#3B1C32] w-full h-[400px] rounded-lg"></div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-white">Sobre mí</h2>
            <p className="text-gray-300 mb-6 text-lg">
            Somos un equipo de desarrolladoras web apasionadas por crear
             experiencias digitales únicas y funcionales. 
             Nos especializamos en el desarrollo de sitios web modernos y 
             aplicaciones web que no solo destacan visualmente, 
             sino que también están optimizadas para brindar el mejor 
             rendimiento y experiencia de usuario. 
             Nuestro enfoque combina creatividad, tecnología y atención al detalle 
             para ofrecer soluciones personalizadas que ayudan 
             a las empresas a crecer en el mundo digital.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="border border-[#6A1E55] p-4 rounded-lg bg-[#3B1C32]">
                <h3 className="font-bold mb-2 text-white">Frontend</h3>
                <p className="text-gray-300">React, Next.js, TypeScript</p>
              </div>
              <div className="border border-[#6A1E55] p-4 rounded-lg bg-[#3B1C32]">
                <h3 className="font-bold mb-2 text-white">Backend</h3>
                <p className="text-gray-300">Node.js, Express, MongoDB</p>
              </div>
            </div>
            <button className="bg-[#A64D79] text-white px-8 py-3 rounded-lg hover:bg-[#6A1E55] transition-colors">
              Ver mi trabajo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
