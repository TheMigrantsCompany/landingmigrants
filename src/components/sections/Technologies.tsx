import { technologies } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/Motion";

/** Respaldo técnico: presente, sin protagonismo. */
export function Technologies() {
  return (
    <Section id="tecnologias" className="!py-16 md:!py-20">
      <FadeIn>
        <p className="mb-6 text-xs font-medium tracking-[0.22em] text-muted uppercase">
          Stack
        </p>
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
          Ejecutamos con un stack moderno y estable. La tecnología sostiene el
          producto; el criterio define qué construir.
        </p>
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          {technologies.map((tech) => (
            <li
              key={tech}
              className="text-sm font-medium tracking-tight text-foreground/70"
            >
              {tech}
            </li>
          ))}
        </ul>
      </FadeIn>
    </Section>
  );
}
