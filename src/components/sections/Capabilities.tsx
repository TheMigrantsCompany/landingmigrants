import { capabilities } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Motion";

export function Capabilities() {
  return (
    <Section id="capacidades">
      <FadeIn>
        <p className="mb-4 text-xs font-medium tracking-[0.22em] text-ink uppercase">
          Capacidades
        </p>
        <h2 className="font-display max-w-2xl text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Criterio de producto. Ingeniería que escala.
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
          Aplicamos lo aprendido construyendo productos propios. No vendemos
          tareas: resolvemos la arquitectura y la ejecución de productos
          digitales.
        </p>
      </FadeIn>

      <Stagger className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 md:mt-20">
        {capabilities.map((item) => (
          <StaggerItem key={item.title}>
            <article>
              <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
