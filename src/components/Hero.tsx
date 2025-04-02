import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1A1A1D] to-[#3B1C32] pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Desarrollo Web Profesional
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl">
            Transformo tus ideas en experiencias digitales excepcionales.
            Especializado en crear sitios web modernos y efectivos para tu
            negocio.
          </p>
          <button className="bg-[#A64D79] hover:bg-[#6A1E55] text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
            Hablemos de tu proyecto
          </button>
        </div>
      </div>
    </section>
  );
}
