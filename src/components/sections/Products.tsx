import { products } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Motion";

export function Products() {
  const featured = products.find((p) => p.featured);
  const upcoming = products.find((p) => !p.featured);

  return (
    <Section id="productos" className="!pt-16 md:!pt-24">
      <FadeIn>
        <p className="mb-4 text-xs font-medium tracking-[0.22em] text-ink uppercase">
          Productos
        </p>
        <h2 className="font-display max-w-2xl text-3xl font-bold tracking-tight text-foreground md:text-4xl md:leading-[1.15]">
          Lo que construimos para el mundo. Empezando por lo nuestro.
        </h2>
      </FadeIn>

      <Stagger className="mt-14 space-y-6 md:mt-20">
        {featured ? (
          <StaggerItem>
            <a
              href={featured.href ?? undefined}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-y border-border py-12 transition-colors md:py-16"
            >
              <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
                <div className="max-w-2xl">
                  <span className="text-xs font-medium tracking-[0.18em] text-ink uppercase">
                    {featured.badge}
                  </span>
                  <h3 className="font-display mt-5 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
                    {featured.name}
                  </h3>

                  <dl className="mt-10 space-y-6">
                    {featured.problem ? (
                      <div>
                        <dt className="text-xs font-medium tracking-[0.16em] text-muted uppercase">
                          Problema
                        </dt>
                        <dd className="mt-2 text-base leading-relaxed text-muted-foreground md:text-lg">
                          {featured.problem}
                        </dd>
                      </div>
                    ) : null}
                    <div>
                      <dt className="text-xs font-medium tracking-[0.16em] text-muted uppercase">
                        Solución
                      </dt>
                      <dd className="mt-2 text-base leading-relaxed text-foreground/90 md:text-lg">
                        {featured.solution}
                      </dd>
                    </div>
                    {featured.impact ? (
                      <div>
                        <dt className="text-xs font-medium tracking-[0.16em] text-muted uppercase">
                          Por qué importa
                        </dt>
                        <dd className="mt-2 text-base leading-relaxed text-muted-foreground md:text-lg">
                          {featured.impact}
                        </dd>
                      </div>
                    ) : null}
                  </dl>

                  <span className="mt-10 inline-flex text-sm font-medium text-ink transition-transform duration-300 group-hover:translate-x-1">
                    Visitar EstuveAhí →
                  </span>
                </div>

                <p
                  className="font-display shrink-0 text-[clamp(5rem,14vw,9rem)] font-bold leading-none tracking-tighter text-foreground/[0.06] select-none"
                  aria-hidden
                >
                  {featured.short}
                </p>
              </div>
            </a>
          </StaggerItem>
        ) : null}

        {upcoming ? (
          <StaggerItem>
            <div className="border-b border-border border-dashed py-10 md:py-12">
              <span className="text-xs font-medium tracking-[0.18em] text-muted uppercase">
                {upcoming.badge}
              </span>
              <h3 className="font-display mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                {upcoming.name}
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                {upcoming.solution}
              </p>
            </div>
          </StaggerItem>
        ) : null}
      </Stagger>
    </Section>
  );
}
