import Link from "next/link";
import { brand, navLinks, cases } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const year = new Date().getFullYear();
  const live = cases.filter((c) => c.status === "live").slice(0, 4);

  return (
    <footer className="border-t border-border bg-background">
      <Container className="py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link href="/#inicio" className="inline-flex" aria-label={brand.name}>
              <Logo size={48} />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {brand.tagline}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
              Navegación
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#contacto"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
              Contacto
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href={`mailto:${brand.email}`}
                  className="transition-colors hover:text-foreground"
                >
                  {brand.email}
                </a>
              </li>
              <li>
                <a
                  href={brand.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
            {live.length > 0 ? (
              <>
                <p className="mt-6 text-xs font-medium uppercase tracking-[0.16em] text-muted">
                  Plataformas
                </p>
                <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                  {live.map((c) => (
                    <li key={c.id}>
                      <Link
                        href={`/plataformas/${c.id}`}
                        className="transition-colors hover:text-foreground"
                      >
                        {c.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-xs text-muted">
          <p>
            © {year} {brand.name}. Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
