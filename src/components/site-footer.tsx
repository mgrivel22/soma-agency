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
    <footer className="border-t border-white/8 bg-zinc-950 pb-20 lg:pb-0">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-12 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="max-w-sm space-y-4">
          <Logo />
          <p className="text-sm leading-relaxed text-zinc-400">{siteConfig.tagline}</p>
          <div className="flex flex-col gap-2 pt-1">
            <a
              href={siteConfig.phone.href}
              className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-100 transition-colors hover:text-emerald-300"
            >
              <Phone className="size-4 text-emerald-400" aria-hidden />
              {siteConfig.phone.display}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
            >
              <Mail className="size-4 text-zinc-500" aria-hidden />
              {siteConfig.email}
            </a>
          </div>
        </div>
        <nav aria-label="Pied de page" className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/8">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-zinc-500 sm:px-6 lg:px-8">
          © 2026 Soma Digital. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
