"use client";

import { motion, useReducedMotion } from "framer-motion";
import { photography } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { easeOut } from "@/lib/motion";

export function Photography() {
  const reduce = useReducedMotion();

  return (
    <Section id="fotografia" className="bg-surface-subtle">
      <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-14">
        <motion.div
          className="lg:col-span-5"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={easeOut}
        >
          <p className="mb-4 text-xs font-medium tracking-[0.22em] text-ink uppercase">
            {photography.eyebrow}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {photography.headline}
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            {photography.body}
          </p>
          <a
            href={photography.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center text-sm font-medium text-ink transition-transform hover:translate-x-0.5"
          >
            {photography.cta.label} →
          </a>
        </motion.div>

        <motion.div
          className="lg:col-span-7"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ ...easeOut, delay: 0.08 }}
        >
          <a
            href={photography.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photography.image}
              alt={photography.imageAlt}
              className="block h-auto w-full border border-border transition-[border-color] group-hover:border-ink/40"
            />
          </a>
        </motion.div>
      </div>
    </Section>
  );
}
