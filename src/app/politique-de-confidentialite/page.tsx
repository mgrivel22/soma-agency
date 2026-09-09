import { Container } from "@/components/ui-primitives";
import { siteConfig } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Politique de confidentialité de ${siteConfig.name}.`,
};

export default function PrivacyPage() {
  return (
    <main className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <h1 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
          Politique de confidentialité
        </h1>
        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-muted-foreground">
          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground">Données collectées</h2>
            <p className="mt-2">
              Le formulaire de contact collecte uniquement les informations
              nécessaires au traitement de votre demande d’audit ou de devis :
              identité, entreprise, activité, ville, téléphone, e-mail, site
              actuel le cas échéant, objectif, budget approximatif, délai et
              message.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground">Finalités</h2>
            <p className="mt-2">
              Ces données servent exclusivement à répondre à votre demande, à
              préparer un audit de votre présence en ligne et, le cas échéant, à
              établir une proposition. Elles ne sont pas vendues ni cédées à des
              fins publicitaires.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground">Base légale</h2>
            <p className="mt-2">
              Le traitement repose sur votre consentement, manifesté par l’envoi
              du formulaire, et sur l’exécution de mesures précontractuelles
              prises à votre demande.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground">
              Durée de conservation
            </h2>
            <p className="mt-2">
              Les demandes sont conservées le temps nécessaire au suivi
              commercial, puis archivées ou supprimées. Vous pouvez demander la
              suppression de vos données à tout moment.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground">Vos droits</h2>
            <p className="mt-2">
              Conformément au RGPD, vous disposez d’un droit d’accès, de
              rectification, d’effacement, de limitation, d’opposition et de
              portabilité. Pour exercer ces droits :{" "}
              <a
                className="font-medium text-copper-dark underline underline-offset-4 hover:text-foreground"
                href={`mailto:${siteConfig.email}`}
              >
                {siteConfig.email}
              </a>
              . Vous pouvez également introduire une réclamation auprès de la
              CNIL.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground">Cookies</h2>
            <p className="mt-2">
              Ce site n’utilise pas de cookies publicitaires. Seuls des cookies
              techniques éventuellement nécessaires au fonctionnement du site
              peuvent être déposés.
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
