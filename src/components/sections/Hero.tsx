"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { brand, hero } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { easeOut } from "@/lib/motion";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-noise" aria-hidden>
        <div className="absolute inset-0 bg-grid opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-15%,rgba(158,182,212,0.14),transparent_58%)]" />
        <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-ink/10 blur-[100px]" />
        <div className="absolute -right-16 bottom-1/4 h-64 w-64 rounded-full bg-ink/8 blur-[90px]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />
      </div>

      {/* Logo ambient — con fade (desktop grande / mobile más sutil) */}
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ...easeOut, delay: 0.2, duration: 1 }}
        className="pointer-events-none absolute inset-x-0 top-[18%] z-[1] mx-auto w-[70vw] max-w-[320px] md:top-1/2 md:-right-[8%] md:left-auto md:mx-0 md:w-[min(52vw,520px)] md:max-w-none md:-translate-y-1/2 lg:w-[min(48vw,580px)]"
        aria-hidden
      >
        <div
          className="relative aspect-square opacity-[0.12] md:opacity-[0.18]"
          style={{
            maskImage:
              "radial-gradient(ellipse 70% 70% at 50% 45%, black 18%, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 70% at 50% 45%, black 18%, transparent 72%)",
          }}
        >
          <Image
            src={brand.logo}
            alt=""
            fill
            priority
            className="object-contain"
            sizes="(max-width: 768px) 70vw, 520px"
          />
        </div>
      </motion.div>

      <Container className="relative z-10 py-24 md:py-32">
        <div className="max-w-5xl">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...easeOut, delay: 0.05 }}
            className="mb-10 flex items-center gap-4"
          >
            <Logo size={44} priority className="rounded-sm" />
            <span className="h-px w-8 bg-ink/50 sm:w-12" />
            <p className="font-display text-sm font-semibold tracking-[0.18em] text-ink uppercase">
              {brand.name}
            </p>
          </motion.div>

          <h1 className="font-display text-[clamp(1.85rem,4.2vw,3.25rem)] font-bold leading-[1.12] tracking-tight text-foreground">
            {hero.headlineLines.map((line, i) => (
              <motion.span
                key={line}
                initial={reduce ? false : { opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...easeOut, delay: 0.1 + i * 0.1 }}
                className="block"
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...easeOut, delay: 0.45 }}
            className="mt-10 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-xl"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...easeOut, delay: 0.55 }}
            className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <ButtonLink href={hero.primaryCta.href} variant="primary">
              {hero.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </ButtonLink>
          </motion.div>
        </div>
      </Container>

      <motion.a
        href="#creemos"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center text-muted transition-colors hover:text-ink"
        aria-label="Ir a Lo que creemos"
      >
        <motion.span
          aria-hidden
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-gradient-to-b from-ink to-transparent"
        />
      </motion.a>
    </section>
  );
}
