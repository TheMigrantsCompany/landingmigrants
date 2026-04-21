/**
 * URL pública del sitio (sin barra final).
 * En producción definí `NEXT_PUBLIC_SITE_URL` (ej. https://www.tudominio.com)
 * para canonical, Open Graph, sitemap y datos estructurados.
 */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return "http://localhost:3000";
  return raw.replace(/\/$/, "");
}

export function getMetadataBase(): URL {
  try {
    return new URL(getSiteUrl());
  } catch {
    return new URL("http://localhost:3000");
  }
}
