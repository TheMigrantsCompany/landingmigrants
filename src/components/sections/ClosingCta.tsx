import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/Motion";
import { Logo } from "@/components/ui/Logo";

export function ClosingCta() {
  return (
    <Section className="relative overflow-hidden !py-0">
      <FadeIn>
        <div className="relative overflow-hidden border border-border bg-surface px-8 py-16 md:px-16 md:py-24">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_120%,rgba(158,182,212,0.16),transparent_55%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-grid opacity-50"
            aria-hidden
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <div className="mb-8 flex justify-center">
              <Logo size={64} className="rounded-sm opacity-90" />
            </div>
            <p className="mb-6 text-xs font-medium tracking-[0.22em] text-ink uppercase">
              Siguiente paso
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl md:leading-[1.1]">
              ¿Tenés una plataforma que merece existir?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Contanos qué querés construir. Diseñamos e implementamos plataformas
              con propósito, claridad y visión de largo plazo.
            </p>
            <div className="mt-10 flex justify-center">
              <ButtonLink href="#contacto" variant="primary">
                Empezar conversación
              </ButtonLink>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
