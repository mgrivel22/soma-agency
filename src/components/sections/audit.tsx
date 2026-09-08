import { CtaButton } from "@/components/cta-button";
import { Container, FadeIn } from "@/components/ui-primitives";
import { siteConfig } from "@/lib/site";

export function AuditSection() {
  return (
    <section className="border-t border-white/6 py-20 sm:py-24">
      <Container>
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border border-emerald-400/20 bg-zinc-900 px-6 py-12 sm:px-10 sm:py-16">
            <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-emerald-400/12 blur-3xl" />
            <div className="relative mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold text-zinc-50 sm:text-4xl">
                Avant de refaire votre site, commençons par regarder ce qui peut
                être amélioré.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
                Recevez gratuitement une analyse de votre présence en ligne avec des
                recommandations concrètes sur votre site, votre conversion et votre
                visibilité locale.
              </p>
              <CtaButton href="/#contact" className="mt-8">
                Recevoir mon audit gratuit
              </CtaButton>
              <p className="mt-4 text-sm text-zinc-500">
                Sans engagement. Réponse sous 24 h ouvrées.
              </p>
              <p className="mt-6 text-sm text-zinc-400">
                Ou appelez-nous au{" "}
                <a
                  href={siteConfig.phone.href}
                  className="font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
                >
                  {siteConfig.phone.display}
                </a>
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
