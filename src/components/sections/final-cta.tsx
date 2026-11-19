import { CtaButton } from "@/components/cta-button";
import { Container } from "@/components/ui-primitives";

export function FinalCtaSection() {
  return (
    <section className="hidden border-t border-border py-14 sm:block sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-5xl">
            Votre prochain client peut déjà vous chercher sur Google.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Donnez-lui une bonne raison de vous contacter.
          </p>
          <CtaButton href="/#contact" className="mt-8">
            Recevoir mon audit gratuit
          </CtaButton>
        </div>
      </Container>
    </section>
  );
}
