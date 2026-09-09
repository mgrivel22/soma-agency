import { Archivo, Geist_Mono, Inter } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { JsonLd } from "@/components/json-ld";
import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { MotionProvider } from "@/components/motion-provider";
import { siteConfig } from "@/lib/site";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const FALLBACK_SITE_URL = "https://www.soma-digital.com";

function safeMetadataBase(url: string) {
  try {
    return new URL(url || FALLBACK_SITE_URL);
  } catch {
    return new URL(FALLBACK_SITE_URL);
  }
}

export const metadata: Metadata = {
  metadataBase: safeMetadataBase(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | Soma Digital",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "création site web artisan",
    "site internet plombier",
    "site internet électricien",
    "site web BTP",
    "site vitrine entreprise locale",
    "Soma Digital",
  ],
  authors: [{ name: siteConfig.founder }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url || FALLBACK_SITE_URL,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${archivo.variable} ${geistMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <JsonLd />
        <MotionProvider>
          <a
            href="#contenu"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
          >
            Aller au contenu
          </a>
          <SiteHeader />
          <div id="contenu" className="flex flex-1 flex-col">
            {children}
          </div>
          <SiteFooter />
          <MobileCtaBar />
        </MotionProvider>
      </body>
    </html>
  );
}
