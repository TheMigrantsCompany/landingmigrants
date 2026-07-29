import { capabilities } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Motion";

export function Capabilities() {
  return (
    <Section id="capacidades" className="relative overflow-hidden bg-surface-subtle">
      <div
        className="pointer-events-none absolute inset-0 bg-grid opacity-40"
        aria-hidden
      />

      <FadeIn>
        <SectionHeading
          eyebrow="Qué construimos"
          title="Capacidades para plataformas ambiciosas."
          description="No vendemos horas ni páginas. Diseñamos e implementamos la tecnología que tu plataforma necesita para existir y escalar."
        />
      </FadeIn>

      <Stagger className="relative grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((item, index) => (
          <StaggerItem key={item.title}>
            <article className="group flex h-full flex-col bg-background p-8 transition-colors duration-300 hover:bg-surface md:p-10">
              <span className="font-mono text-xs text-ink/50">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display mt-5 text-xl font-semibold tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                {item.description}
              </p>
              <span
                className="mt-8 h-px w-8 bg-border-strong transition-all duration-300 group-hover:w-14 group-hover:bg-ink/50"
                aria-hidden
              />
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
