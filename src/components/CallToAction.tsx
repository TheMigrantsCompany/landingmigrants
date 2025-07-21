"use client";

interface CTAContent {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export function CallToAction() {
  const content: CTAContent = {
    title: "¿Listo para empezar tu proyecto?",
    description:
      "Contacta conmigo hoy mismo y convirtamos tus ideas en realidad",
    buttonText: "Solicitar presupuesto",
    onButtonClick: () => {
      const contactSection = document.querySelector("#contacto");
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#1A1A1D] via-[#3B1C32] to-[#1A1A1D]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">{content.title}</h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          {content.description}
        </p>
        <button
          onClick={content.onButtonClick}
          className="bg-[#1A1A1D] text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-[#3B1C32] transition-colors"
        >
          {content.buttonText}
        </button>
      </div>
    </section>
  );
}
