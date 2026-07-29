import { cases } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Motion";

export function Cases() {
  return (
    <Section id="evidencia" className="bg-surface-subtle">
      <FadeIn>
        <p className="mb-4 text-xs font-medium tracking-[0.22em] text-ink uppercase">
          Evidencia
        </p>
        <h2 className="font-display max-w-2xl text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Productos y plataformas en el mercado.
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
          Problema, solución e impacto. Trabajo real, no un catálogo de demos.
        </p>
      </FadeIn>

      <Stagger className="mt-14 space-y-16 md:mt-20 md:space-y-20">
        {cases.map((item) => (
          <StaggerItem key={item.id}>
            <article className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-7">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sm text-ink">{item.rank}</span>
                  <span className="text-xs font-medium tracking-[0.16em] text-muted uppercase">
                    {item.role}
                  </span>
                </div>
                <h3 className="font-display mt-5 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  {item.title}
                </h3>

                <dl className="mt-8 space-y-5">
                  <div>
                    <dt className="text-xs font-medium tracking-[0.16em] text-muted uppercase">
                      Problema
                    </dt>
                    <dd className="mt-2 text-base leading-relaxed text-muted-foreground">
                      {item.problem}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium tracking-[0.16em] text-muted uppercase">
                      Solución
                    </dt>
                    <dd className="mt-2 text-base leading-relaxed text-foreground/90">
                      {item.solution}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium tracking-[0.16em] text-muted uppercase">
                      Impacto
                    </dt>
                    <dd className="mt-2 border-l border-ink/40 pl-4 text-base leading-relaxed text-foreground/90">
                      {item.impact}
                    </dd>
                  </div>
                </dl>

                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex text-sm font-medium text-ink transition-colors hover:text-ink-soft"
                  >
                    Ver en vivo →
                  </a>
                ) : null}
              </div>

              <div className="w-full overflow-hidden border border-border lg:col-span-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={`Captura de ${item.title}`}
                  className="block h-auto w-full"
                />
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
