import { Logo } from "@/components/logo";
import { siteConfig } from "@/lib/site";
import Link from "next/link";

const footerLinks = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/politique-de-confidentialite", label: "Politique de confidentialité" },
  { href: "/#contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-12 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="max-w-sm space-y-4">
          <Logo />
          <p className="text-sm leading-relaxed text-zinc-400">{siteConfig.tagline}</p>
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
