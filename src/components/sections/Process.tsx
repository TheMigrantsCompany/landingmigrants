import { process } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Motion";

export function Process() {
  return (
    <Section id="proceso" className="relative overflow-hidden">
      <FadeIn>
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title="Claridad antes de velocidad."
          description="Un proceso simple. Disciplina de plataforma. Ingeniería con visión de largo plazo."
        />
      </FadeIn>

      <Stagger className="grid gap-6 md:grid-cols-3 md:gap-5">
        {process.map((item) => (
          <StaggerItem key={item.step}>
            <article className="group relative h-full overflow-hidden border border-border bg-surface p-8 transition-colors duration-300 hover:border-ink/35 md:p-10">
              <p className="font-display text-6xl font-bold tracking-tighter text-foreground/[0.07] transition-colors duration-300 group-hover:text-ink/20 md:text-7xl">
                {item.step}
              </p>
              <h3 className="font-display mt-6 text-2xl font-semibold tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                {item.description}
              </p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
