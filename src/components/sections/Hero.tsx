"use client";

import { motion, useReducedMotion } from "framer-motion";
import { hero } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { easeOut } from "@/lib/motion";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-start overflow-hidden pt-16"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_70%_20%,rgba(158,182,212,0.09),transparent_55%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-border" />
      </div>

      <Container className="relative z-10 pt-10 pb-16 md:pt-14 md:pb-20">
        <div className="max-w-3xl">
          <h1 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-foreground">
            {hero.headlineLines.map((line, i) => (
              <motion.span
                key={line}
                initial={reduce ? false : { opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...easeOut, delay: 0.05 + i * 0.08 }}
                className="block"
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...easeOut, delay: 0.32 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...easeOut, delay: 0.42 }}
            className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <ButtonLink href={hero.primaryCta.href} variant="primary">
              {hero.primaryCta.label}
            </ButtonLink>
          </motion.div>

          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...easeOut, delay: 0.52 }}
            className="mt-8 max-w-md text-sm leading-relaxed text-muted"
          >
            {hero.trustLine}
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
