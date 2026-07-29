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
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_70%_20%,rgba(158,182,212,0.09),transparent_55%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-border" />
      </div>

      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ...easeOut, delay: 0.25, duration: 1 }}
        className="pointer-events-none absolute -right-[5%] top-1/2 z-[1] hidden w-[min(42vw,440px)] -translate-y-1/2 lg:block"
        aria-hidden
      >
        <div
          className="relative aspect-square opacity-[0.14]"
          style={{
            maskImage:
              "radial-gradient(ellipse 65% 65% at 50% 50%, black 25%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 65% 65% at 50% 50%, black 25%, transparent 75%)",
          }}
        >
          <Image
            src={brand.logo}
            alt=""
            fill
            priority
            className="object-contain"
            sizes="440px"
          />
        </div>
      </motion.div>

      <Container className="relative z-10 py-28 md:py-36">
        <div className="max-w-3xl">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...easeOut, delay: 0.05 }}
            className="mb-10"
          >
            <Logo size={40} priority className="rounded-sm" />
          </motion.div>

          <h1 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-foreground">
            {hero.headlineLines.map((line, i) => (
              <motion.span
                key={line}
                initial={reduce ? false : { opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...easeOut, delay: 0.1 + i * 0.08 }}
                className="block"
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...easeOut, delay: 0.4 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...easeOut, delay: 0.5 }}
            className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <ButtonLink href={hero.primaryCta.href} variant="primary">
              {hero.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </ButtonLink>
          </motion.div>

          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...easeOut, delay: 0.62 }}
            className="mt-8 max-w-md text-sm leading-relaxed text-muted"
          >
            {hero.trustLine}
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
