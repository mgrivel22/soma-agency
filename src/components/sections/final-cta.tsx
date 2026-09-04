import { CtaButton } from "@/components/cta-button";
import { Container, FadeIn } from "@/components/ui-primitives";

export function FinalCtaSection() {
  return (
    <section className="border-t border-white/6 py-20 sm:py-28">
      <Container>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-zinc-50 sm:text-5xl">
            Votre prochain client peut déjà vous chercher sur Google.
          </h2>
          <p className="mt-5 text-lg text-zinc-400">
            Donnez-lui une bonne raison de vous contacter.
          </p>
          <CtaButton href="/#contact" className="mt-8">
            Obtenir mon audit gratuit
          </CtaButton>
        </FadeIn>
      </Container>
    </section>
  );
}
