import { manifesto } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Motion";

export function Manifesto() {
  return (
    <Section id="creemos" className="relative overflow-hidden bg-surface-subtle">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_0%_50%,rgba(158,182,212,0.06),transparent_60%)]"
        aria-hidden
      />

      <FadeIn>
        <div className="mb-12 flex items-center gap-4 md:mb-16">
          <p className="text-xs font-medium tracking-[0.22em] text-ink uppercase">
            {manifesto.eyebrow}
          </p>
          <span className="h-px flex-1 bg-border" />
        </div>
      </FadeIn>

      <Stagger className="relative max-w-4xl space-y-8 md:space-y-12">
        {manifesto.lines.map((line, index) => (
          <StaggerItem key={line}>
            <p
              className={
                index === 0 || index === 1
                  ? "font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl md:leading-[1.15]"
                  : "max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl"
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
