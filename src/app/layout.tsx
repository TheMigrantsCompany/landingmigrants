import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { getMetadataBase, getSiteUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl().replace(/\/$/, "");
const homeUrl = `${siteUrl}/`;

const description =
  "Desarrolladora web en Argentina: sitios a medida con Next.js y diseño con identidad. Menús digitales con QR, portfolio para fotógrafos, landing, institucional, blog, e-commerce y proyectos personalizados. Portfolio y contacto.";

const keywords = [
  "desarrollo web",
  "diseño web",
  "Iara Baudino",
  "sitio web Argentina",
  "landing page",
  "Next.js",
  "React",
  "sitio institucional",
  "e-commerce",
  "menú digital QR",
  "carta digital restaurante",
  "portfolio fotógrafos",
  "sitio a medida",
  "desarrollo web freelance",
];

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: "Iara Baudino | Desarrollo y diseño web a medida",
    template: "%s | Iara Baudino",
  },
  description,
  keywords,
  authors: [{ name: "Iara Baudino", url: homeUrl }],
  creator: "Iara Baudino",
  publisher: "Iara Baudino",
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
    siteName: "Iara Baudino",
    title: "Iara Baudino | Desarrollo y diseño web a medida",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Iara Baudino | Desarrollo y diseño web a medida",
    description,
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
  themeColor: "#000000",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SeoJsonLd />
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black"
        >
          Saltar al contenido
        </a>
        {children}
        <Footer />
      </body>
    </html>
  );
}
