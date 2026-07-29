import { manifesto } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Motion";

export function Manifesto() {
  return (
    <Section id="creemos" className="bg-surface-subtle">
      <FadeIn>
        <p className="mb-12 text-xs font-medium tracking-[0.22em] text-ink uppercase md:mb-16">
          {manifesto.eyebrow}
        </p>
      </FadeIn>

      <Stagger className="max-w-3xl space-y-10 md:space-y-12">
        {manifesto.lines.map((line, index) => (
          <StaggerItem key={line}>
            <p
              className={
                index === 0
                  ? "font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl md:leading-[1.2]"
                  : "text-lg leading-relaxed text-muted-foreground md:text-xl"
              }
            >
              {line}
            </p>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
