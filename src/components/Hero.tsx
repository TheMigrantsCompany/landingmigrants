"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

interface HeroButton {
  text: string;
  onClick?: () => void;
}

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = clientX / innerWidth - 0.5;
      const y = clientY / innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Elementos decorativos que se moverán con el mouse
  const decorativeElements = [
    { size: "w-20 h-20", color: "bg-[#A64D79]/20", x: 200, y: -300 },
    { size: "w-16 h-16", color: "bg-[#6A1E55]/20", x: -300, y: 200 },
    { size: "w-24 h-24", color: "bg-[#3B1C32]/20", x: 400, y: 200 },
    { size: "w-12 h-12", color: "bg-[#A64D79]/20", x: -200, y: -200 },
  ];

  // Precalcula los transforms para cada elemento decorativo (uno por uno)
  const deco0x = useTransform(
    springX,
    [-0.5, 0.5],
    [decorativeElements[0].x * -1, decorativeElements[0].x]
  );
  const deco0y = useTransform(
    springY,
    [-0.5, 0.5],
    [decorativeElements[0].y * -1, decorativeElements[0].y]
  );
  const deco1x = useTransform(
    springX,
    [-0.5, 0.5],
    [decorativeElements[1].x * -1, decorativeElements[1].x]
  );
  const deco1y = useTransform(
    springY,
    [-0.5, 0.5],
    [decorativeElements[1].y * -1, decorativeElements[1].y]
  );
  const deco2x = useTransform(
    springX,
    [-0.5, 0.5],
    [decorativeElements[2].x * -1, decorativeElements[2].x]
  );
  const deco2y = useTransform(
    springY,
    [-0.5, 0.5],
    [decorativeElements[2].y * -1, decorativeElements[2].y]
  );
  const deco3x = useTransform(
    springX,
    [-0.5, 0.5],
    [decorativeElements[3].x * -1, decorativeElements[3].x]
  );
  const deco3y = useTransform(
    springY,
    [-0.5, 0.5],
    [decorativeElements[3].y * -1, decorativeElements[3].y]
  );

  // Precalcula los transforms para los círculos animados de fondo
  const bgCircle1X = useTransform(springX, [-0.5, 0.5], [-150, 150]);
  const bgCircle1Y = useTransform(springY, [-0.5, 0.5], [-150, 150]);
  const bgCircle2X = useTransform(springX, [-0.5, 0.5], [200, -200]);
  const bgCircle2Y = useTransform(springY, [-0.5, 0.5], [200, -200]);
  const bgCircle3X = useTransform(springX, [-0.5, 0.5], [-100, 100]);
  const bgCircle3Y = useTransform(springY, [-0.5, 0.5], [-100, 100]);

  const buttonProps: HeroButton = {
    text: "Hablemos de tu proyecto",
    onClick: () => {
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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1A1A1D] via-[#3B1C32] to-[#1A1A1D] pt-16 overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center relative">
          {/* Elementos decorativos con parallax */}
          <motion.div
            className={`absolute ${decorativeElements[0].size} rounded-full blur-2xl -z-10`}
            style={{
              background: decorativeElements[0].color,
              x: deco0x,
              y: deco0y,
            }}
          />
          <motion.div
            className={`absolute ${decorativeElements[1].size} rounded-full blur-2xl -z-10`}
            style={{
              background: decorativeElements[1].color,
              x: deco1x,
              y: deco1y,
            }}
          />
          <motion.div
            className={`absolute ${decorativeElements[2].size} rounded-full blur-2xl -z-10`}
            style={{
              background: decorativeElements[2].color,
              x: deco2x,
              y: deco2y,
            }}
          />
          <motion.div
            className={`absolute ${decorativeElements[3].size} rounded-full blur-2xl -z-10`}
            style={{
              background: decorativeElements[3].color,
              x: deco3x,
              y: deco3y,
            }}
          />

          {/* Círculos animados de fondo con más visibilidad */}
          <motion.div
            className="hidden md:fixed top-0 left-0 w-[500px] h-[500px] bg-[#A64D79]/20 rounded-full blur-[100px]"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              x: bgCircle1X,
              y: bgCircle1Y,
            }}
          />
          <motion.div
            className="hidden md:fixed top-0 right-0 w-[600px] h-[600px] bg-[#6A1E55]/15 rounded-full blur-[120px]"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              x: bgCircle2X,
              y: bgCircle2Y,
            }}
          />

          {/* Círculo adicional para más efecto */}
          <motion.div
            className="hidden md:fixed bottom-0 left-1/2 w-[400px] h-[400px] bg-[#3B1C32]/25 rounded-full blur-[80px]"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [-45, 45, -45],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              x: bgCircle3X,
              y: bgCircle3Y,
            }}
          />

          {/* Contenido principal con animaciones */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 relative"
          >
            <motion.span
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Diseño y desarrollo web <br />
              con identidad
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl relative"
          >
            Creo sitios y experiencias digitales a medida, que comunican,
            funcionan y conectan. Cada proyecto es único, pensado desde lo
            visual y lo humano, para transmitir confianza, claridad y propósito.
          </motion.p>

          {/* Botón con animación mejorada */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(166, 77, 121, 0.5)",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={buttonProps.onClick}
              className="bg-[#A64D79] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all relative z-10
                hover:bg-[#6A1E55] hover:transform"
            >
              {buttonProps.text}
            </motion.button>
            {/* Efecto de brillo detrás del botón */}
            <motion.div
              className="absolute inset-0 bg-[#A64D79] rounded-lg blur-md -z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Efecto de transición al final del Hero */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1A1A1D] to-transparent" />
    </section>
  );
}
