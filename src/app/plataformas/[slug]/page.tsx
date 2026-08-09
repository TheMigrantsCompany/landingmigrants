import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { brand, cases } from "@/content/site";
import { CaseStudyView } from "@/components/sections/CaseStudyView";
import { getSiteUrl } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function getCase(slug: string) {
  return cases.find((c) => c.id === slug) ?? null;
}

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) return { title: "Plataforma no encontrada" };

  const base = getSiteUrl();
  const url = `${base}/plataformas/${item.id}`;
  const title = item.title;
  const description =
    item.pitchFor != null
      ? `${item.summary} Ideal para propuestas a: ${item.pitchFor}.`
      : item.summary;
  const image = item.image ?? brand.logo;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { "es-AR": url },
    },
    openGraph: {
      type: "article",
      locale: "es_AR",
      url,
      siteName: brand.name,
      title: `${item.title} | ${brand.name}`,
      description,
      images: [
        {
          url: image,
          alt: item.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${item.title} | ${brand.name}`,
      description,
      images: [image],
    },
  };
}

export default async function PlataformaPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) notFound();

  return <CaseStudyView item={item} />;
}
