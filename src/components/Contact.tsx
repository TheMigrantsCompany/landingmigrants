"use client";
import { useState, useRef } from "react";

const SERVICES = [
  "Página Web Simple",
  "Sitio Web Completo",
  "Tienda Online",
  "Mantenimiento Web",
];

export function Contact() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleServiceChange = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("idle");
    const formData = new FormData(e.currentTarget);

    const message = `
Nombre: ${formData.get("name")}
Email: ${formData.get("email")}
Teléfono: ${formData.get("phone")}
Servicios: ${selectedServices.join(", ")}
Descripción: ${formData.get("description")}
Dominio/Hosting: ${formData.get("domain")}
Plazo estimado: ${formData.get("deadline")}
Mensaje adicional: ${formData.get("message")}
    `;

    const cleanForm = new FormData();
    cleanForm.set("name", String(formData.get("name") || ""));
    cleanForm.set("email", String(formData.get("email") || ""));
    cleanForm.set("message", message);

    try {
      const response = await fetch("https://formspree.io/f/mvgqzjzn", {
        method: "POST",
        body: cleanForm,
        headers: {
          Accept: "application/json",
        },
      });
      if (response.ok) {
        setStatus("success");
        // Hacer scroll suave al inicio del formulario
        const contactSection = document.querySelector("#contacto");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        // Limpiar el formulario y los servicios seleccionados después de mostrar el mensaje de éxito
        setTimeout(() => {
          formRef.current?.reset();
          setSelectedServices([]);
        }, 300);
        return;
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contacto"
      className="py-20 bg-gradient-to-b from-[#1A1A1D] via-[#3B1C32] to-[#1A1A1D]"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Contacto
        </h2>
        <p className="text-center text-gray-400 text-sm mb-8">
          Cuantos más detalles me cuentes, mejor podré ayudarte.
        </p>
        <div className="max-w-2xl mx-auto">
          {status === "success" && (
            <div className="mb-8 p-4 rounded-lg bg-green-900/60 text-green-200 text-center font-semibold border border-green-700">
              ¡Gracias por tu mensaje! Te responderé a la brevedad.
            </div>
          )}
          {status === "error" && (
            <div className="mb-8 p-4 rounded-lg bg-red-900/60 text-red-200 text-center font-semibold border border-red-700">
              Ocurrió un error al enviar el mensaje. Por favor, intentá
              nuevamente o escribime a iara.baudino.dev@gmail.com
            </div>
          )}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 bg-[#3B1C32] border border-[#6A1E55] rounded-lg focus:ring-2 focus:ring-[#A64D79] focus:border-transparent text-white"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 bg-[#3B1C32] border border-[#6A1E55] rounded-lg focus:ring-2 focus:ring-[#A64D79] focus:border-transparent text-white"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Teléfono (opcional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 bg-[#3B1C32] border border-[#6A1E55] rounded-lg focus:ring-2 focus:ring-[#A64D79] focus:border-transparent text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Selecciona el/los tipo(s) de servicio que te interesan
                </label>
                <p className="text-xs text-gray-400 mb-2">
                  Puedes seleccionar más de una opción
                </p>
                <div className="flex flex-wrap gap-2">
                  {SERVICES.map((service) => (
                    <button
                      type="button"
                      key={service}
                      className={`px-4 py-2 rounded-full border transition-colors text-sm font-semibold
                        ${
                          selectedServices.includes(service)
                            ? "bg-[#A64D79] text-white border-[#A64D79]"
                            : "bg-[#3B1C32] text-gray-300 border-[#6A1E55] hover:bg-[#6A1E55] hover:text-white"
                        }
                      `}
                      onClick={() => handleServiceChange(service)}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Breve descripción del proyecto o necesidades
              </label>
              <textarea
                id="description"
                name="description"
                rows={3}
                className="w-full px-4 py-2 bg-[#3B1C32] border border-[#6A1E55] rounded-lg focus:ring-2 focus:ring-[#A64D79] focus:border-transparent text-white"
                required
              ></textarea>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  ¿Ya tienes dominio y hosting?
                </label>
                <select
                  name="domain"
                  className="w-full px-4 py-2 bg-[#3B1C32] border border-[#6A1E55] rounded-lg focus:ring-2 focus:ring-[#A64D79] focus:border-transparent text-white"
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="si">Sí</option>
                  <option value="no">No</option>
                  <option value="nose">No sé</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="deadline"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Plazo estimado o urgencia (opcional)
                </label>
                <input
                  type="text"
                  id="deadline"
                  name="deadline"
                  className="w-full px-4 py-2 bg-[#3B1C32] border border-[#6A1E55] rounded-lg focus:ring-2 focus:ring-[#A64D79] focus:border-transparent text-white"
                  placeholder="Ej: 1 mes, lo antes posible, etc."
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Mensaje adicional
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                className="w-full px-4 py-2 bg-[#3B1C32] border border-[#6A1E55] rounded-lg focus:ring-2 focus:ring-[#A64D79] focus:border-transparent text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#A64D79] text-white py-3 px-6 rounded-lg hover:bg-[#6A1E55] transition-colors font-bold text-lg"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
