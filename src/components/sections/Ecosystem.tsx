import Image from "next/image";
import { brand, ecosystem } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Motion";

export function Ecosystem() {
  return (
    <Section id="ecosistema" className="relative overflow-hidden bg-surface-subtle">
      <FadeIn>
        <SectionHeading
          eyebrow="Nuestro ecosistema"
          title="Parte de algo más grande."
          description="Un universo de empresas tecnológicas y creativas. Hoy somos estos. Mañana, más."
        />
      </FadeIn>

      <Stagger className="grid gap-4 md:grid-cols-3">
        {ecosystem.map((item) => {
          const card = (
            <article className="group relative flex h-full flex-col overflow-hidden border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-ink/35 md:p-10">
              {item.id === "ib-techlabs" ? (
                <div className="relative mb-2">
                  <Image
                    src={brand.logo}
                    alt=""
                    width={64}
                    height={64}
                    className="rounded-sm"
                  />
                </div>
              ) : (
                <>
                  <div className="absolute -right-4 -top-6 font-display text-7xl font-bold tracking-tighter text-foreground/[0.04] transition-colors duration-300 group-hover:text-ink/10">
                    {item.short}
                  </div>
                  <p className="relative font-mono text-xs tracking-[0.16em] text-ink uppercase">
                    {item.short}
                  </p>
                </>
              )}
              <h3 className="font-display relative mt-6 text-2xl font-semibold tracking-tight text-foreground">
                {item.name}
              </h3>
              <p className="relative mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              {item.href && item.href.startsWith("http") ? (
                <span className="relative mt-8 text-sm font-medium text-ink transition-transform duration-300 group-hover:translate-x-1">
                  Visitar →
                </span>
              ) : null}
            </article>
          );

          return (
            <StaggerItem key={item.id}>
              {item.href && item.href.startsWith("http") ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  {card}
                </a>
              ) : item.href ? (
                <a href={item.href} className="block h-full">
                  {card}
                </a>
              ) : (
                card
              )}
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
