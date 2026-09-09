import { CtaButton } from "@/components/cta-button";
import { Container } from "@/components/ui-primitives";
import { siteConfig } from "@/lib/site";

export function AuditSection() {
  return (
    <section className="border-t border-border bg-anchor py-20 text-anchor-foreground sm:py-24">
      <Container>
        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold sm:text-4xl">
            Avant de refaire votre site, commençons par regarder ce qui peut
            être amélioré.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-anchor-muted sm:text-lg">
            Vous recevez une vidéo de 5 minutes : je passe en revue votre site
            (ou votre fiche Google si vous n’en avez pas encore) et je pointe
            3 corrections concrètes. Sous 48 h. Pas de démarchage, pas de rappel
            insistant.
          </p>
          <p className="mt-4 text-sm text-anchor-muted">
            Pas encore de site ? Demandez une maquette de votre page d’accueil.
            C’est le même formulaire.
          </p>
          <CtaButton href="/#contact" className="mt-8">
            Recevoir mon audit gratuit
          </CtaButton>
          <p className="mt-4 text-sm text-anchor-muted">Sans engagement. Réponse sous 24 h ouvrées.</p>
          <p className="mt-6 text-sm text-anchor-muted">
            Ou appelez-nous au{" "}
            <a
              href={siteConfig.phone.href}
              className="font-semibold text-anchor-foreground underline decoration-primary/60 underline-offset-4 transition-colors hover:text-primary"
            >
              {siteConfig.phone.display}
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
