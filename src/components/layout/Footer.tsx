import { brand, products, navLinks } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const year = new Date().getFullYear();
  const owned = products.filter((p) => p.featured && p.href);

  return (
    <footer className="border-t border-border bg-background">
      <Container className="py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a href="#inicio" className="inline-flex" aria-label={brand.name}>
              <Logo size={48} />
            </a>
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
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contacto"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Contacto
                </a>
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
            {owned.length > 0 ? (
              <>
                <p className="mt-6 text-xs font-medium uppercase tracking-[0.16em] text-muted">
                  Productos
                </p>
                <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                  {owned.map((p) => (
                    <li key={p.id}>
                      <a
                        href={p.href!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-foreground"
                      >
                        {p.name}
                      </a>
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
