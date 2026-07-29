import Image from "next/image";
import { cases } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Motion";

export function Cases() {
  return (
    <Section id="casos" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-ink/5 blur-[130px]"
        aria-hidden
      />

      <FadeIn>
        <SectionHeading
          eyebrow="Casos"
          title="Trabajos que definen cómo construimos."
          description="Plataformas propias, complejidad técnica y ejecución de calidad."
        />
      </FadeIn>

      <Stagger className="space-y-5 md:space-y-6">
        {cases.map((item) => (
          <StaggerItem key={item.id}>
            <article className="group relative overflow-hidden border border-border bg-surface transition-all duration-500 hover:border-ink/30 hover:shadow-[0_0_0_1px_rgba(158,182,212,0.08)]">
              <div className="grid md:grid-cols-12">
                <div className="flex flex-col justify-between p-8 md:col-span-7 md:p-12 lg:p-14">
                  <div>
                    <div className="mb-6 flex items-center gap-4">
                      <span className="font-display text-3xl font-bold tracking-tighter text-ink/40 md:text-4xl">
                        {item.rank}
                      </span>
                      <span className="text-xs font-medium tracking-[0.16em] text-muted uppercase">
                        {item.role}
                      </span>
                    </div>
                    <h3 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                      {item.title}
                    </h3>
                    <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                      {item.summary}
                    </p>
                    <p className="mt-4 max-w-xl border-l border-ink/30 pl-4 text-sm leading-relaxed text-foreground/85">
                      {item.outcome}
                    </p>
                  </div>

                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-ink transition-transform duration-300 group-hover:translate-x-1"
                    >
                      Ver en vivo
                      <span aria-hidden>→</span>
                    </a>
                  ) : null}
                </div>

                <div className="relative min-h-[240px] overflow-hidden border-t border-border bg-surface-subtle md:col-span-5 md:min-h-[320px] md:border-t-0 md:border-l">
                  {item.image ? (
                    <>
                      <Image
                        src={item.image}
                        alt={`Captura de ${item.title}`}
                        fill
                        className="object-cover object-top opacity-80 transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent md:bg-gradient-to-l" />
                    </>
                  ) : (
                    <div className="relative flex h-full min-h-[240px] items-center justify-center overflow-hidden p-8 md:min-h-[320px]">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(158,182,212,0.12),transparent_55%)]" />
                      <p className="font-display relative text-center text-5xl font-bold tracking-tighter text-foreground/[0.08] md:text-6xl">
                        {item.id === "estuveahi" ? "EA!" : "IB"}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
