type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`mb-14 max-w-3xl md:mb-20 ${alignClass}`}>
      {eyebrow ? (
        <div
          className={`mb-5 flex items-center gap-4 ${align === "center" ? "justify-center" : ""}`}
        >
          <p className="text-xs font-medium tracking-[0.22em] text-ink uppercase">
            {eyebrow}
          </p>
          {align === "left" ? (
            <span className="hidden h-px w-12 bg-border-strong sm:block" aria-hidden />
          ) : null}
        </div>
      ) : null}
      <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl md:leading-[1.08]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
