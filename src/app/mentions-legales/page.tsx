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
        <h1 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
          Mentions légales
        </h1>
        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-muted-foreground">
          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground">Éditeur du site</h2>
            <p className="mt-2">
              Le site {siteConfig.name} est édité par Soma Digital, agence de
              création de sites web pour artisans, entreprises du BTP et
              entreprises locales.
            </p>
            <p className="mt-2">
              Contact :{" "}
              <a
                className="font-medium text-copper-dark underline underline-offset-4 hover:text-foreground"
                href={`mailto:${siteConfig.email}`}
              >
                {siteConfig.email}
              </a>
            </p>
            <p className="mt-2">
              Les informations d’immatriculation (forme juridique, siège, SIRET)
              seront complétées lors de la publication officielle du site.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground">Hébergement</h2>
            <p className="mt-2">
              Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133,
              Covina, CA 91723, États-Unis.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground">
              Propriété intellectuelle
            </h2>
            <p className="mt-2">
              L’ensemble des contenus de ce site (textes, identités visuelles,
              maquettes, code) est protégé. Toute reproduction non autorisée est
              interdite. Chaque exemple présenté dans les réalisations indique
              clairement s’il s’agit d’un site client ou d’un projet de
              démonstration.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground">Responsabilité</h2>
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
