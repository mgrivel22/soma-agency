import { CtaButton } from "@/components/cta-button";
import { HeroDevices } from "@/components/mockups";
import { Container } from "@/components/ui-primitives";
import { projects } from "@/lib/projects";
import { siteConfig } from "@/lib/site";
import { Phone, Smartphone, Sparkles, Tag, Zap } from "lucide-react";
import Link from "next/link";

const reassurances = [
  { icon: Sparkles, label: "Design sur mesure" },
  { icon: Smartphone, label: "Optimisé mobile" },
  { icon: Zap, label: "Livré en 7 jours" },
  { icon: Tag, label: "199 €, tout compris" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-anchor pb-16 pt-10 text-anchor-foreground sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.12] mix-blend-overlay" />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10">
          <div className="hero-enter max-w-2xl">
            <h1 className="font-heading text-[2rem] leading-[1.12] font-semibold text-anchor-foreground sm:text-5xl lg:text-[3.35rem]">
              Un site qui transforme vos visiteurs en demandes de devis.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-anchor-muted sm:text-lg">
              Je suis {siteConfig.founder}. Je crée des sites clairs et rapides pour
              les artisans et entreprises locales, pour que votre téléphone sonne
              plus souvent.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CtaButton href="/#contact" className="w-full sm:w-auto">
                Recevoir mon audit gratuit
              </CtaButton>
              <a
                href={siteConfig.phone.href}
                className="inline-flex h-12 min-h-12 w-full items-center justify-center gap-2 rounded-md border border-white/20 px-5 text-[15px] font-semibold tracking-tight text-anchor-foreground transition-colors hover:border-white/40 hover:bg-white/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:translate-y-px sm:hidden"
              >
                <Phone className="size-4 text-primary" aria-hidden />
                Appeler {siteConfig.founder}
              </a>
              <CtaButton
                href="/#realisations"
                variant="on-dark"
                className="hidden sm:inline-flex"
              >
                Voir mes réalisations
              </CtaButton>
            </div>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-anchor-muted">
              L’audit, c’est une vidéo de 5 minutes sur votre site ou votre fiche
              Google, avec 3 corrections concrètes. Gratuit, sous 48 h.
              <span className="hidden sm:inline">
                {" "}Ou appelez-moi au{" "}
                <a
                  href={siteConfig.phone.href}
                  className="font-semibold text-anchor-foreground underline decoration-primary/60 underline-offset-4 transition-colors hover:text-primary"
                >
                  {siteConfig.phone.display}
                </a>
                .
              </span>
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {reassurances.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-2.5 text-sm font-medium text-anchor-foreground"
                >
                  <item.icon className="size-4 shrink-0 text-primary" aria-hidden />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="hero-enter hero-enter-delay pb-10 sm:pb-6 lg:pb-4">
            <HeroDevices />
          </div>
        </div>
        <div className="mt-12 hidden border-t border-white/10 pt-8 sm:block">
          <p className="text-xs font-medium tracking-wide text-anchor-muted">
            Exemples de sites conçus pour des métiers locaux
          </p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {projects.map((project) => (
              <li key={project.slug}>
                <Link
                  href="/#realisations"
                  className="group flex items-center gap-3 border border-white/10 bg-white/4 p-2 pr-3 transition-colors hover:border-primary/40"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.previews?.desktop}
                    alt=""
                    className="h-12 w-20 shrink-0 object-cover object-top"
                  />
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold text-anchor-foreground">
                      {project.name}
                    </span>
                    <span className="block text-xs text-anchor-muted">{project.sector}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
