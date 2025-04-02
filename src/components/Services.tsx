import {
  IconCode,
  IconBrandShopee,
  IconSeo,
  IconDeviceMobile,
} from "@tabler/icons-react";

export function Services() {
  const services = [
    {
      icon: <IconCode size={40} />,
      title: "Desarrollo Web",
      description:
        "Sitios web profesionales, rápidos y optimizados para buscadores.",
    },
    {
      icon: <IconBrandShopee size={40} />,
      title: "E-Commerce",
      description: "Tiendas online completas con gestión de productos y pagos.",
    },
    {
      icon: <IconSeo size={40} />,
      title: "SEO",
      description:
        "Optimización para motores de búsqueda y mejor visibilidad online.",
    },
    {
      icon: <IconDeviceMobile size={40} />,
      title: "Diseño Responsive",
      description: "Sitios web adaptados a todos los dispositivos y pantallas.",
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-[#3B1C32]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Mis Servicios
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1A1A1D] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-[#6A1E55]"
            >
              <div className="text-[#A64D79] mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
