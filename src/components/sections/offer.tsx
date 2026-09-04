import { CtaButton } from "@/components/cta-button";
import { Container, FadeIn, SectionEyebrow } from "@/components/ui-primitives";
import { Check } from "lucide-react";

const included = [
  "Design personnalisé",
  "4 à 6 pages",
  "Adapté mobile",
  "Formulaire de contact / demande de devis",
  "Bouton d’appel",
  "Google Maps",
  "Optimisation technique SEO de base",
  "Performance et rapidité",
  "Mise en ligne",
  "Accompagnement",
];

export function OfferSection() {
  return (
    <section id="offre" className="scroll-mt-24 border-t border-white/6 py-20 sm:py-28">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <FadeIn>
            <SectionEyebrow>Offre</SectionEyebrow>
            <h2 className="text-3xl font-semibold text-zinc-50 sm:text-4xl">
              Tout ce qu’il faut pour une présence web professionnelle.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-zinc-400">
              Un site vitrine clair, utilisable sur téléphone, et conçu pour que vos
              visiteurs vous contactent sans friction.
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <article className="rounded-2xl border border-white/10 bg-zinc-900 p-6 shadow-[0_20px_60px_-32px_rgba(0,0,0,0.9)] sm:p-8">
              <div className="flex flex-wrap items-end justify-between gap-4 border-b border-white/8 pb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-zinc-50">
                    Site vitrine sur mesure
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400">
                    Pour artisans et entreprises locales.
                  </p>
                </div>
                <p className="text-sm text-zinc-400">
                  À partir de{" "}
                  <span className="text-xl font-semibold tracking-tight text-zinc-100">
                    1 190 €
                  </span>
                </p>
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-300">
                    <Check className="mt-0.5 size-4 shrink-0 text-emerald-400" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-zinc-500">
                Le prix final dépend du contenu et des fonctionnalités du projet.
              </p>
              <CtaButton href="/#contact" className="mt-6 w-full sm:w-auto">
                Demander mon audit gratuit
              </CtaButton>
            </article>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
