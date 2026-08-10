import Link from "next/link";
import type { CaseStudy } from "@/content/site";
import { cases } from "@/content/site";
import { Container } from "@/components/ui/Container";

type CaseStudyViewProps = {
  item: CaseStudy;
};

export function CaseStudyView({ item }: CaseStudyViewProps) {
  const related = cases
    .filter(
      (c) =>
        c.id !== item.id && c.sectors.some((s) => item.sectors.includes(s))
    )
    .slice(0, 3);

  return (
    <main id="contenido" className="pt-16">
      <section className="border-b border-border bg-surface-subtle">
        <Container className="py-10 md:py-14">
          <Link
            href="/#plataformas"
            className="inline-flex text-sm text-muted-foreground transition-colors hover:text-ink"
          >
            ← Volver a plataformas
          </Link>

          <p className="mt-8 text-[11px] font-medium tracking-[0.18em] text-ink uppercase">
            Ficha técnica · {item.rank}
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {item.title}
          </h1>
          <p className="mt-3 text-base text-muted-foreground">{item.role}</p>

          {item.pitchFor ? (
            <p className="mt-8 max-w-2xl border-l border-ink/40 pl-4 text-sm leading-relaxed text-foreground/90 sm:text-base">
              <span className="font-medium text-ink">Ideal para propuestas a:</span>{" "}
              {item.pitchFor}
            </p>
          ) : null}
        </Container>
      </section>

      {item.image ? (
        <div className="border-b border-border bg-background">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.image}
            alt={`Captura de ${item.title}`}
            className="mx-auto block h-auto w-full max-w-6xl"
          />
        </div>
      ) : null}

      <section>
        <Container className="py-14 md:py-20">
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {item.summary}
          </p>

          <dl className="mt-12 grid max-w-3xl gap-10">
            <div>
              <dt className="text-xs font-medium tracking-[0.16em] text-muted uppercase">
                Problema
              </dt>
              <dd className="mt-3 text-base leading-relaxed text-foreground/90">
                {item.problem}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium tracking-[0.16em] text-muted uppercase">
                Solución
              </dt>
              <dd className="mt-3 text-base leading-relaxed text-foreground/90">
                {item.solution}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium tracking-[0.16em] text-muted uppercase">
                Impacto
              </dt>
              <dd className="mt-3 text-base leading-relaxed text-foreground/90">
                {item.impact}
              </dd>
            </div>
          </dl>

          <div className="mt-16 max-w-3xl space-y-14">
            <div>
              <h2 className="text-xs font-medium tracking-[0.16em] text-ink uppercase">
                Funcionalidades del producto
              </h2>
              <ul className="mt-5 space-y-3">
                {item.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground sm:text-base"
                  >
                    <span
                      className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-ink"
                      aria-hidden
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-medium tracking-[0.16em] text-ink uppercase">
                Paneles de operación
              </h2>
              <ul className="mt-5 space-y-3">
                {item.admin.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground sm:text-base"
                  >
                    <span
                      className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-ink"
                      aria-hidden
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {item.stack && item.stack.length > 0 ? (
            <div className="mt-16">
              <h2 className="text-xs font-medium tracking-[0.16em] text-muted uppercase">
                Stack
              </h2>
              <p className="mt-4 text-sm text-muted-foreground sm:text-base">
                {item.stack.join(" · ")}
              </p>
            </div>
          ) : null}

          <div className="mt-16 flex flex-col gap-3 border-t border-border pt-10 sm:flex-row sm:items-center">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-foreground px-6 py-3.5 text-sm font-medium tracking-tight text-background transition-all hover:bg-white"
            >
              Ver en vivo
            </a>
            <Link
              href="/#contacto"
              className="inline-flex items-center justify-center rounded-md border border-border-strong bg-transparent px-6 py-3.5 text-sm font-medium tracking-tight text-foreground transition-all hover:border-ink hover:text-ink"
            >
              Pedir una propuesta similar
            </Link>
          </div>
        </Container>
      </section>

      {related.length > 0 ? (
        <section className="border-t border-border bg-surface-subtle">
          <Container className="py-14 md:py-16">
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Más plataformas relacionadas
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((c) => (
                <li key={c.id}>
                  <Link
                    href={`/plataformas/${c.id}`}
                    className="group block border border-border bg-background p-5 transition-colors hover:border-ink/40"
                  >
                    <span className="font-mono text-xs text-ink">{c.rank}</span>
                    <span className="font-display mt-2 block text-lg font-semibold tracking-tight text-foreground">
                      {c.title}
                    </span>
                    <span className="mt-2 block text-sm text-muted-foreground">
                      {c.role}
                    </span>
                    <span className="mt-4 inline-flex text-sm font-medium text-ink transition-transform group-hover:translate-x-0.5">
                      Ver ficha →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}
    </main>
  );
}
