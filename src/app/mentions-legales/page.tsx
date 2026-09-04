import { Container } from "@/components/ui-primitives";
import { siteConfig } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales du site ${siteConfig.name}.`,
};

export default function MentionsLegalesPage() {
  return (
    <main className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-semibold text-zinc-50 sm:text-4xl">
          Mentions légales
        </h1>
        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-zinc-400">
          <section>
            <h2 className="text-lg font-semibold text-zinc-100">Éditeur du site</h2>
            <p className="mt-2">
              Le site {siteConfig.name} est édité par Soma Digital, agence de
              création de sites web pour artisans, entreprises du BTP et
              entreprises locales.
            </p>
            <p className="mt-2">
              Contact :{" "}
              <a
                className="text-emerald-400 hover:text-emerald-300"
                href={`mailto:${siteConfig.email}`}
              >
                {siteConfig.email}
              </a>
            </p>
            <p className="mt-2 text-zinc-500">
              Les informations d’immatriculation (forme juridique, siège, SIRET)
              seront complétées lors de la publication officielle du site.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-zinc-100">Hébergement</h2>
            <p className="mt-2">
              Le site est destiné à être hébergé par un prestataire d’hébergement
              web situé dans l’Union européenne. Les coordonnées de l’hébergeur
              seront indiquées ici au moment de la mise en production.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-zinc-100">Propriété intellectuelle</h2>
            <p className="mt-2">
              L’ensemble des contenus de ce site (textes, identités visuelles,
              maquettes, code) est protégé. Toute reproduction non autorisée est
              interdite. Les exemples de réalisations présentés sont des projets
              conceptuels, clairement identifiés comme tels.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-zinc-100">Responsabilité</h2>
            <p className="mt-2">
              Soma Digital s’efforce de fournir des informations exactes. Le site
              peut toutefois contenir des inexactitudes ou des omissions. Les
              liens vers des sites tiers, s’il en existe, n’engagent pas Soma
              Digital quant à leur contenu.
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
