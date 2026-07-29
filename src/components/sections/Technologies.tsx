import { technologies } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/Motion";

export function Technologies() {
  const loop = [...technologies, ...technologies];

  return (
    <Section id="tecnologias" className="overflow-hidden bg-surface-subtle !pb-20 md:!pb-28">
      <FadeIn>
        <SectionHeading
          eyebrow="Tecnologías"
          title="Stack moderno. Decisiones sobrias."
          description="Elegimos herramientas maduras, mantenibles y listas para plataformas que necesitan crecer."
        />
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="relative -mx-5 sm:-mx-8">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface-subtle to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface-subtle to-transparent sm:w-24" />

          <div className="overflow-hidden border-y border-border py-6">
            <div className="marquee-track flex gap-4 px-4">
              {loop.map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className="inline-flex shrink-0 items-center border border-border bg-background px-5 py-3 font-display text-sm font-semibold tracking-tight text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
