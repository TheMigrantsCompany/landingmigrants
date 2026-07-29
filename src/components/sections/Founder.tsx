import { founder } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/Motion";
import { Logo } from "@/components/ui/Logo";

export function Founder() {
  return (
    <Section id="fundadora" className="relative overflow-hidden">
      <FadeIn>
        <div className="relative flex max-w-3xl gap-6 border-l-2 border-ink/40 pl-8 md:gap-8 md:pl-12">
          <Logo size={56} className="mt-1 shrink-0 rounded-sm" />
          <div>
            <p className="mb-5 text-xs font-medium tracking-[0.22em] text-ink uppercase">
              {founder.eyebrow}
            </p>
            <p className="font-display text-2xl font-semibold leading-snug tracking-tight text-foreground md:text-3xl md:leading-snug">
              {founder.body}
            </p>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
