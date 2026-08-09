"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { cases, sectors, type SectorId } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/Motion";
import { easeOut, fadeUp, staggerContainer } from "@/lib/motion";

export function Cases() {
  const [sector, setSector] = useState<SectorId>("all");
  const reduce = useReducedMotion();

  const filtered = useMemo(() => {
    if (sector === "all") return cases;
    return cases.filter((c) => c.sectors.includes(sector));
  }, [sector]);

  return (
    <Section id="plataformas" className="!pt-12 bg-surface-subtle md:!pt-16">
      <FadeIn>
        <p className="mb-4 text-xs font-medium tracking-[0.22em] text-ink uppercase">
          Plataformas creadas
        </p>
        <h2 className="font-display max-w-2xl text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Productos digitales ya en el mercado.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Cada plataforma tiene su propia página para compartir el link según el
          cliente — por ejemplo Amarus a e-commerce, Meru o Norte Sur a agencias
          de viajes.
        </p>
      </FadeIn>

      <FadeIn delay={0.05}>
        <div
          className="mt-10 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filtrar por sector"
        >
          {sectors.map((s) => {
            const selected = sector === s.id;
            return (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setSector(s.id)}
                className={`border px-3 py-1.5 text-xs font-medium tracking-wide transition-colors ${
                  selected
                    ? "border-ink bg-ink/10 text-ink"
                    : "border-border text-muted-foreground hover:border-ink/40 hover:text-foreground"
                }`}
              >
                {s.label}
              </button>
            );
          })}
        </div>
      </FadeIn>

      <motion.div
        key={sector}
        className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        initial={reduce ? false : "hidden"}
        animate="visible"
        variants={reduce ? undefined : staggerContainer}
      >
        {filtered.map((item) => (
          <motion.div
            key={item.id}
            variants={reduce ? undefined : fadeUp}
            transition={easeOut}
          >
            <Link
              href={`/plataformas/${item.id}`}
              className="group flex h-full w-full flex-col overflow-hidden border border-border bg-background text-left transition-colors hover:border-ink/40"
            >
              <div className="border-b border-border bg-surface-subtle">
                {item.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.image}
                    alt={`Captura de ${item.title}`}
                    className="block h-auto w-full"
                  />
                ) : (
                  <div className="flex aspect-[16/9] items-center justify-center">
                    <p className="font-display text-4xl font-bold tracking-tighter text-foreground/[0.08]">
                      {item.short}
                    </p>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs text-ink">{item.rank}</span>
                  <span
                    className={`text-[10px] font-medium tracking-[0.14em] uppercase ${
                      item.status === "live"
                        ? "text-ink"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.status === "live" ? "En producción" : "En progreso"}
                  </span>
                </div>
                <h3 className="font-display mt-3 text-xl font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">{item.role}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.summary}
                </p>
                <span className="mt-6 inline-flex text-sm font-medium text-ink transition-transform group-hover:translate-x-0.5">
                  Ver ficha técnica →
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-sm text-muted-foreground">
          No hay plataformas en este filtro.
        </p>
      ) : null}
    </Section>
  );
}
