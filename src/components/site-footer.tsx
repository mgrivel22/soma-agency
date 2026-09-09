import { Logo } from "@/components/logo";
import { siteConfig } from "@/lib/site";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/politique-de-confidentialite", label: "Politique de confidentialité" },
  { href: "/#contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-anchor pb-20 text-anchor-foreground lg:pb-0">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-12 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="max-w-sm space-y-4">
          <Logo inverted />
          <p className="text-sm leading-relaxed text-anchor-muted">{siteConfig.tagline}</p>
          <div className="flex flex-col gap-2 pt-1">
            <a
              href={siteConfig.phone.href}
              className="inline-flex items-center gap-2 text-sm font-semibold text-anchor-foreground transition-colors hover:text-primary"
            >
              <Phone className="size-4 text-primary" aria-hidden />
              {siteConfig.phone.display}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 text-sm text-anchor-muted transition-colors hover:text-anchor-foreground"
            >
              <Mail className="size-4" aria-hidden />
              {siteConfig.email}
            </a>
          </div>
        </div>
        <nav aria-label="Pied de page" className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-anchor-muted transition-colors hover:text-anchor-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-anchor-muted sm:px-6 lg:px-8">
          © 2026 Soma Digital. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
