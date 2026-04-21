"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { IconChevronDown } from "@tabler/icons-react";

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

  const decorativeElements = [
    { size: "w-20 h-20", color: "rgba(90, 77, 98, 0.07)", x: 200, y: -300 },
    { size: "w-16 h-16", color: "rgba(90, 77, 98, 0.06)", x: -300, y: 200 },
    { size: "w-24 h-24", color: "rgba(90, 77, 98, 0.05)", x: 400, y: 200 },
    { size: "w-12 h-12", color: "rgba(90, 77, 98, 0.07)", x: -200, y: -200 },
  ];

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

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black pt-16 md:pt-8">
      {/* Capas de fondo */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_65%_at_50%_28%,rgba(90,77,98,0.14),transparent_62%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_85%,rgba(90,77,98,0.08),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_15%,rgba(60,50,70,0.06),transparent_40%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.div
            className={`absolute ${decorativeElements[0].size} -z-10 rounded-full blur-2xl`}
            style={{
              background: decorativeElements[0].color,
              x: deco0x,
              y: deco0y,
            }}
          />
          <motion.div
            className={`absolute ${decorativeElements[1].size} -z-10 rounded-full blur-2xl`}
            style={{
              background: decorativeElements[1].color,
              x: deco1x,
              y: deco1y,
            }}
          />
          <motion.div
            className={`absolute ${decorativeElements[2].size} -z-10 rounded-full blur-2xl`}
            style={{
              background: decorativeElements[2].color,
              x: deco2x,
              y: deco2y,
            }}
          />
          <motion.div
            className={`absolute ${decorativeElements[3].size} -z-10 rounded-full blur-2xl`}
            style={{
              background: decorativeElements[3].color,
              x: deco3x,
              y: deco3y,
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center justify-center gap-3"
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#5a4d62] sm:w-12" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6f5f78]">
              Desarrollo a medida
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#5a4d62] sm:w-12" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="font-title mb-6 text-4xl font-bold leading-[1.12] tracking-tight text-white md:text-6xl md:leading-[1.08]"
          >
            <span className="block md:inline">Diseño y desarrollo web</span>{" "}
            <span className="mt-1 block bg-gradient-to-r from-white via-[#e4dfe8] to-[#7d6b86] bg-clip-text text-transparent md:mt-0 md:inline">
              con identidad
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-8 h-px w-24 origin-center bg-gradient-to-r from-transparent via-[#5a4d62]/80 to-transparent md:w-40"
            aria-hidden
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="mb-12 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl"
          >
            Creo sitios y experiencias digitales a medida, que comunican,
            funcionan y conectan. Cada proyecto es único, pensado desde lo
            visual y lo humano, para transmitir confianza, claridad y propósito.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
            className="relative"
          >
            <motion.button
              type="button"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 0 1px rgba(90, 77, 98, 0.45)",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={buttonProps.onClick}
              className="relative z-10 rounded-lg border border-[#2f2838] bg-[#1f1a22] px-8 py-4 text-lg font-bold text-white transition-all hover:border-[#3d3545] hover:bg-[#2a232e]"
            >
              {buttonProps.text}
            </motion.button>
          </motion.div>
        </div>
      </div>

      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1 text-gray-500 transition-colors hover:text-[#6f5f78] md:bottom-10"
        aria-label="Ir a la sección Sobre mí"
      >
        <span className="text-[11px] font-medium uppercase tracking-[0.2em]">
          Ver más
        </span>
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <IconChevronDown size={22} stroke={1.25} className="text-[#5a4d62]" />
        </motion.span>
      </motion.button>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[1] h-28 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
