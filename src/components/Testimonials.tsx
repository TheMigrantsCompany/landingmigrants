import React from "react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Agustina Larrondo",
      role: "Directora y productora de 'Feria de Fotografía'",
      content:
        "Trabajé con Iara en la construcción de mi web para la Feria de Fotografía. No puedo estar más contenta con el resultado. La web es funcional (que es lo más importante). Se ve clara y linda, le pasé a Iara el manual de marca de mi proyecto y con esa info ya fue suficiente para que arme la maravilla que armó. El dashboard es re intuitivo, claro y fácil. No solo es un gran trabajadora sino que también es una cálida persona con la que da gusto trabajar y eso es muy importante! (Además me aportó grandes ideas de las cuales estoy muy agradecida 🥹) Sin duda voy a seguir trabajando con ella en mis próximos proyectos, quiero hacer mi web personal con ella y de otro proyecto que tengo. Súper recomiendo trabajar con Iara.",
    },
    {
      name: "Carlos Rodríguez",
      role: "Fundador, StartupX",
      content:
        "Gran experiencia trabajando juntos. Entregó el proyecto a tiempo y con una calidad excepcional. Recomiendo a Iara para cualquier proyecto digital.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#1A1A1D] via-[#3B1C32] to-[#1A1A1D]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Lo Que Dicen Mis Clientes
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-[#1A1A1D] p-8 rounded-xl shadow-lg border border-[#6A1E55]"
            >
              <div className="mb-4">
                <h3 className="font-bold text-lg text-white">
                  {testimonial.name}
                </h3>
                <p className="text-gray-400 text-sm mb-2">{testimonial.role}</p>
              </div>
              <p className="text-gray-300 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
