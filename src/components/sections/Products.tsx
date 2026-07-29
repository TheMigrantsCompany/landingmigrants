import { products } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Motion";

export function Products() {
  const featured = products.filter((p) => p.featured);
  const rest = products.filter((p) => !p.featured);

  return (
    <Section id="plataformas" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -right-20 top-20 h-80 w-80 rounded-full bg-ink/5 blur-[120px]"
        aria-hidden
      />

      <FadeIn>
        <SectionHeading
          eyebrow="Plataformas propias"
          title="Construimos plataformas. No solo proyectos."
          description="Plataformas y marcas del ecosistema IB TechLabs."
        />
      </FadeIn>

      <Stagger className="space-y-5">
        {featured.map((product) => {
          const inner = (
            <article className="group relative overflow-hidden border border-border bg-surface transition-colors duration-500 hover:border-ink/40">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_100%_0%,rgba(158,182,212,0.12),transparent_55%)] opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative grid gap-10 p-8 md:grid-cols-12 md:p-12 lg:p-16">
                <div className="md:col-span-8">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="rounded-full border border-ink/30 bg-ink/10 px-3 py-1 text-[11px] font-medium tracking-[0.16em] text-ink uppercase">
                      {product.badge}
                    </span>
                  </div>
                  <h3 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl">
                    {product.name}
                  </h3>
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                    {product.description}
                  </p>
                  {product.href ? (
                    <span className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-ink transition-transform duration-300 group-hover:translate-x-1">
                      Visitar plataforma
                      <span aria-hidden>→</span>
                    </span>
                  ) : null}
                </div>
                <div className="flex items-end justify-end md:col-span-4">
                  <p className="font-display text-[clamp(4rem,10vw,7rem)] font-bold leading-none tracking-tighter text-foreground/[0.06] select-none">
                    {product.short}
                  </p>
                </div>
              </div>
            </article>
          );

          return (
            <StaggerItem key={product.id}>
              {product.href ? (
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {inner}
                </a>
              ) : (
                inner
              )}
            </StaggerItem>
          );
        })}

        {rest.map((product) => (
          <StaggerItem key={product.id}>
            <article className="flex flex-col justify-between gap-6 border border-dashed border-border-strong bg-surface/40 p-8 md:flex-row md:items-end md:p-10">
              <div className="max-w-2xl">
                <span className="text-xs font-medium tracking-[0.18em] text-muted uppercase">
                  {product.badge}
                </span>
                <h3 className="font-display mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                  {product.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {product.description}
                </p>
              </div>
              <span className="shrink-0 text-sm text-muted">Pronto</span>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
