import Image from "next/image";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
}

export function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Ana García",
      role: "CEO, Turismo Ushuaia",
      content:
        "Excelente trabajo en nuestro sitio web. El proceso fue muy profesional y los resultados superaron nuestras expectativas.",
      image: "/testimonial1.jpg",
    },
    {
      name: "Carlos Rodríguez",
      role: "Fundador, StartupX",
      content:
        "Gran experiencia trabajando juntos. Entregó el proyecto a tiempo y con una calidad excepcional.",
      image: "/testimonial2.jpg",
    },
  ];

  return (
    <section 
      className="py-20 bg-gradient-to-b from-[#1A1A1D] via-[#3B1C32] to-[#1A1A1D]"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Lo Que Dicen Nuestros Clientes
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#1A1A1D] p-8 rounded-xl shadow-lg border border-[#6A1E55]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 relative rounded-full overflow-hidden bg-[#3B1C32]">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-300">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
