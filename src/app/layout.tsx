import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SeoJsonLd } from "@/components/seo/SeoJsonLd";
import { brand } from "@/content/site";
import { getMetadataBase, getSiteUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const siteUrl = getSiteUrl().replace(/\/$/, "");
const homeUrl = `${siteUrl}/`;

const title = `${brand.name} | Estudio de plataformas digitales`;
const description =
  "Diseñamos, desarrollamos y escalamos plataformas SaaS, marketplaces y sistemas digitales con foco en experiencia de usuario, ingeniería y visión de largo plazo.";

const keywords = [
  "IB TechLabs",
  "desarrollo de plataformas digitales",
  "plataformas digitales",
  "ingeniería de software",
  "diseño de plataformas",
  "SaaS",
  "marketplace",
  "desarrollo Full Stack",
  "estudio tecnológico Argentina",
  "EstuveAhí",
  "plataformas a medida",
];

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: title,
    template: `%s | ${brand.name}`,
  },
  description,
  keywords,
  authors: [{ name: brand.founder.name, url: homeUrl }],
  creator: brand.name,
  publisher: brand.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: homeUrl,
    languages: {
      "es-AR": homeUrl,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: homeUrl,
    siteName: brand.name,
    title,
    description,
    images: [
      {
        url: brand.logo,
        width: 2000,
        height: 2000,
        alt: brand.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [brand.logo],
  },
  icons: {
    icon: [{ url: brand.logo, type: "image/png" }],
    apple: [{ url: brand.logo }],
  },
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

export const viewport: Viewport = {
  themeColor: "#070707",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} ${geistSans.className} antialiased`}
      >
        <SeoJsonLd />
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-background"
        >
          Saltar al contenido
        </a>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
